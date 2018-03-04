#!/usr/bin/env node

const actions = require('./actions.js');

// Takes out first two console arguments
const processArgs = process.argv.slice(2);

// if there are no arguments we assume the user want to generate tc id number
if (processArgs[0] === undefined) {
  actions.generate();
}

// table that maps arguments to commands
const commandsForArguments = {
  '-d': actions.validate,
  '--dogrula': actions.validate,
  '-h': actions.help,
  '--help': actions.help,
  '--yardim': actions.help,
};

// get action to run
const toRun = commandsForArguments[processArgs[0]];

// if its invalid action run help action
if (toRun === undefined) {
  console.log('Lütfen geçerli bir komut giriniz');
  actions.help();
}

// run the action
toRun();
