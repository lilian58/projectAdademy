var assert = require("assert");
var Calculate =  require('../index.js')

describe('Calculate', () => {
  describe('.factorial', () => {
    it('should test if 5! = 120 ', () =>{
      const inputNumber = 5;
      const expectedResult = 120;
      const facto = Calculate.factorial(inputNumber);
      assert.equal(facto, expectedResult);
    });

    it('should return a factorial of number ', () =>{
      const inputNumber = 3;
      const expectedResult = 6;
      const facto = Calculate.factorial(inputNumber);
      assert.equal(facto, expectedResult);
    });

    it('should return 0 when number is null ', () =>{
       const inputNumber = 0;
      const expectedResult = 1;
      const facto = Calculate.factorial(inputNumber);
      assert.equal(facto, expectedResult);
    });
  });
});