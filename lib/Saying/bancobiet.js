 exports.name = '/saying/bancobiet';
exports.index = async(req, res, next) => {
    const fs = require('fs-extra');
    try {
       
        const bancobiet = require('./data/json/bancobiet.json');
        var image = bancobiet[Math.floor(Math.random() * bancobiet.length)].trim();
        res.jsonp({
            data: image,
            count: bancobiet.length,
            
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}