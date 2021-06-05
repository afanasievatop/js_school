let total = 0;
for (let i = 0;i<1; i++) {
    let input = prompt ("Введите число");
    if (input === null) {
        alert(`Общая сумма чисел равна ${total}`);
    } else {
        input = +input;
        input = Number (input);
    }
        
        
    }
    if (isNaN(Number(input))){
        alert ("Было введено не число, попробуйте еще раз");
    }
}


