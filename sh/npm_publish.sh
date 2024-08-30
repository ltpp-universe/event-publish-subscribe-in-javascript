#!/bin/bash
nrm use npm;
cd build;
npm publish;
nrm use taobao;
echo "Press Enter to continue...";
read -n 1;