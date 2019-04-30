let chai = require('chai');
let expect = chai.expect;
let CPF = require('../lib/cpf-validator');

  describe('cpf lib', () => {
    describe('cpfValidator', () => {
      it('Return false to 123456', () => {
        expect(CPF.cpfValidator("123456")).to.equal(false);
      });
      it('Return 0 to 40084948809', () => {
        expect(CPF.cpfValidator("40084948809")).to.equal(0);
      });
    });
  });