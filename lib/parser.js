function DDAHJsonParser(data){
    this.editions = [];
    this.data = data;
}
DDAHJsonParser.prototype.process = function(){
    console.log(this.data);
}

exports.DDAHJsonParser = DDAHJsonParser;