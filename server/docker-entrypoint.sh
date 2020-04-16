#!/bin/bash
set -e

case $1 in
  "setup")
    echo "SETTIG UP PROJECT"
    npm install
    yarn install
    echo "APP SET UP SUCCESSFULLY"
  ;;
  "start")
    echo "SERVER RUN STARTED"
    yarn run build-ts
    yarn run start
  ;;
  *)
    exec "$@"
  ;;
esac
