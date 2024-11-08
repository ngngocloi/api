exports.name = '/saying/cadao';
exports.index = async(req, res, next) => {
    const fs = require('fs-extra');
    try {
        
        const cadao = require('./data/json/cadao.json');
        var image = cadao[Math.floor(Math.random() * cadao.length)].trim();
        res.jsonp({
            data: image,
            count: cadao.length,
           
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}