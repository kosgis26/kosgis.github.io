var power = {  
  nomer: 0,
  exp: 0,
  setNomer: function(nomerStr) {
    if (nomerStr === null) {
      return false;
    }
    this.nomer = parseInt(nomerStr);
    return true;
  },
  setExp: function(expStr) {
    if (expStr === null) {
      return false;
    }
    this.exp = parseInt(expStr);
    return true;
  },
  calcPower: function() {
    return Math.pow(this.nomer, this.exp);
  }
};
// power.init();

var init = function() {
    var nomerStr = prompt('Введите число', '');
    if (!power.setNomer(nomerStr)) {
      return;
    }  
    console.log('Число =', power.nomer);
    if (isNaN(power.nomer)) {
       init();
       return;
    }  
    var expStr = prompt('Введите степень числа', '');
    if (!power.setExp(expStr)) {
      return;
    }  
    console.log('Степень =', power.exp);
    if (isNaN(power.exp)) {
      init()
      return;
    }  
    var result = power.calcPower();
    console.log('Результат =', result);
    alert('Решение' + power.nomer + ' ^ ' + power.exp + ' = ' + result);  
  }
  
module.exports = power;