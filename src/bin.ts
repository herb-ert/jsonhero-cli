import { Command } from 'commander';
import { viewCommand } from './cmds/view';

const program = new Command();

program
.name('jsonhero')
.description('A minimal CLI tool for handling JSON')
.version('0.0.1');

program
.command('view <file>')
.description('Read and pretty-print a JSON file')
.action(viewCommand);

program.showHelpAfterError();
program.parse(process.argv);
