exports.name = '/video/goku';
exports.index = async(req, res, next) => {
    const fs = require('fs-extra');
    try {
       
        const goku = require('./data/json/goku.json');
        var image = goku[Math.floor(Math.random() * goku.length)].trim();
        res.jsonp({
            data: image,
            count: goku.length,
           
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}