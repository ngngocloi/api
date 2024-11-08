exports.name = '/images/lebong';
exports.index = async(req, res, next) => {
    const fs = require('fs-extra');
    try {
        
        const lebong = require('./data/json/lebong.json');
        var image = lebong[Math.floor(Math.random() * lebong.length)].trim();
        res.jsonp({
            data: image,
            count: lebong.length,
           
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}