#!/usr/bin/env node

const yargs = require("yargs/yargs");
const hideBin = yargs.hideBin;
const arg = hideBin(process.argv);
const cli = yargs(arg);

cli
  .usage("Usage: watt [command] <options>")
  .demandCommand(1, "A command is required. Pass --help to see all available commands and options.")
  .strict()
  .wrap(cli.terminalWidth())
  .locale("en")
  .alias("v", "version")
  .alias("h", "help")
  .options({
      debug: {
          type: 'boolean',
          describe: 'Bootstrap debug mode',
          alias: 'd'
      }
  })
  .option('registry', {
      type: 'string',
      describe: 'Define global registry',
      alias: 'r'
  })
  .group(['debug'], 'Dev Options:')
  .epilogue("you own footer description").argv;
