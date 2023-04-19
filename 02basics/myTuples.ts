let arr1: (number | string)[] = ['sj', 2];

//tuple
let user: [string, number, boolean];

//order of the array really matters in the case of tuples
user = ['harry', 2, true];

type User1 = [number, string];

const newUser: User1 = [234, 'ryu@ninja.com'];
