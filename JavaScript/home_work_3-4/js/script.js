var element = document.createElement('header');
    element.className = 'block';
    element.style.margin = 'auto';
    element.style.width = '500px';
    element.style.height = '400px';
    document.body.appendChild(element);
var gen = {
  addTitle: function(Title) {
    var div = document.createElement('div');
    div.innerHTML = "Тест по программированию";
    div.className = 'title';
    div.style.textAlign = 'center';
    div.style.margin = 'auto';
    div.style.paddingTop = '20px';
    div.style.paddingBottom = '20px';
    element.appendChild(div);
  },
  question: 'Вопрос №',
  answer: 'Вариант ответа №',
  addQuestions: function() {
    for (var i = 1; i <= 3; i++) {
      var div = document.createElement('div');
      div.innerHTML = i + '. ' + this.question + i;
      div.className = 'content';
      div.style.padding = '10px';
      element.appendChild(div); 
      this.addAnswers();
    }
  },
  addAnswers: function () {
     for (var i = 1; i <= 3; i++) {
       var newLi = document.createElement('li'); 
       newLi.innerHTML = "<label><input id='qwerty' type='checkbox'>" + this.answer + i + "</label>";
       newLi.style.listStyle = 'none';
       newLi.style.paddingLeft = '25px';
       newLi.style.fontSize = '12px';
       element.appendChild(newLi);
       document.querySelector("#qwerty").style.backgroundColor = '#c9e4f7';       
     }
  },
  addResultButton: function(result) {
    var div = document.createElement('button');
      div.innerHTML = 'Проверить мои результаты';
      div.style.margin = 'auto';
      div.style.marginTop = '40px';
      div.style.padding = '10px';
      div.style.backgroundColor = '#c9e4f7';
      div.style.borderColor = 'black';
      div.style.display = 'block';
      element.appendChild(div); 
  },
};

document.body.style.fontFamily = 'Helvetica';


gen.addTitle();
gen.addQuestions();
gen.addResultButton();