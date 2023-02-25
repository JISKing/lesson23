let users = [
  { id: 1, age: 17 },
  { id: 2, age: 18 },
  { id: 3, age: 19 },
  { id: 4, age: 21 },
  { id: 5, age: 17 },
  { id: 6, age: 20 },
  { id: 7, age: 25 },
];

function ids() {
  for (const user of users) {
    if ((user.age > 18) & (user.age < 21)) {
      console.log(user.id);
    }
  }
}

ids();
