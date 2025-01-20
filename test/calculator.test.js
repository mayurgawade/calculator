const { expect } = require('chai');
const Calculator = require('../src/calculator');

describe('Calculator', function() {
  describe('#add()', function() {
    it('should return the sum of two numbers', function() {
      const calculator = new Calculator();
      const result = calculator.add(2, 3);
      expect(result).to.equal(5);
    });
  });
});
