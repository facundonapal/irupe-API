const fs = require('fs');

class ImageSaver {
    constructor(root){
        this.root = root;
    }
    
    save(imageFile){
        const { path, name } = imageFile;
        fs.copyFileSync(`${path}`, `${this.root}/${name}`);
    }
    
}

module.exports = ImageSaver;