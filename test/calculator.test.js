import { expect } from 'chai';
import Calculator from '../src/calculator.js';

describe('Calculator', function() {  
    let calculator;

    beforeEach(function() {
      calculator = new Calculator();
    });
  describe('#add()', function() {
    it('should return the sum of two numbers', function() {
      const result = calculator.add(2, 3);
      expect(result).to.equal(5);
    });
  });

  describe('#subtract()', function() {
    it('should return the difference of two numbers', function() {
      const result = calculator.subtract(5, 3);
      expect(result).to.equal(2);
    });
  });
});
