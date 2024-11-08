exports.name = '/images/wallpaper';
exports.index = async(req, res, next) => {
    const fs = require('fs-extra');
    try {
        
        const wallpaper = require('./data/json/wallpaper.json');
        var image = wallpaper[Math.floor(Math.random() * wallpaper.length)].trim();
        res.jsonp({
            data: image,
            count: wallpaper.length,
           
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}