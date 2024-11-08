exports.name = '/video/sex';
exports.index = async(req, res, next) => {
    const fs = require('fs-extra');
    try {
      
        const sex = require('./data/json/sex.json');
        var video = sex[Math.floor(Math.random() * sex.length)].trim();
        res.jsonp({
            data: video,
            count: sex.length,
            
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}