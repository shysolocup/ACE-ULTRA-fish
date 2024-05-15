const { API } = require('../index.js');
module.exports = 

API.newC("Color", class {
    constructor(blsdata) {
        this.red = blsdata[1];
        this.green = blsdata[2];
        this.blue = blsdata[3];
    }

    fromColor3(r, g, b) {
        this.red = r*255;
        this.greenn = g*255;
        this.blue = b*255;
    }
});