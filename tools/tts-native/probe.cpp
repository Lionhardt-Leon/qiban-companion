#include "QibanG2P.h"
#include <iostream>
#include <GPTSoVITS/Text/tone_sandhi.h>
#include <string>
int main(int argc,char **argv){
 if(argc==2&&std::string(argv[1])=="--bounds-regression"){
  GPTSoVITS::ToneSandhi tone(nullptr);std::vector<std::string> empty;
  try{tone.modified_tone(U"的","u",empty);return 4;}catch(const std::exception&){std::cout<<"Bounds rejected safely"<<std::endl;return 0;}
 }
 if((argc!=5&&argc!=4)||!qiban_g2p_initialize(argv[1],argv[2]))return 2;
 if(argc==4&&std::string(argv[3])=="--stress"){
  std::string line;while(std::getline(std::cin,line)){
   if(line.size()<4||line[2]!='\t')return 5;
   auto *value=qiban_g2p_process(line.c_str()+3,line.substr(0,2).c_str());if(!value)return 3;
   std::cout<<"RESULT "<<value<<std::endl;qiban_g2p_free(value);
  }return 0;
 }
 auto *value=qiban_g2p_process(argv[4],argv[3]);if(!value)return 3;
 std::cout<<value<<std::endl;qiban_g2p_free(value);return 0;
}
