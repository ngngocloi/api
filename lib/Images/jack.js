exports.name = '/images/jack';
exports.index = async(req, res, next) => {
    const fs = require('fs-extra');
    try {
       
        const jack = require('./data/json/jack.json');
        var image = jack[Math.floor(Math.random() * jack.length)].trim();
        res.jsonp({
            data: image,
            count: jack.length,
            
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}