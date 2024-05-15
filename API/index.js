const aepl = require('aepl');
const fs = require('fs');
require('node-fetch');



const dir = __dirname;
var OUT = {};


const ext = fs.readFileSync(`${dir}/fileExt.txt`);


OUT.Projects = {};
fs.readdirSync(dir.replace("/API"), "").filter( p => p.toLowerCase().endsWith(`.project.${ext}`) )


const API = aepl.init("AceAPI", class {
    constructor() {

        this.projects = OUT.Projects;

        let typeDir = `${dir}/types`;
        let types = fs.readdirSync(typeDir).filter( f => f.toLowerCase().endsWith(".js") || f.toLowerCase().endsWith(".ts") );
        
        types.forEach( t => {
            let type = require(`${typeDir}/${t}`);
            OUT[type.constructor.name] = type;
        });

        this.fileExt = ext;
        this.fileExtTypes = {
            [`.project.${ext}`]: this.types.Project,
            [`.weapon.${ext}`]: this.types.Weapon,
            [`.skin.${ext}`]: this.types.Skin,
            [`.texture.${ext}`]: this.types.Texture,
            [`.sound.${ext}`]: this.types.Sound,
            [`.wrap.${ext}`]: this.types.Wrap
        }
    
    }
});



OUT.API = API;
module.exports = OUT;