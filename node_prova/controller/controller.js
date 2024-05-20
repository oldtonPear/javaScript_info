const model = require('../model/model')

async function getVinyl(req, res){
    const vinyls = await model.findAll()
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(vinyls))
}
async function addVinyl(req, res, name, band){
    
    model.addVinyl(name, band)
    res.end("OK!")
}
module.exports = {
    getVinyl,
    addVinyl
}