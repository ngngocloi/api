exports.name = '/video/nhacmoingay';
exports.index = async(req, res, next) => {
    const fs = require('fs-extra');
    try {
       
        const nhacmoingay = require('./data/json/nhacmoingay.json');
        var image = nhacmoingay[Math.floor(Math.random() * nhacmoingay.length)].trim();
        res.jsonp({
            data: image,
            count: nhacmoingay.length,
            
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}