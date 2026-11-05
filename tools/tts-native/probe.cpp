#include "QibanG2P.h"
#include <iostream>
int main(int argc,char **argv){
 if(argc!=5||!qiban_g2p_initialize(argv[1],argv[2]))return 2;
 auto *value=qiban_g2p_process(argv[4],argv[3]);if(!value)return 3;
 std::cout<<value<<std::endl;qiban_g2p_free(value);return 0;
}
