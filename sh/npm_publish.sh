#!/bin/bash
nrm use npm;
cd build;
npm login;
npm publish;
echo "Press Enter to continue...";
read -n 1;