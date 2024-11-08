exports.name = '/saying/danhngon';
exports.index = async(req, res, next) => {
    const fs = require('fs-extra');
    try {
       
        const danhngon = require('./data/json/danhngon.json');
        var image = danhngon[Math.floor(Math.random() * danhngon.length)].trim();
        res.jsonp({
            data: image,
            count: danhngon.length,
            
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}