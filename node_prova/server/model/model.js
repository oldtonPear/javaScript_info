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
module.exports = {
    findAll,
    findByBandName
}