exports.name = '/video/gaixinh';
exports.index = async(req, res, next) => {
    const fs = require('fs-extra');
    try {
      
        const gaixinh = require('./data/json/gaixinh.json');
        var video = gaixinh[Math.floor(Math.random() * gaixinh.length)].trim();
        res.jsonp({
            data: video,
            count: gaixinh.length,
            
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}