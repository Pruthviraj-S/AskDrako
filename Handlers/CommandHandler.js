// import perms validation
const { Perms } = require('../validation/Permissions')
// import pre-reqs
const {Client, Guild} =  require('discord.js')
const {guildid} = require('../config.json')
const {promisify} = require('util')
const { glob } = require('glob')
// use promisify to convert callback into promise using utils
const PG = promisify(glob)
const Ascii = require('ascii-table')
/**
 * @param {Client} client 
 */
module.exports = async (client) => {
    // Create table
    const Table = new Ascii('Commands loaded!!')
    // initialize array for storing commands
    CommandsArray = []
    // Insert data into table
    (await PG(`${process.cwd().replace(/\\/g,"/")}/Commands/*/*.js`)).map(async (file) => {
        const command = require(file);
        // check name
        if(!command.name){
            return Table.addRow(file.split('/')[7],'⚠️Failed','Missing name.')
        }
        // check description
        if(!command.description){
            return Table.addRow(command.name,'⚠️Failed','Missing description.')
        }
        // check perms
        if(command.permission){
            if(Perms.includes(command.permission)){
                command.defaultPermission=false;
            }else{
                return Table.addRow(command.name,'⚠️Failed','Missing perms or invalid.')
            }
        }
        // push commands into commands array
        client.commands.set(command.name,command)
        CommandsArray.push(command)

        await Table.addRow(command.name,'✅Succesful.')
    })

    console.log(Table.toString())
    // permission validation
    client.on('ready',async () => {
        const Currentguild = await client.guilds.cache.get(guildid)
        Currentguild.commands.set(CommandsArray).then(async(command) => {
            const roles = (CommandName) => {
                const CmdPerms = CommandsArray.find((c)=>c.name === command.name).permission
                if(!CmdPerms) return null
                // get roles from cache
                return Currentguild.roles.cache.filter((r)=>r.permissions.has(CmdPerms))
            }
        })
    })
}