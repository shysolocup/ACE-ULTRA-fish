const fs = require('fs');
const aepl = require('aepl');
const { API } = require('../API');
const reader = require('./reader');

let api = new API();

console.log(api.fileExtTypes);
