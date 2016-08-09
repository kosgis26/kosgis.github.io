function Power() {
  var nameList = [];  
  alert ('Введіть 5 імен:');
  for (var i = 0; i <= 5; i++) {
    var nameEl = prompt('');        
    if (nameEl) {
      var nameClear = nameEl.trim();
      if (nameClear) {
        var nameLower = nameClear.toLowerCase();
        nameList.push(nameLower); 
      }
    }
  }  
  console.log('nameList = ', nameList);
  alert ('Дякую');
  var userName = prompt('Введіть імя користувача', '');
  console.log('userName = ', userName);
  var userNameLower = userName.toLowerCase();
  if (nameList.indexOf(userNameLower) == -1) {
    alert ('Помилка');
  } else {
    alert (userName + ', ви успішно ввійшли');
  }
}
Power(); 