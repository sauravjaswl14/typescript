//number
let userId: number = 22334.56;

//boolean
let isLoggedIn: boolean = false;

//Type Inference
//here typescript is smart enough to to automatically detect the type
let num = 234;

//Any Keyword

let hero: string;

function getHero() {
  return 'thor';
}

hero = getHero(); //typescript has no idea what to infer the value

export {};
