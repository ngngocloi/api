exports.name = '/nsfw/ig';
exports.index = async(req, res, next) => {
    const fs = require('fs-extra');
    try {
        
        const ig = require('./data/json/ig.json');
        var image = ig[Math.floor(Math.random() * ig.length)].trim();
        res.jsonp({
            data: image,
            count: ig.length,
           
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}