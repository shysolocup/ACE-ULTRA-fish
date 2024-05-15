const aepl = require('aepl');
const fs = require('fs');
require('node-fetch');



let dir = __dirname;
let OUT = {};



const API = aepl.init("BlsAPI", class {
    constructor() {

        this.projects = [];

        let typeDir = `${dir}/types`;
        let types = fs.readdirSync(typeDir).filter( (f) => f.endsWith(".js") || f.endsWith(".ts") );
        
        types.forEach( t => {
            let type = require(`${typeDir}/${t}`);
            OUT[type.constructor.name] = type;
        });

        this.fileExt = {
            ".project.bls": this.types.Project,
            ".weapon.bls": this.types.Weapon,
            ".skin.bls": this.types.Skin,
            ".texture.bls": this.types.Texture,
            ".sound.bls": this.types.Sound,
            ".wrap.bls": this.types.Wrap
        }
    
    }
});



OUT.API = API;
module.exports = OUT;