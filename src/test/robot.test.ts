import { beforeEach, test, expect, it } from '@jest/globals';
import Robot from "../robot";

let robot: Robot;

beforeEach(() => {
  robot = new Robot();
});

test('table size should be 5', () => {
  expect(robot.tableSize).toBe(5);
})

test('place the robot at 0,0 facing north', () => {
  robot.place(0, 0, 'NORTH');
  expect(robot.state.position).toEqual({ x: 0, y: 0 });
  expect(robot.state.direction).toEqual('NORTH');
});

test('should move the robot correctly', () => {
  robot.place(1,2,'EAST');
  robot.move();
  robot.move();
  robot.left();
  robot.move();
  expect(robot.report()).toBe('3,3,NORTH');
})

test('should rotate the robot correctly', () => {
  robot.place(0, 0, 'NORTH');
  robot.left();
  expect(robot.report()).toBe('0,0,WEST');
  robot.right();
  expect(robot.report()).toBe('0,0,NORTH');
});
