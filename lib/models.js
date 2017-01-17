function Edition(version, year) {
    this.year = year;
	this.version = version;
    this.areas = []
};

function Area(name){
    this.name = name;
};

exports.Edition = Edition;
exports.Area = Area;
