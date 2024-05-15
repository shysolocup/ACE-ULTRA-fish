const { API } = require('../index.js');
module.exports = 

API.newC("Project", class {
    constructor(blsdata) {
        this.Name = blsdata.Name;
        this.Version = blsdata.Version;
        this.Paths = blsdata.Paths;
    }
});