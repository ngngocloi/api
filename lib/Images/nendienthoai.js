exports.name = '/images/nendienthoai';
exports.index = async(req, res, next) => {
    const fs = require('fs-extra');
    try {
        
        const nendienthoai = require('./data/json/nendienthoai.json');
        var image = nendienthoai[Math.floor(Math.random() * nendienthoai.length)].trim();
        res.jsonp({
            data: image,
            count: nendienthoai.length,
            
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}