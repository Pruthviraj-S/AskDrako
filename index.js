// Documentation: https://discord.js.org/#/docs/discord.js/main/general/welcome

// Require the necessary discord.js classes
const { Client, Intents, MessageEmbed, Collection } = require('discord.js');

//  Import data from config.json
const { prefix, token , guildid, clientid} = require('./config.json');

// Create a new client instance, https://discord.js.org/#/docs/main/stable/class/Intents
const client = new Client({ 
    intents: [
        Intents.FLAGS.GUILDS, 
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MEMBERS
    ] 
});

// create commands collection
client.commands = new Collection()

// import event handler
require('./Handlers/EventHandler.js')(client)
// import command handler
require('./Handlers/CommandHandler')(client)
// Login to Discord with your client's token
client.login(token);
