let sum = 0
while (true) {
    let number = Number(prompt("Введіть число"))
    if (number === 0) {
        break
    }
    sum += number
}
console.log("Сума =", sum)