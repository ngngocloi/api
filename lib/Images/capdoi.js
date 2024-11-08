exports.name = '/images/capdoi';
exports.index = async(req, res, next) => {
    const fs = require('fs-extra');
    try {
        
        const capdoi = require('./data/json/capdoi.json');
        var image = capdoi[Math.floor(Math.random() * capdoi.length)].trim();
        res.jsonp({
            data: image,
            count: capdoi.length,
            
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}