//🔐 Доступ к Личному Кабинету

// your code = 0


let number = 0;


let found = false;


while (!found) {
   
    number = prompt("Введите число от 1 до 20: ");

    
    if (parseInt(number) >= 1 && parseInt(number) <= 20) {
        console.log(`Вы ввели число ${number}, оно находится в требуемом диапазоне.`);
        found = true;
    } else {
        console.log(`Вы ввели число ${number}, которое не находится в требуемом диапазоне (от 1 до 20).`);
    }
}
