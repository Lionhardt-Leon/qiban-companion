#include <jni.h>
#include <string>
#include "QibanG2P.h"
static std::string bytes(JNIEnv* env,jbyteArray value){jsize n=env->GetArrayLength(value);if(n<0||n>65536)return {};std::string out(n,'\0');env->GetByteArrayRegion(value,0,n,reinterpret_cast<jbyte*>(out.data()));return out;}
extern "C" JNIEXPORT jboolean JNICALL Java_com_qiban_companion_NativeG2P_initialize(JNIEnv* env,jclass,jbyteArray resource,jbyteArray config){auto r=bytes(env,resource),c=bytes(env,config);return qiban_g2p_safety_revision()>=3&&qiban_g2p_initialize(r.c_str(),c.c_str())==1;}
extern "C" JNIEXPORT jbyteArray JNICALL Java_com_qiban_companion_NativeG2P_process(JNIEnv* env,jclass,jbyteArray text,jbyteArray language){auto t=bytes(env,text),l=bytes(env,language);char* result=qiban_g2p_process(t.c_str(),l.c_str());std::string s=result?result:"{\"error\":\"文字前端未就绪\"}";qiban_g2p_free(result);jbyteArray out=env->NewByteArray(s.size());env->SetByteArrayRegion(out,0,s.size(),reinterpret_cast<const jbyte*>(s.data()));return out;}
