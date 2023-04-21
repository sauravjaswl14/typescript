class Player {
  #score = 0;
  #numLives = 10;
  constructor(first, last) {
    this.first = first;
    this.last = last;
    this.#secret();
  }
  get fullName() {
    return `${this.first} ${this.last}`;
  }
  set fullName(newName) {
    const [first, last] = newName.split(" ");
    this.first = first;
    this.last = last;
  }
  get score() {
    return this.#score;
  }
  set score(newScore) {
    if (newScore < 0) {
      throw new Error("Score must be positive");
    }
    this.#score = newScore;
  }
  getScore() {
    return this.#score;
  }
  updateScore(newScore) {
    this.#score = newScore;
  }
  loseLife() {
    this.#numLives -= 1;
  }
  #secret() {
    console.log("SECRET!!!");
  }
}

class AdminPlayer extends Player {
  constructor(first, last, powers) {
    super(first, last);
    this.powers = powers;
  }
  isAdmin = true;
}

const admin = new AdminPlayer("admin", "mCadmin", ["delete", "restore World"]);

const player1 = new Player("blue", "steele");
console.log(player1.first);
console.log(player1.last);

console.log(player1.getScore());
player1.updateScore(28);
console.log(player1.getScore());

console.log(player1.fullName);
player1.fullName = "Amy Adams";
