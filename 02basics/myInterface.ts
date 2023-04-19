interface Person {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  // startTrail : () => string
  startTrail(): string;
  getCoupon(couponName: string): number;
}

const john: Person = {
  dbId: 3234,
  email: 'john@gmail.com',
  userId: 231,
  startTrail: () => {
    return 'trail started';
  },
  getCoupon: (name: 'heyfellas') => {
    return 4;
  },
};
