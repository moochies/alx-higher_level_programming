#!/usr/bin/node
const argv = process.argv;
const arg = argv[2];

if (arg) {
  console.log(arg);
} else {
  console.log('No argument');
}
