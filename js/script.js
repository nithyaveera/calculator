let input = document.querySelector('.input-box input')

let inputval=(value) => {
    input.value += value
}

let calculate = () => {
    input.value = eval (input.value)
}



