import { Command } from 'commander';

const program = new Command();

program
.name('jsonhero')
.description('A minimal CLI tool')
.version('0.0.1');

program.parse();
