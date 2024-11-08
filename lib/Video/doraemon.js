exports.name = '/video/doraemon';
exports.index = async(req, res, next) => {
    const fs = require('fs-extra');
    try {
       
        const doraemon = require('./data/json/doraemon.json');
        var image = doraemon[Math.floor(Math.random() * doraemon.length)].trim();
        res.jsonp({
            data: image,
            count: doraemon.length,
           
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}  