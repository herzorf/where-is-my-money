#!/usr/bin/env bash

yarn build &&
cd build &&
git init &&
git add . &&
git commit -m "deploy" &&
git remote add origin https://github.com/1446450047/where-is-my-money-website.git &&
git push -u origin master -f
cd -

