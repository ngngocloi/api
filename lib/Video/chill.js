exports.name = '/video/chill';
exports.index = async(req, res, next) => {
    const fs = require('fs-extra');
    try {
        
        const chill = require('./data/json/chill.json');
        var image = chill[Math.floor(Math.random() * chill.length)].trim();
        res.jsonp({
            data: image,
            count: chill.length,
           
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}