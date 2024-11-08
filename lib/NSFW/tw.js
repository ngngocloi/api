exports.name = '/nsfw/tw';
exports.index = async(req, res, next) => {
    const fs = require('fs-extra');
    try {
        
        const tw = require('./data/json/tw.json');
        var image = tw[Math.floor(Math.random() * tw.length)].trim();
        res.jsonp({
            data: image,
            count: tw.length,
           
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}