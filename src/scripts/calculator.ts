const display = document.querySelector<HTMLInputElement>(".display") //открива дисплея
const buttons = document.querySelectorAll<HTMLButtonElement>(".button") //намира всички бутони

if (!display) { //проверка дали е намерен дисплея
    throw new Error ("Display element not found!")
}

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const value = button.textContent || "";

        if (value === "C") { //ако бутона е С , чистим дисплея
            display.value = ""; //нулираме съдържанието на дисплея
        } else { //в противен случай добавяме текста от бутона на дисплея
            display.value += value
        }
    }) 
})


