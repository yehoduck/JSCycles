const num1 = Number(prompt("Введіть перше число:"));
const num2 = Number(prompt("Введіть друге число:"));
const min = Math.min(num1, num2);
const max = Math.max(num1, num2);
let sum = 0;

for (let i = min; i <= max; i++) {
    sum += i;
}

console.log("Сума =", sum);