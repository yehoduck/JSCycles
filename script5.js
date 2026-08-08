let sum = 0
while (true) {
    let number = prompt("Введіть число")
    if (number === null) {
        break
    } 
    if (number === "стоп" || number === "Стоп") {
        break
    }
    number = Number(number)
    sum += number
}
console.log("Сума =", sum)