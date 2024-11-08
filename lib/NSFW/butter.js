exports.name = '/nsfw/butter';
exports.index = async(req, res, next) => {
    const fs = require('fs-extra');
    try {
        
        const butter = require('./data/json/butter.json');
        var image = butter[Math.floor(Math.random() * butter.length)].trim();
        res.jsonp({
            data: image,
            count: butter.length,
           
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}