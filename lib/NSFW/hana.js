exports.name = '/nsfw/hana';
exports.index = async(req, res, next) => {
    const fs = require('fs-extra');
    try {
        
        const hana = require('./data/json/hana.json');
        var image = hana[Math.floor(Math.random() * hana.length)].trim();
        res.jsonp({
            data: image,
            count: hana.length,
          
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}