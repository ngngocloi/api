exports.name = '/images/lnd';
exports.index = async(req, res, next) => {
    const fs = require('fs-extra');
    try {
        const lnd = require('./data/json/linhngocdam.json');
        var image = lnd[Math.floor(Math.random() * lnd.length)].trim();
        res.jsonp({
            data: image,
            count: lnd.length,
            
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}