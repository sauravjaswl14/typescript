// class Player {
//   public readonly first: string;
//   public readonly last: string;
//   private score = 0;
//   constructor(first: string, last: string) {
//     this.first = first;
//     this.last = last;
//   }
//   secretMethod(): void {
//     console.log("SECRET METHOD");
//   }
// }

class Player {
  constructor(
    public first: string,
    public last: string,
    protected _score: number
  ) {}
  secretMethod(): void {
    console.log("SECRET METHOD");
  }
  get fullName(): string {
    return `${this.first} ${this.last}`;
  }
  get score(): number {
    return this._score;
  }
  set score(newScore: number) {
    if (newScore < 0) {
      throw new Error("Score cannot be negative");
    }
    this._score = newScore;
  }
}

class SuperPlayer extends Player {
  public isAdmin: boolean = true;
  maxScore() {
    this._score = 2323232323;
  }
}

const elton = new Player("Elton", "Steele", 0);

//protected comes into play when we work with inheritance
// protected properties can only be accessable in child class

//readonly exists only in typescript

// By default every properties and methods in class is public
// in Public anyone can access the properties and methods outside of class
//Public is visibility
// Readonly is whether or not you can actually write to the property/ change the property

//you can publicly read last but you cant write to it

interface Colorful {
  color: string;
}

interface Printable {
  print(): void;
}

class Bike implements Colorful {
  constructor(public color: string) {}
}

class Jacket implements Colorful, Printable {
  constructor(public brand: string, public color: string) {}
  print(): void {
    console.log(`${this.color} ${this.brand} Jacket`);
  }
}

const bike1 = new Bike("red");
const jacket = new Jacket("Prada", "black");
