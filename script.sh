#!/bin/bash
source /home/wipd0555/nodevenv/educa/16/bin/activate && cd /home/wipd0555/educa
npm install --save-dev && npm run build
npx pm2 stop all
PORT=6100 npx pm2 start /home/wipd0555/educa/build/index.js --name "educa bash"
