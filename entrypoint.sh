#!/bin/sh -l

echo "Hello $1"
time=$(date)
echo "time=$time" >> $GITHUB_OUTPUT

if [ -f $2 ]; then
  cat $2 >> $GITHUB_OUTPUT
fi

pwd

ls -al