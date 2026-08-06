const rNumber = (Math.floor(Math.random() * 20) + 1)
let cycle
while (cycle !== rNumber) {
    let gNumber = Number(prompt("Введіть число від 1 до 20."))
    if (gNumber === 0) {
        break 
    }
    cycle = gNumber
    if (gNumber === rNumber) {
        alert("Ви вгадали! Правильне число - " + gNumber)
    } else {
        alert("Неправильно!")
    }
}