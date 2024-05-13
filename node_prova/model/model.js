let vinyls = [
    {
        "band": "Fit for an Autopsy",
        "name": "Absolute Hope Absolute Hell"
    },
    {
        "band": "Summoning",
        "name": "Stronghold"
    },
    {
        "band": "Fit for an Autopsy",
        "name": "Oh what the future holds"
    }
]

function findAll() {
    return new Promise((resolve, reject) => {
        resolve(vinyls)
    })
}

function findByBandName(bandName){
    return new Promise((resolve, reject) => {
        vinyls.forEach(vinyl => {
            if(vinyl.band === bandName) 
            resolve(vinyl);
        });
    })
}
function addVinyl(name, band){
  vinyls.push({name: name, band:band})
}

function removeVinyl(name, band){
    vinyls.forEach(element => {
        if(element.name === name && element.band === band){
            vinyls.slice(vinyls.findIndex(), vinyls.findIndex())
        }
    });
}
module.exports = {
    findAll,
    findByBandName,
    addVinyl,
    removeVinyl
}