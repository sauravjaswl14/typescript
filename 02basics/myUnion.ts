let score: number | string = 54;

score = '65';

type user = {
  name: string;
  id: number;
  isActive: boolean;
};

type admin = {
  username: string;
  id: number;
};

let saurav: user | admin = { name: 'saurav', id: 234, isActive: true };

saurav = { username: 'sj', id: 543 };

function getDbUser(id: number | string) {
  return `user with id ${id}`;
}

//array
const data: number[] = [1, 2, 3];
const data2: string[] = ['1', '2', '3'];
const data3: (string | number)[] = [1, 2, 3, '4'];

let allotedSeats: 'aisle' | 'middle' | 'window';
// allotedSeats = 'front'; //ERROR

export {};
