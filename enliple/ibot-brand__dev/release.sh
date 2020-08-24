#!/usr/bin/env bash
# 배포 시 변수 값 자동 설정

filepath1="./src/common/constants.js"
tmpfile1="./.tmp1.js"

sTxt1="PRODUCTION = false"
tTxt1="PRODUCTION = true"
sTxt2="STAGE = true"
tTxt2="STAGE = false"
sMsg="PRODUCTION"
if [ "$1" == "stg" ]; then
  sTxt1="PRODUCTION = true"
  tTxt1="PRODUCTION = false"
  sTxt2="STAGE = false"
  tTxt2="STAGE = true"
  sMsg="STAGE"
elif [ "$1" == "dev" ]; then
  sTxt1="PRODUCTION = true"
  tTxt1="PRODUCTION = false"
  sTxt2="STAGE = true"
  tTxt2="STAGE = false"
  sMsg="DEVELOPMENT"
fi

if [ -e $filepath1 ]; then
  cat $filepath1 \
  | sed -e "s/${sTxt1}/${tTxt1}/"  \
  | sed -e "s/${sTxt2}/${tTxt2}/"  \
  > $tmpfile1
  mv $tmpfile1 $filepath1
  if [ $(grep "${tTxt1}" $filepath1 | wc -l) -eq 1 -a $(grep "${tTxt2}" $filepath1 | wc -l) -eq 1 ]; then
    echo "${sMsg} UPDATE(API Server) OK"
  else
    echo "${sMsg} UPDATE(API Server) Failed!"
  fi
else
  echo "No such file ${PWD}/src/common/constants.js"
fi

# 빌드는 임시로 막음
#yarn build
