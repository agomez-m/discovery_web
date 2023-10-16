#!/bin/bash

if [ $# -eq 0 ]; then
  echo "No arguments supplied"
  exit 1
fi
for arg; do
  new_args+=" ex$arg"
done
# echo "$new_args" | xargs -n1 mkdir
mkdir $new_args