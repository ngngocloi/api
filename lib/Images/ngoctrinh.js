exports.name = '/images/ngoctrinh';
exports.index = async(req, res, next) => {
    const fs = require('fs-extra');
    try {
        
        const ngoctrinh = require('./data/json/ngoctrinh.json');
        var image = ngoctrinh[Math.floor(Math.random() * ngoctrinh.length)].trim();
        res.jsonp({
            data: image,
            count: ngoctrinh.length,
            
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}