const aepl = require('aepl');
const fs = require('fs');


const dir = __dirname;
var OUT = {
    Projects: {},
    Types: {}
};


const ext = fs.readFileSync(`${dir}/fileExt.txt`);


const API = aepl.init("FishAPI", class {
    constructor() {

        this.projects = OUT.Projects;
        this.types = OUT.Types;

        let typeDir = `${dir}/types`;
        let types = fs.readdirSync(typeDir);
        
        types.forEach( t => {
            let name = t.replace(".js", "").replace(".ts", "");
            let type = require(`${typeDir}/${t}`);
            this.types[name] = type;
        });

        let methDir = `${dir}/methods`;
        let methods = fs.readdirSync(methDir).filter( f => f.toLowerCase().endsWith(".js") || f.toLowerCase().endsWith(".ts") );
        
        methods.forEach( f => {
            require(`${methDir}/${f}`);
        });

        let projects = fs.readdirSync(dir.replace("/API", "")).filter( p => p.toLowerCase().endsWith(`.project.${ext}`) );
        
        methods.forEach( f => {
            require(`${methDir}/${f}`);
        });

        this.fileExt = ext;
        require('./fileExtTypes.js');

        setInterval(() => {}, 1 << 30);

        return this;
    
    }
});



OUT.API = API;
module.exports = OUT;
