var power = require('../Testing/js/script.js');

describe("test", function() {
  it("calcPower", function() {
  	var result;
  	power.setNomer("2");
    expect(power.nomer).toBe(2)
    power.setExp("3");    
    expect(power.exp).toBe(3)
  	result = power.calcPower();  	
    expect(result).toBe(8);    
  });
});