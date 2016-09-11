(function init($) {

	let questions = [
		{
			'title': '1. Какой формат передачи данных наиболее распостранен?',
			'answers': [
				'a. SQL',
				'b. JSON',
				'c. XML'
			],
			'check': 1
		},
		{
			'title': '2. Выберите правильный вариант фрагменяа XML файла:',
			'answers': [
				'a. &lt;greeting/&gtHello, world!;',
				'b. &lt;greeting&gt;Hello, world!&lt;/&gt;',
				'c. &lt;greeting&gt;Hello, world!&lt;/greeting&gt;'
			],
			'check': 2
		},
		{
			'title': '3. Выберите правильный вариант фрагмента JSON файла.',
			'answers': [
				'a. {name: Иван }',
				'b. {‘name’: ‘Иван’ }',
				'c. {"name": "Иван" }'
			],
			'check': 1
		}
	];
	localStorage.setItem('questions', JSON.stringify(questions));
})(jQuery);

$(document).ready(function() { 

	$(function () {
		let questions = JSON.parse(localStorage.getItem('questions'));
	
		let html = $('#opros').html(); 
		let template = tmpl(html, {
			questions: questions
		});
		let box;
		let show;
		let modal = "";
		let body = $('body');
		
		body.append(template);
		
		$("#result").on('click', () => {
			// проверка на сделаный "checked"  на каждий "question"
			let needAnswer = false;
			for (let i = 0; i < questions.length; i++) {
				let inputQuestion = `form[name="question_${i}"]`;
				let inputs = $(inputQuestion + ' input');
				let hasChecked = false;
				for (let j = 0; j < inputs.length; j++) {
					let input = inputs[j];
					if (input.checked) {
						hasChecked = true;
					}
				}			
				// выделяем каждий "question" в катором не сделаный "checked" рамкой
				if (!hasChecked) {
					needAnswer = true;
					$(inputQuestion).css('border', '1px solid red');
				} else {
					$(inputQuestion).css('border', 'none');
				}
			};
			if (needAnswer) {
				alert("Сделайте выбор")
			} else {
				// проверка на правильные "answers" на каждый "questions" 
				let allChecked = true;
				for ( let i = 0; i < questions.length; i++ ) {
					let n = questions[i].check;
					let check = $('#questions'+i+'_lab'+n)[0].checked;
					if (!check) {
						allChecked = false;
						break;
					}
				}
				// уведомление про правильность ответов
				if (allChecked) {
					modal = "Take my congratulation , yours answers are correct!!!"
				} else {
					modal = "Yours answers are false, try again later!!!"
				};
				// создание модального окна с выводом "modal"
				box = $('<div class="modalBox"></div>');
				show = $('<div class="modal"><a>"' + modal + '"</a><div class="modalButtom"><input type="submit" id="submit" value="Ok"></div></div>');
				body.append(box);
				body.append(show);
			}
			// при клике на кнопку "Ok" удаляет модальное окно и чистит форму
			$('#submit').on('click', () => {
				box.remove();
				show.remove();
				let inputs = $('form input');
				Array.prototype.forEach.call(inputs, input => input.checked = false);
			});
		});
	});
})