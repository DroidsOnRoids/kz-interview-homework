#!/bin/bash
set -e

case $1 in
  "setup")
    echo "SETTIG UP PROJECT"
    yarn install
    echo "APP SET UP SUCCESSFULLY"
  ;;
  "start-dev")
    echo "SERVER RUN STARTED"
    yarn run start:dev
  ;;
  "run-unit-tests")
    yarn run test
  ;;
  "run-e2e-tests")
    yarn run test:e2e
  ;;
  "run-e2e-coverage")
    yarn run test:cov
  ;;
  *)
    exec "$@"
  ;;
esac
