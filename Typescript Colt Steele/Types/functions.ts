function square1(num) {
  num.toUpperCase();
  return num * num;
}

square1(3);
square1("asd");
square1(true);

function square(num: number) {
  return num * num;
}

square(3);

// Default Parameter

function greet(person: string = "stranger") {
  return `hello ${person}`;
}

//function return types

function add(x: number, y: number): number {
  return x + y;
}

//Never

function makeError(msg: string): never {
  throw new Error(msg);
}

function gameLoop(): never {
  while (true) {
    console.log("GAME LOOP RUNNING!");
  }
}
