exports.name = '/images/animememe';
exports.index = async(req, res, next) => {
    const fs = require('fs-extra');
    try {
        
        const animememe = require('./data/json/animememe.json');
        var image = animememe[Math.floor(Math.random() * animememe.length)].trim();
        res.jsonp({
            data: image,
            count: animememe.length,

        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}