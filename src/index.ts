import * as readline from 'readline';
import Robot from './robot';
import { Direction } from './interface';

const robot = new Robot();

const processCommand = (command: string) => {
  const [cmd, args] = command.split(' ');
  switch (cmd) {
    case 'PLACE':
      const [x, y, f] = args.split(',');
      robot.place(parseInt(x), parseInt(y), f as Direction);
      break;
    case 'MOVE':
      robot.move();
      break;
    case 'LEFT':
      robot.left();
      break;
    case 'RIGHT':
      robot.right();
      break;
    case 'REPORT':
      const report = robot.report();
      if (report) console.log(report);
      break;
  }
};

// reads input commands
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
rl.on('line', processCommand);
