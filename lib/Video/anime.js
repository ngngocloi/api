exports.name = '/video/anime';
exports.index = async(req, res, next) => {
    const fs = require('fs-extra');
    try {
      
        const  anime = require('./data/json/anime.json');
        var video =  anime[Math.floor(Math.random() *  anime.length)].trim();
        res.jsonp({
            data: video,
            count:  anime.length,
           
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}