define([], function() {	
	return function(data) {
		var self = this;
		self.data = data;
		self.addItem = function(item) {
			var clearValue = item.trim();
			if (!clearValue) {
				return;
			}
			self.data.push(clearValue);
			return self.data;
		};
		self.removeItem = function(item) {
			var index = self.data.indexOf(item);
			if (index === -1) {
				return;
			}
			self.data.splice(index, 1);
			return self.data;
		};
		self.editItem = function(item, newValue) {
			var index = self.data.indexOf(item);
			if (index === -1) {
				return;
			}
			self.data[index] = newValue;
			return self.data;
		};
	};
});