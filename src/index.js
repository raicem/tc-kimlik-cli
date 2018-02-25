#!/usr/bin/env node

const actions = require('./actions.js');

const processArgs = process.argv.slice(2);

if (processArgs[0] === undefined) {
  actions.generate();
}

const commandsForArguments = {
  '-d': actions.validate,
  '--dogrula': actions.validate,
  '-h': actions.help,
  '--help': actions.help,
  '--yardim': actions.help,
};

const toRun = commandsForArguments[processArgs[0]];

if (toRun === undefined) {
  console.log('Lütfen geçerli bir komut giriniz');
  actions.help();
}

toRun();
