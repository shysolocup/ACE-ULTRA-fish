const reader = require('../../compiler/reader.js');
const { API } = require('../index.js');


API.newF("read", function(input) {
    return reader(input);
});
