// Thin C boundary over GPT-SoVITS-Devel's Apache-2.0 text front end.
#include "QibanG2P.h"
#include <GPTSoVITS/G2P/G2P_Zh.h>
#include <GPTSoVITS/G2P/G2P_JA.h>
#include <GPTSoVITS/G2P/SymbolManager.h>
#include <nlohmann/json.hpp>
#include <cstring>
#include <cstdlib>
#include <filesystem>
#include <mutex>
namespace GPTSoVITS {std::filesystem::path g_globalResourcesPath;}
namespace {std::mutex lock;bool ready=false;
char *copy(const nlohmann::json &value){auto s=value.dump();auto *p=(char*)std::malloc(s.size()+1);if(p)std::memcpy(p,s.c_str(),s.size()+1);return p;}}
int qiban_g2p_initialize(const char *resources,const char *config){
  std::lock_guard<std::mutex> guard(lock);
  try {
    if(!resources||!config)return 0;
    auto path=std::filesystem::u8path(resources);
    if(!std::filesystem::is_directory(path/"dict")||!std::filesystem::is_directory(path/"jieba_dict")||!std::filesystem::is_directory(path/"g2p"/"ja"/"open_jtalk_dic"))return 0;
    GPTSoVITS::g_globalResourcesPath=path;
    auto &symbols=GPTSoVITS::G2P::SymbolManager::Instance();
    if(!symbols.LoadFromConfig(config,"qiban"))return 0;
    symbols.SetActiveVersion("qiban");ready=true;return 1;
  }catch(...){return 0;}
}
char *qiban_g2p_process(const char *text,const char *language){
  std::lock_guard<std::mutex> guard(lock);
  try {
    if(!ready||!text||!language)return copy({{"error","Text front end is not ready"}});
    if(std::strlen(text)>16000)return copy({{"error","Text exceeds limit"}});
    std::unique_ptr<GPTSoVITS::G2P::IG2P> processor;
    if(std::strcmp(language,"zh")==0)processor=std::make_unique<GPTSoVITS::G2P::G2PZH>();
    else if(std::strcmp(language,"ja")==0)processor=std::make_unique<GPTSoVITS::G2P::G2PJA>();
    else return copy({{"error","Unsupported language"}});
    auto result=processor->CleanText(text);
    if(result.phone_ids.empty()||result.phone_ids.size()!=result.phones.size())return copy({{"error","No valid phonemes"}});
    return copy({{"phones",result.phones},{"ids",result.phone_ids},{"word2ph",result.word2ph},{"text",result.norm_text}});
  }catch(const std::exception &e){return copy({{"error",e.what()}});}catch(...){return copy({{"error","Text processing failed"}});}
}
void qiban_g2p_free(char *text){std::free(text);}
