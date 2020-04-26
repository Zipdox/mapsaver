const fs = require('fs');

const jsonfile = fs.readFileSync('maps.json');
const maplist = JSON.parse(jsonfile);
console.log(maplist);
var outobject = {};
for(map of maplist){
    outobject[map] = {
        name: map,
        authors: [
            map
        ],
        width: 1,
        height: 1,
        maps: [
            {x: 0, y: 0, id: Number(map)}
        ]
    }
}
const outjson = JSON.stringify(outobject);
fs.writeFileSync('processed.json', outjson);
