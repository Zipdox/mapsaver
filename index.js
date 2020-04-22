'use strict';

const { createClient, states: { PLAY } } = require('minecraft-protocol');
const fs = require('fs');
const credentials = require('./credentials');

if (!fs.existsSync('maps')){
    fs.mkdirSync('maps');
}

console.log("Logging in...");
//console.log("After you stop receiving, press any key to exit.");

const client = createClient(credentials);

client.on('login', client => {
    console.log("Logged in as " + client.username);
});

client.on('error', err => {
    console.error(err)
});

//process.stdin.setRawMode(true);
//process.stdin.resume();
//process.stdin.on('data', function() {
//    console.log("Saving maps...");
//    fs.writeFileSync('maps.json', JSON.stringify(maps));
//    console.log("Finished saving maps, exiting.");
//    process.exit();
//});

function noMoreMaps(){
    console.log("Saving maps...");
    fs.writeFileSync('maps.json', JSON.stringify(maps));
    console.log("Finished saving maps, exiting.");
    process.exit();
}

var mapTimeout;

var maps = [];

client.on('packet', (data, meta) => {

    if(meta.name != 'map') return;
    if(data.data == undefined) return;
    if(maps.includes(data.itemDamage)) return;
    console.log("Receiving map", data.itemDamage);
    maps.push(data.itemDamage);
    fs.writeFile(`maps/${data.itemDamage}.bin`, data.data, function(err){
        if(err) console.error(err);
    });
    mapTimeout = setTimeout(noMoreMaps, 5000)
});

