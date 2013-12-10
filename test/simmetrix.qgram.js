require('../lib/simmetrix.qgram.js')
var expect = require('expect.js');

describe('Simmetrix.QGram', function(){
  describe('#similarity()', function(){
    it('should return a proper similarity between 0 and 1', function(){
      expect(Simmetrix.QGram.similarity("Test String1", "Test String2").toFixed(4)).to.be.equal('1.0000');
      expect(Simmetrix.QGram.similarity("hallo", "halli").toFixed(4)).to.be.equal('1.0000');
      expect(Simmetrix.QGram.similarity("hallo", "hallö").toFixed(4)).to.be.equal('1.0000');
      expect(Simmetrix.QGram.similarity("PUNSCHIGEL", "PUNSCHIGEL / STOP DANCING IF YOU CAN!!!").toFixed(4)).to.be.equal('1.0000');
    }),
    it('should return 0 with undefined or empty strings', function(){
      expect(Simmetrix.QGram.similarity("", "Test String2").toFixed(4)).to.be.equal('0.0000');
      expect(Simmetrix.QGram.similarity(undefined, "Test String2").toFixed(4)).to.be.equal('0.0000');
      expect(Simmetrix.QGram.similarity("Test String1", undefined).toFixed(4)).to.be.equal('0.0000');
    })
  })
})
