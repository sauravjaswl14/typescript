// function printName(person: { first: string; last: string }): void {
//   console.log(`${person.first} ${person.last}`);
// }

// printName({ first: "Thomas", last: "Jenkins" });

// let coordinate: { x: number; y: number } = { x: 34, y: 2 };

// function randomCoordinate(): { x: number; y: number } {
//   return {
//     x: Math.random(),
//     y: Math.random(),
//   };
// }

// type Point = {
//   x: number;
//   y: number;
// };

type Song = {
  title: string;
  artist: string;
  numStreams: number;
  credits: { producer: string; writer: string };
};

// let coordinate: Point = { x: 32, y: 2 };

// function doubleCoordinate(point: Point): Point {
//   return { x: point.x * 2, y: point.y * 2 };
// }

function calculatePayout(song: Song): number {
  return song.numStreams * 0.0033;
}

function printSong(song: Song): void {
  console.log(`${song.title} - ${song.artist}`);
}

const mySong: Song = {
  title: "Unchained Melody",
  artist: "Righteous Brothers",
  numStreams: 22873321,
  credits: {
    producer: "Pjil Spector",
    writer: "Alex North",
  },
};

const earnings = calculatePayout(mySong);
console.log(earnings);

printSong(mySong);

// Optional Property
// type Point = {
//   x: number;
//   y: number;
//   z?: number;
// };

const myPoint: Point = { x: 2, y: 3 };

// Readonly Modifier
type User = {
  readonly id: number;
  username: string;
};

const user: User = {
  id: 124343,
  username: "catgurl",
};

// Intersection Types

type Circle = {
  radius: number;
};

type Colorful = {
  color: string;
};

type ColorfulCircle = Circle & Colorful;

const happyface: ColorfulCircle = {
  radius: 4,
  color: "yellow",
};

type Cat = {
  numLives: number;
};

type Dog = {
  breed: string;
};

type CatDog = Cat & Dog & { age: number };

const christy: CatDog = {
  numLives: 7,
  breed: "Husky",
  age: 9,
};
