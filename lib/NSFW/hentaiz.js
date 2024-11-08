exports.name = '/nsfw/hentaiz';
exports.index = async(req, res, next) => {
    const fs = require('fs-extra');
    try {
        
        const hentaiz = require('./data/json/hentaiz.json');
        var image = hentaiz[Math.floor(Math.random() * hentaiz.length)].trim();
        res.jsonp({
            data: image,
            count: hentaiz.length,
            
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}