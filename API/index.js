const aepl = require('aepl');
const fs = require('fs');
require('node-fetch');


let dir = __dirname;


const API = aepl.init("BlsAPI", class {
    constructor() {

        let types = fs.readdirSync(`${dir}/types`).filter( (f) => f.endsWith(".js") || f.endsWith(".ts") );
        types.forEach( t => {
            
        })

        this.fileExtensions = [
            ".bls",
            ".project.bls",
            ""
        ]
    
    }
})