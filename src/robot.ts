import { Direction, Position, RobotState } from "./interface";

class Robot {
  private state: RobotState = { position: null, direction: null };
  // represents the table size
  private readonly tableSize = 5;

  // Check if the position is within table boundaries
  private isValidPosition(position: Position): boolean {
    return position.x >= 0 && position.x < this.tableSize && position.y >= 0 && position.y < this.tableSize;
  }

  // Place the robot at a give position and direction
  place(x: number, y: number, direction: Direction) {
    if (this.isValidPosition({ x, y })) {
      this.state.position = { x, y };
      this.state.direction = direction;
    }
  }

  // Move the robot one unit forward in the current direction
  move() {
    if (!this.state.position || !this.state.direction) return;

    let { x, y } = this.state.position;

    switch (this.state.direction) {
      case 'NORTH': y++; break;
      case 'SOUTH': y--; break;
      case 'EAST': x++; break;
      case 'WEST': x--; break;
    }

    // robots position moves if within the table boundaries
    if (this.isValidPosition({ x, y })) {
      this.state.position = { x, y };
    }
  }

  // rotates the robot 90 degrees to the left
  left() {
    // checks if the robot has a direction set
    if (!this.state.direction) return;
    // an array of possible directions
    const directions: Direction[] = ['NORTH', 'WEST', 'SOUTH', 'EAST'];
    // gets the index of the current direction, adds 1 to the current index to get the left direction and modulo 4 to get the next direction
    this.state.direction = directions[(directions.indexOf(this.state.direction) + 1) % 4];
  }

  // rotates the robot 90 degrees to the right
  right() {
    if (!this.state.direction) return;
    const directions: Direction[] = ['NORTH', 'EAST', 'SOUTH', 'WEST'];
    this.state.direction = directions[(directions.indexOf(this.state.direction) + 1) % 4];
  }

  // Report the current position and direction of the robot
  report(): string | null {
    if (!this.state.position || !this.state.direction) return null;
    return `${this.state.position.x},${this.state.position.y},${this.state.direction}`;
  }
}

export default Robot;