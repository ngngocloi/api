exports.name = '/nsfw/mong';
exports.index = async(req, res, next) => {
    const fs = require('fs-extra');
    try {
       
        const mong = require('./data/json/mong.json');
        var image = mong[Math.floor(Math.random() * mong.length)].trim();
        res.jsonp({
            data: image,
            count: mong.length,
           
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}