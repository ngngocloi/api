exports.name = '/images/chitanda';
exports.index = async(req, res, next) => {
    const fs = require('fs-extra');
    try {
       
        var imageList = (fs.readFileSync(dirPath, "utf-8").split(/\r?\n/));
        var randomImage = imageList[Math.floor(Math.random() * imageList.length)].trim();
        res.jsonp({
            data: randomImage,
            count: imageList.length,
            
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}