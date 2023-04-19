let movieTitle: string = "Amadeus";
movieTitle = "Arrival";
// movieTitle = 9; Not allowed

// movieTitle.upper() Not allowed automatically detets whether the method is valid for a particular type of variable or not

movieTitle.toUpperCase();

let numCatLives: number = 9;
numCatLives += 1;

let gameOver: boolean = false;
// gameOver = 'true'; Not allowed

// Type Inference

let tvShow = "Olive Kitteridge";
tvShow = "The Other Two";
// tvShow = false;

//Typescript infers that the type of this variable is boolean
let isFunny = false;
isFunny = true;
// isFunny = "asd"; Not allowed

//Any

let thing: any = "hello";
thing = 1;
thing = false;
thing();
thing.toUpperCase();
