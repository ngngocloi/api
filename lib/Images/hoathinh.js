exports.name = '/images/hoathinh';
exports.index = async(req, res, next) => {
    const fs = require('fs-extra');
    try {
       
        const hoathinh = require('./data/json/hoathinh.json');
        var image = hoathinh[Math.floor(Math.random() * hoathinh.length)].trim();
        res.jsonp({
            data: image,
            count: hoathinh.length,
           
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}