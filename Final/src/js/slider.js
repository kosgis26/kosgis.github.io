$(document).ready(function(){
	function htmSlider(){

		// ������� �������� 
		var slideWrap = $('.slide-wrap');
		// ������ �� ���������� ���������� �����
		var nextLink = $('.next-slide');
		var prevLink = $('.prev-slide');
		
		var is_animate = false;
		
		// ������ ������ � ���������
		var slideWidth = $('.slide-item').outerWidth();
		
		// �������� ��������
		var newLeftPos = slideWrap.position().left - slideWidth;
		
		// ���� �� ������ �� ��������� �����
		nextLink.click(function(){
			if(!slideWrap.is(':animated')) {
	
				slideWrap.animate({left: newLeftPos}, 500, function(){
					slideWrap
						.find('.slide-item:first')
						.appendTo(slideWrap)
						.parent()
						.css({'left': 0});
				});

			}
		});

		// ���� �� ������ �� ����������� �����
		prevLink.click(function(){
			if(!slideWrap.is(':animated')) {
			
				slideWrap
					.css({'left': newLeftPos})
					.find('.slide-item:last')
					.prependTo(slideWrap)
					.parent()
					.animate({left: 0}, 500);

			}
		});
	}
	htmSlider();
});