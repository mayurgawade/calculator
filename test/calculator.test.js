import { expect } from 'chai';
import Calculator from '../src/calculator.js';

describe('Calculator', function() {
  describe('#add()', function() {
    it('should return the sum of two numbers', function() {
      const calculator = new Calculator();
      const result = calculator.add(2, 3);
      expect(result).to.equal(5);
    });
  });
});
