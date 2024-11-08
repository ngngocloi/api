exports.name = '/images/jimmy';
exports.index = async(req, res, next) => {
    const fs = require('fs-extra');
    try {
        
        const jimmy = require('./data/json/jimmy.json');
        var image = jimmy[Math.floor(Math.random() * jimmy.length)].trim();
        res.jsonp({
            data: image,
            count: jimmy.length,
            
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}