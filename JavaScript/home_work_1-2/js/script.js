function power() {
  var nomerStr = prompt('Введите число', '');
  if (nomerStr === null) {
  	return;
  }
  var nomer = parseInt(nomerStr);
  console.log('Число =', nomer);
  if (isNaN(nomer)) {
     power();
     return;
  }
  
  var expStr = prompt('Введите степень числа', '');
  if (expStr === null) {
  	return;
  }
  var exp = parseInt(expStr);
  console.log('Степень =', exp);
  if (isNaN(exp)) {
  	power()
  	return;
  }
  
  result = Math.pow(nomer, exp);
  console.log('Результат =', result);
  alert('Решение'+nomer+' ^ '+exp+' = '+result);  
}
power();

