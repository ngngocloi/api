exports.name = '/images/tokyo';
exports.index = async(req, res, next) => {
    const fs = require('fs-extra');
    try {
        
        const tokyo = require('./data/json/tokyo.json');
        var image = tokyo[Math.floor(Math.random() * tokyo.length)].trim();
        res.jsonp({
            data: image,
            count: tokyo.length,
           
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}