// import validation
const { Events } = require('../validation/EventNames.js');
// use promisify to convert callback into promise using utils
const {promisify} = require('util');
// pattern resolver, https://www.npmjs.com/package/glob
const {glob} = require('glob');
const PG = promisify(glob);
const Ascii = require('ascii-table')

module.exports = async ( client ) => {
    // insert table
    const Table = new Ascii('Events Loaded!!');
    // load events into the table
    (await PG(`${process.cwd().replace(/\\/g,"/")}/Events/*/*.js`)).map(async (file) =>{
        const event = require(file);
        // check if events match validation or exist.
        if(!Events.includes(event.name) || !event.name){
            const L = file.split('/');
            await Table.addRow(`${event.name || "MISSING!"}`,`⚠️ Event name is either invalid or missing: ${L[6]+'/'+L[7]}`);
            return;
        }
        // events
        if(event.once){
            client.once(event.name, (...args) => 
                event.execute(...args, client)
            );
        }else{
            client.on(event.name, (...args) => 
                event.execute(...args, client)
            );
        };

        await Table.addRow(event.name, '✅ Succesful.')

    });
// log in console
    console.log(Table.toString());
}