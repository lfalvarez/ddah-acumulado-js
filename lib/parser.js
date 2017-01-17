var _ = require('lodash');
var Edition = require('./models.js').Edition;
var Area = require('./models.js').Area;

function DDAHJsonParser(data){
    this.editions = [];
    this.data = data;
}
var createNewEditionFrom = function(row){
    this.editions.push(new Edition(row["Versión"], row['Año']))
}
var createNewAreaInEditionFrom = function(row){
    var area = new Area(row["Área"])
    _.forEach(this.editions, function(edition){
        edition.areas.push(area);
    })
}

DDAHJsonParser.prototype.process = function(){
    var uniqEditions = _.uniqBy(this.data, function(row){return row['Versión'] + row['Año']});
    _.forEach(uniqEditions, _.bind(createNewEditionFrom, this));

   var uniqAreas = _.uniqBy(this.data, function(row){return row['Área']})
   _.forEach(uniqAreas, _.bind(createNewAreaInEditionFrom, this)) 
}

exports.DDAHJsonParser = DDAHJsonParser;
