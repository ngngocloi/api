exports.name = '/video/nhacytb';
exports.index = async(req, res, next) => {
    const fs = require('fs-extra');
    try {
        
        const nhacytb = require('./data/json/nhacytb.json');
        var image = nhacytb[Math.floor(Math.random() * nhacytb.length)].trim();
        res.jsonp({
            data: image,
            count: nhacytb.length,
            
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}