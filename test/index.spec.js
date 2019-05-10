const chai = require('chai');
const expect = chai.expect;
const CPF = require('../lib/index.js');

describe('cpf lib', () => {
  describe('cpfValidator', () => {
    it('Return false to 123456', () => {
      expect(CPF.cpfValidator('123456')).to.equal(false);
    });
    it('Return false to 3048574980788', () => {
      expect(CPF.cpfValidator('3048574980788')).to.equal(false);
    });
    it('Return true to 14046006048', () => {
      expect(CPF.cpfValidator('14046006048')).to.equal(true);
    });
    it('Return true to 16535321061', () => {
      expect(CPF.cpfValidator('16535321061')).to.equal(true);
    });
    it('Return true to 304.857.498-07', () => {
      expect(CPF.cpfValidator('304.857.498-07')).to.equal(true);
    });
    it('Return true to "31721384022"', () => {
      expect(CPF.cpfValidator('31721384022')).to.equal(true);
    });
    it('Return false to "31721384012"', () => {
      expect(CPF.cpfValidator('31721384012')).to.equal(false);
    }); 
    it('Return true to 26493330068', () => {
      expect(CPF.cpfValidator(26493330068)).to.equal(true);
    }); 
    it('Return true to 72031402021', () => {
      expect(CPF.cpfValidator(72031402021)).to.equal(true);
    }); 
    it('Return false to "ahdjsdofdoJAIDSDSA"', () => {
      expect(CPF.cpfValidator('ahdjsdofdoJAIDSDSA')).to.equal(false);
    });
    it('Return true to "343.634.137-19"', () => {
      expect(CPF.cpfValidator('343.634.137-19')).to.equal(true);
    });
    it('Return true to 224.348.768-38', () => {
      expect(CPF.cpfValidator('018.250.033-00')).to.equal(true);
    });
    it('Return false to 11111111111', () => {
      expect(CPF.cpfValidator('11111111111')).to.equal(false);
    });
  });
});