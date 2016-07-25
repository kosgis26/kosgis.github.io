var gen = {
	addTitle: function(Title) {
		var div = document.createElement('div');
		div.innerHTML = "Тест по програмированию";
		div.className = 'header';
		div.style.textAlign = 'center';
		div.style.margin = 'auto';
		div.style.paddingTop = '20px';
		div.style.paddingBottom = '20px';
		document.body.appendChild(div);
	},
	question: 'Вопрос №',
	answer: 'Вариант ответа №',
	addQuestion: function() {
		for (var i = 1; i <= 3; i++) {
			var div = document.createElement('div');
			div.innerHTML = i + '. ' + this.question + i;
			div.className = 'content';
			div.style.padding = '10px';
			document.body.appendChild(div); 
			this.addAnswer();
		}
	},
	addAnswer: function () {
		for (var i = 1; i <= 3; i++) {
			var newLi = document.createElement('li'); 
			newLi.innerHTML = "<input id='qwerty' type='checkbox' class='box'><label>" + this.answer + i + "</label></input>";
			newLi.style.listStyle = 'none';
			newLi.style.paddingLeft = '25px';
			newLi.style.fontSize = '12px';
			document.body.appendChild(newLi);
			document.querySelector("#qwerty").style.backgroundColor = '#c9e4f7';       
		}
	},
	myResult: function(result) {
		var div = document.createElement('button');
			div.innerHTML = 'Проверить мои результаты';
			div.style.margin = 'auto';
			div.style.marginTop = '40px';
			div.style.padding = '10px';
			div.style.backgroundColor = '#c9e4f7';
			div.style.borderColor = 'black';
			div.style.display = 'block';
			document.body.appendChild(div); 
		},
	};

document.body.style.fontFamily = 'Helvetica';

gen.addTitle();
gen.addQuestion();
gen.myResult();