var test = require('../test.js');

describe("test", function() {
  it("sayHello", function() {
  	//prepre
  	var result;
  	console.log('test =', test);

  	//act
  	result = test.sayHello('Kostya');

  	console.log("result=", result);

  	//assert
    expect(result).toBe('Hello, Kostya');
    console.log("result=",result);
  });
});