exports.name = '/nsfw/xnxx';
exports.index = async(req, res, next) => {
    const fs = require('fs-extra');
    try {
        
        const xnxx = require('./data/json/xnxx.json');
        var image = xnxx[Math.floor(Math.random() * xnxx.length)].trim();
        res.jsonp({
            data: image,
            count: xnxx.length,
           
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}