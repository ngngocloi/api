exports.name = '/nsfw/penissucking';
exports.index = async(req, res, next) => {
    const fs = require('fs-extra');
    try {
        
        const penissucking = require('./data/json/penissucking.json');
        var image = penissucking[Math.floor(Math.random() * penissucking.length)].trim();
        res.jsonp({
            data: image,
            count: penissucking.length,
           
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}