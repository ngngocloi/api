exports.name = '/saying/hearing';
exports.index = async(req, res, next) => {
    const fs = require('fs-extra');
    try {
       
        const hearing = require('./data/json/hearing.json');
        var image = hearing[Math.floor(Math.random() * hearing.length)].trim();
        res.jsonp({
            data: image,
            count: hearing.length,
           
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}