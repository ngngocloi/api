exports.name = '/nsfw/du';
exports.index = async(req, res, next) => {
    const fs = require('fs-extra');
    try {
        
        const du = require('./data/json/du.json');
        var image = du[Math.floor(Math.random() * du.length)].trim();
        res.jsonp({
            data: image,
            count: du.length,
           
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}