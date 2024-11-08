exports.name = '/images/khanhhuyen';
exports.index = async(req, res, next) => {
    const fs = require('fs-extra');
    try {
       
        const khanhhuyen = require('./data/json/khanhhuyen.json');
        var image = khanhhuyen[Math.floor(Math.random() * khanhhuyen.length)].trim();
        res.jsonp({
            data: image,
            count: khanhhuyen.length,
            
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}