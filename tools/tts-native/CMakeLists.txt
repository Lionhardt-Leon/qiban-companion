cmake_minimum_required(VERSION 3.20)
project(QibanG2P LANGUAGES C CXX)
set(CMAKE_CXX_STANDARD 17)
set(CMAKE_POSITION_INDEPENDENT_CODE ON)
set(BUILD_SHARED_LIBS OFF CACHE BOOL "" FORCE)
set(CPP_PINYIN_BUILD_TESTS OFF CACHE BOOL "" FORCE)
set(CPP_PINYIN_INSTALL OFF CACHE BOOL "" FORCE)
add_subdirectory(${DEPS}/cpp-pinyin ${CMAKE_BINARY_DIR}/pinyin)
add_subdirectory(${GSV}/src/g2p/hts_engine ${CMAKE_BINARY_DIR}/hts)
add_subdirectory(${GSV}/src/g2p/open_jtalk ${CMAKE_BINARY_DIR}/openjtalk)
file(GLOB NORMALIZE ${GSV}/src/text/TextNormalize/*.cpp)
add_library(QibanG2P STATIC bridge.cpp
 ${GSV}/src/g2p/base.cpp ${GSV}/src/g2p/g2p_zh.cpp
 ${GSV}/src/g2p/g2p_ja.cpp ${GSV}/src/g2p/g2p_openjtalk.cpp
 ${GSV}/src/g2p/polyphonic.cpp ${GSV}/src/g2p/SymbolManager.cpp
 ${GSV}/src/g2p/symbols.cpp ${GSV}/src/text/Coding.cpp
 ${GSV}/src/text/Utils.cpp ${GSV}/src/text/tone_sandhi.cpp
 ${GSV}/src/text/pinyin_to_symbol_map.cpp ${NORMALIZE})
target_compile_definitions(QibanG2P PRIVATE FMT_HEADER_ONLY CPPMODULE_PROJECT_ROOT_PATH="${GSV}")
target_include_directories(QibanG2P PUBLIC ${CMAKE_CURRENT_SOURCE_DIR} PRIVATE
 ${GSV}/include ${GSV}/src/g2p/open_jtalk ${GSV}/src/g2p/open_jtalk/mecab/src
 ${DEPS}/cppjieba/include ${DEPS}/SRELL ${DEPS}/utfcpp/source
 ${DEPS}/fmt/include ${DEPS}/json/include ${BOOST_HEADERS})
target_link_libraries(QibanG2P PRIVATE cpp-pinyin openjtalk hts_engine_API)
if(NOT CMAKE_SYSTEM_NAME STREQUAL "iOS")
 add_executable(qiban-g2p-probe probe.cpp)
 target_link_libraries(qiban-g2p-probe PRIVATE QibanG2P)
endif()
