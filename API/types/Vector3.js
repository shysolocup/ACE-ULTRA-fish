const { API } = require('../index.js');
module.exports = 

API.newC("Vector3", class {
    constructor(blsdata) {
        this.x = blsdata[1];
        this.y = blsdata[2];
        this.z = blsdata[3];
    }
});