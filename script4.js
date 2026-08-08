const rNumber = (Math.floor(Math.random() * 20) + 1)
while (true) {
    let gNumber = prompt("Введіть число від 1 до 20.") 
    if (gNumber === null) {
        break 
    } else if (gNumber === "") {
        alert("Ви нічого не ввели. Спробуйте ще раз")
    } else {
        gNumber = Number(gNumber)
        if (gNumber === rNumber) {
            alert("Ви вгадали! Правильне число - " + gNumber)
            break
        } else {
            alert("Неправильно!")
        }
    }
}