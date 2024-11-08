exports.name = '/images/ghost';
exports.index = async(req, res, next) => {
    const fs = require('fs-extra');
    try {
        
        const ghost = require('./data/json/ghost.json');
        var image = ghost[Math.floor(Math.random() * ghost.length)].trim();
        res.jsonp({
            data: image,
            count: ghost.length,
            
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}