//there are certain times when you want to restrict somebody's choice or with the
//values that are offered

enum seatChoice {
  AISLE = 10,
  MIDDLE, //11
  WINDOW = 30,
  FOURTH, //31
}
//by default the first enum member gets the value of 0 and then the subsequent value gets incremented
const mySeat = seatChoice.FOURTH;
