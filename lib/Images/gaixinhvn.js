exports.name = '/images/gaixinhvn';
exports.index = async(req, res, next) => {
    const fs = require('fs-extra');
    try {
        
        const gaixinhvn = require('./data/json/gaixinhvn.json');
        var image = gaixinhvn[Math.floor(Math.random() * gaixinhvn.length)].trim();
        res.jsonp({
            data: image,
            count: gaixinhvn.length,
            
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}