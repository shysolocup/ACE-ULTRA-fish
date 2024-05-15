const { API } = require('./index.js');

API.newP("fileExtTypes", function() {
    let ext = this.fileExt;

    return {

        [`.project.${ext}`]: this.types.Project,
        [`.weapon.${ext}`]: this.types.Weapon,
        [`.skin.${ext}`]: this.types.Skin,
        [`.texture.${ext}`]: this.types.Texture,
        [`.sound.${ext}`]: this.types.Sound,
        [`.wrap.${ext}`]: this.types.Wrap
    
    }
    
})
