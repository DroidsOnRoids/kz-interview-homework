#!/bin/bash
set -e

case $1 in
  "setup")
    echo "SETTIG UP PROJECT"
    npm install @angular/cli
    npm install
    echo "APP SET UP SUCCESSFULLY"
  ;;
  "server")
    npm run ng -- serve --host=0.0.0.0 --port=4200 --disableHostCheck
  ;;
  *)
    exec "$@"
  ;;
esac
