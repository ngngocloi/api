exports.name = '/images/lienquan';
exports.index = async(req, res, next) => {
    const fs = require('fs-extra');
    try {
       
        const lienquan = require('./data/json/lienquan.json');
        var image = lienquan[Math.floor(Math.random() * lienquan.length)].trim();
        res.jsonp({
            data: image,
            count: lienquan.length,
           
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}