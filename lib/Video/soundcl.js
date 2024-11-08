exports.name = '/video/soundcl';
exports.index = async(req, res, next) => {
    const fs = require('fs-extra');
    try {
        
        const soundcl = require('./data/json/soundcl.json');
        var image = soundcl[Math.floor(Math.random() * soundcl.length)].trim();
        res.jsonp({
            data: image,
            count: soundcl.length,
           
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}