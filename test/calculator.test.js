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

  describe('#multiply()', function() {
    it('should return the product of two numbers', function() {
      const result = calculator.multiply(2, 3);
      expect(result).to.equal(6);
    });
  });
  describe('#divide()', function() {
    it('should return the quotient of two numbers', function() {
      const result = calculator.divide(6, 3);
      expect(result).to.equal(2);
    });

    it('should throw an error when dividing by zero', function() {
      expect(() => calculator.divide(6, 0)).to.throw('Cannot divide by zero');
    });
  });
});
