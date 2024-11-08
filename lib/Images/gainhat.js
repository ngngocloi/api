exports.name = '/images/gainhat';
exports.index = async(req, res, next) => {
    const fs = require('fs-extra');
    try {
       
        const gainhat = require('./data/json/gainhat.json');
        var image = gainhat[Math.floor(Math.random() * gainhat.length)].trim();
        res.jsonp({
            data: image,
            count: gainhat.length,
            
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}