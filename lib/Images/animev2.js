exports.name = '/images/animev2';
exports.index = async(req, res, next) => {
    const fs = require('fs-extra');
    try {
        const animev2 = require('./data/json/animev2.json');
        var image = animev2[Math.floor(Math.random() * animev2.length)].trim();
        res.jsonp({
            data: image,
            count: animev2.length,
    
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}