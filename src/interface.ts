// possible directions a robot can face
export type Direction = 'NORTH' | 'SOUTH' | 'EAST' | 'WEST';

// position of the robot
export interface Position {
  x: number;
  y: number;
}

// interface for the robot state representing the robots current position and state
export interface RobotState {
  position: Position | null;
  direction: Direction | null;
}