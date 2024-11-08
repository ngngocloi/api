exports.name = '/images/avatar';
exports.index = async(req, res, next) => {
    const fs = require('fs-extra');
    try {
       
        const avatar = require('./data/json/avt.json');
        var image = avatar[Math.floor(Math.random() * avatar.length)].trim();
        res.jsonp({
            data: image,
            count: avatar.length,

        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}