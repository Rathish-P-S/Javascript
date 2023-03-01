let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}

let str = "hello";
let i = str.length - 1;
let reversedStr = "";

while (i >= 0) {
  reversedStr += str[i];
  i--;
}
console.log(reversedStr);

let num = 5;
let i = num;
let factorial = 1;

while (i > 0) {
  factorial *= i;
  i--;
}
console.log(factorial);

let arr = [1, 2, 3, 4, 5];
let i = 0;
let sum = 0;

while (i < arr.length) {
  sum += arr[i];
  i++;
}
console.log(sum);
