exports.name = '/nsfw/vsbg';
exports.index = async(req, res, next) => {
    const fs = require('fs-extra');
    try {
        
        const vsbg = require('./data/json/vsbg.json');
        var image = vsbg[Math.floor(Math.random() * vsbg.length)].trim();
        res.jsonp({
            data: image,
            count: vsbg.length,
           
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}