//🔐 Доступ к Личному Кабинету

// your code = 0

let sum = 1;
found = False


while not found:
   
    sum = int(input("Введите число от 1 до 20: "))

    
    if 1 <= sum <= 20:
        print(f"Вы ввели число {sum}, оно находится в требуемом диапазоне.")
        found = True
    else:
        print(f"Вы ввели число {sum}, которое не находится в требуемом диапазоне (от 1 до 20).")