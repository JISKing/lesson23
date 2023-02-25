let a = [5, 3, 8, 5, 3, 2, 1, 2];
let b = [];

a.forEach(function (item) {
  if (!b.includes(item)) {
    b.push(item);
  }
});

console.log(b);
