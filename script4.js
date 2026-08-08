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
        } else if (Math.abs(gNumber - rNumber) > 3) {
            alert("Холодно")
        } else {
            alert("Гаряче")
        }
    }
}