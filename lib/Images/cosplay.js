exports.name = '/images/cosplay';
exports.index = async(req, res, next) => {
    const fs = require('fs-extra');
    try {
       
        const cosplay = require('./data/json/cosplay.json');
        var image = cosplay[Math.floor(Math.random() * cosplay.length)].trim();
        res.jsonp({
            data: image,
            count: cosplay.length,
           
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}