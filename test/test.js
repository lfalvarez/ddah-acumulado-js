'use strict';
var assert = require('assert');
var Edition = require('../lib/models.js').Edition;
var data = require('./fixtures/data.json');
var DDAHJsonParser = require("../lib/parser.js").DDAHJsonParser;
var Area = require('../lib/models.js').Area;

describe('Edicion', function () {
    describe('Creación del modelo y sus atributos', function () {
        it('debo instanciarlo', function () {
            var edition = new Edition('marzo', 2016);
            assert.equal(edition.year, 2016);
            assert.equal(edition.version, 'marzo');
        });
    });
    describe('Edicion puede tener muchas Areas', function(){
        it('Instanciar Areas', function(){
            var area = new Area('Agricultura');
            assert.equal(area.name, 'Agricultura');
        });
        it('Tener muchas areas por edicion', function(){
            var edition = new Edition('marzo', 2016)
            var area = new Area('Agricultura')

            edition.areas.push(area)
            assert.equal(edition.areas[0].name, 'Agricultura')
        })
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
    });

    it("parsear areas", function(){
        var parser = new DDAHJsonParser(data);
        parser.process();

        assert.equal(parser.editions[0].areas.length, 2)
        assert.equal(parser.editions[0].areas[0].name, "Agricultura") 
        assert.equal(parser.editions[1].areas.length, 2)
    })
});


