let a = [5, 3, -4, 25, 32, -16, 6];
let b = [21, -30, 9, 5, 12, -19, 5, 25];

function comparison(aSum, bSum) {
  aSum = 0;
  bSum = 0;

  for (let aNum of a) {
    aSum += aNum;
  }

  for (let bNum of b) {
    bSum += bNum;
  }

  if (aSum < bSum) {
    return "a < b";
  } else if (aSum > bSum) {
    return "a > b";
  } else {
    return "a == b";
  }
}

console.log(comparison());
