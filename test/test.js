'use strict';
var assert = require('assert');
var Edition = require('../lib/models.js').Edition;
var data = require('./fixtures/data.json');
var DDAHJsonParser = require("../lib/parser.js").DDAHJsonParser;

describe('Edicion', function () {
describe('Creación del modelo y sus atributos', function () {
  it('debo instanciarlo', function () {
      var edition = new Edition('marzo', 2016);
      assert.equal(edition.year, 2016);
      assert.equal(edition.version, 'marzo');
  });
});
});
describe("Json parser", function(){
  it("instanciate and parse", function(){
    var parser = new DDAHJsonParser(data);
    parser.process();
    assert.equal(parser.editions.length, 2);
    var marzo = parser.editions[0];
    assert.equal(marzo.year, 2016);
    assert.equal(marzo.version, "Marzo");
    var mayo = parser.editions[1];
    assert.equal(mayo.year, 2016);
    assert.equal(mayo.version, "Mayo");
  })
})