var namber = prompt('Введите число', '');
console.log('Число =', namber);
var exp = prompt('Введите степень числа', '');
console.log('Степень =', exp);
result = Math.pow(namber, exp)
console.log('Результат =', result);
alert('Решение'+namber+' ^ '+exp+' = '+result);
