// Documentation: https://discord.js.org/#/docs/discord.js/main/general/welcome

// Require the necessary discord.js classes
const { Client, Intents, MessageEmbed } = require('discord.js');

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

require('./Handlers/EventHandler.js')(client)
// Login to Discord with your client's token
client.login(token);
