(function init($) {
	var questions = [
		"1. Какой формат передачи данных наиболее распостранен?", 
		"2. Выберите правильный вариант фрагменяа XML файла:", 
		"3. Выберите правильный вариант фрагмента JSON файла."
	];
	var answers = [
		["a. SQL", "b. JSON", "c. XML"], 
		["a. &lt;greeting/&gtHello, world!;", "b. &lt;greeting&gt;Hello, world!&lt;/&gt;", "c. &lt;greeting&gt;Hello, world!&lt;/greeting&gt;"],
		["a. {name: Иван }", "b. {‘name’: ‘Иван’ }", 'c. {"name": "Иван" }']
	];	
	localStorage.setItem('questions', JSON.stringify(questions));
	localStorage.setItem('answers', JSON.stringify(answers));
})(jQuery);

$(document).ready(function() { 
'use strict'
	$(function () {
		var questions = JSON.parse(localStorage.getItem('questions'));
		var answers = JSON.parse(localStorage.getItem('answers'));
	
		var html = $('#opros').html(); 
		var template = tmpl(html, {
			questions: questions,
			answers: answers
		});
		
		var modal = "";
		var body=$('body');
		
		body.append(template);
		
		$("#result").on('click', function() {
		// як вказати що вони повинні бути вибраними?
			
			var answer0 = $('form[name="question_0"] input[id="lab_1"]')[0];
			var answer1 = $('form[name="question_1"] input[id="lab_2"]')[0];
			var answer2 = $('form[name="question_2"] input[id="lab_1"]')[0];
			
			var box;
			var show;
			
			if (answer0.checked && answer1.checked && answer2.checked) {
				modal = "Take my congratulation , yours answers are correct!!!"
			} else {
				modal = "Yours answers are false, try again later!!!"
			};
			
			function showModal()  {
				box = $('<div class="modalBox"></div>');
				show = $('<div class="modal"><a>"' + modal + '"</a><div class="modalButtom"><input type="submit" id="submit" name="Submit" value="Ok"></div></div>');
				body.append(box);
				body.append(show);
			};
			// проверка на сделаний ответ на каждий вопрос
			var needAnswer = false;
			for (var i = 0; i < questions.length; i++) {
				var inputs = $('form[name="question_' + i + '"] input');
				var hasChecked = false;
				for (var j = 0; j < inputs.length; j++) {
					var input = inputs[j];
					if (input.checked) {
						hasChecked = true;
					}
				}			
				if (!hasChecked) {
					needAnswer = true;
					$('form[name="question_' + i + '"]').css('border', '1px solid red');
				} else {
					$('form[name="question_' + i + '"]').css('border', 'none');
				}
			};
			if (needAnswer) {
				alert("Сделайте выбор")
			} else {
				showModal()
			}
			// при клике на кнопку "Ok" удаляет модальное окно и чистит форму
			$('#submit').on('click', function () {
				box.remove();
				show.remove();
				var inputs = $('form input');
				for (var i = 0; i < inputs.length; i++) { 
					inputs[i].checked = false; 
				};
			});
		});
		function resetModal() {
			
		};
		
	});
})