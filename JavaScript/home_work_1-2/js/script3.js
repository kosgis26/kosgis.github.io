function Power() {
    var arr = [];
    alert ('Введіть 5 імен:');
    for (var i = 0; i <= 4; i++) {
        arr[i] = prompt('');
    }
    console.log('arr = ', arr);
    if (arr[i] === null) {
        alert ('Введіть 5 імен:');
        return;
    }
    alert ('Дякую');
    var name = prompt('Введіть імя користувача', '');
    console.log('name = ', name);
    if (name == null) {
        alert ('Введіть 5 імен:');
        return;
    }
    if (arr.indexOf(name) == -1 ){
        alert ('Помилка');
    } else {
        alert(name + ', ви успішно ввійшли');
    }
}
Power(); 