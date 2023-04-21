"use strict";
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
    constructor(first, last, _score) {
        this.first = first;
        this.last = last;
        this._score = _score;
    }
    secretMethod() {
        console.log("SECRET METHOD");
    }
    get fullName() {
        return `${this.first} ${this.last}`;
    }
    get score() {
        return this._score;
    }
    set score(newScore) {
        if (newScore < 0) {
            throw new Error("Score cannot be negative");
        }
        this._score = newScore;
    }
}
class SuperPlayer extends Player {
    constructor() {
        super(...arguments);
        this.isAdmin = true;
    }
    maxScore() {
        this._score = 2323232323;
    }
}
const elton = new Player("Elton", "Steele", 0);
class Bike {
    constructor(color) {
        this.color = color;
    }
}
class Jacket {
    constructor(brand, color) {
        this.brand = brand;
        this.color = color;
    }
    print() {
        console.log(`${this.color} ${this.brand} Jacket`);
    }
}
const bike1 = new Bike("red");
const jacket = new Jacket("Prada", "black");
