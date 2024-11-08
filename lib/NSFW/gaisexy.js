exports.name = '/nsfw/gaisexy';
exports.index = async(req, res, next) => {
    const fs = require('fs-extra');
    try {
        
        const gaisexy = require('./data/json/gaisexy.json');
        var image = gaisexy[Math.floor(Math.random() * gaisexy.length)].trim();
        res.jsonp({
            data: image,
            count: gaisexy.length,
            
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}