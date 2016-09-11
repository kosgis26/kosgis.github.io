define([], function () {
	return function(model, view) {
		var self = this;

		view.elements.addBtn.on('click', addItem);
		view.elements.listContainer.on('click', '.item-delete', removeItem);
		view.elements.listContainer.on('click', '.item-edit', editItem);

		function addItem() {
			var newItem = view.elements.input.val();
			model.addItem(newItem);
			view.renderList(model.data);
			view.elements.input.val('');
		}

		function removeItem() {
			var item = $(this).attr('data-value');
			model.removeItem(item);
			view.renderList(model.data);
		}

		function editItem() {		
			var item = $(this).children().attr("data-value");
			var value = prompt('Введите новое значение', '');
			value = value.trim();
			if (!value) {
				return;		
			}
			model.editItem(item, value);
			view.renderList(model.data);
		}
	}
});