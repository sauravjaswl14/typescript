const activeUsers: string[] = [];
activeUsers.push("Tony");
activeUsers.push("Robert");

// const age: number[] = [45, 33, 42, 34];

// const bools: boolean[] = [true, false, false, true];

const bools: Array<boolean> = [false, true, true, false];

type Points = {
  x: number;
  y: number;
};

const cords: Points[] = [];

cords.push({ x: 3, y: 2 });

// 2D Array
const boards: string[][] = [
  ["X", "O", "X"],
  ["O", "X", "O"],
  ["X", "X", "O"],
];
