exports.name = '/video/genshin';
exports.index = async(req, res, next) => {
    const fs = require('fs-extra');
    try {
       
        const genshin = require('./data/json/genshin.json');
        var image = genshin[Math.floor(Math.random() * genshin.length)].trim();
        res.jsonp({
            data: image,
            count: genshin.length,
            
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}