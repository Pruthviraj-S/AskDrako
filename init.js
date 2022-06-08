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

// slash command prereq
// const { SlashCommandBuilder } = require('@discordjs/builders');
// const { REST } = require('@discordjs/rest');
// const { Routes } = require('discord-api-types/v9');

// When the client is ready, run this code (only once)
client.on('ready', () => {
    console.log('Ready!');
    // get guild
    const guild = client.guilds.cache.get(guildid)
    let commands
    //  check if guild exist
    if(guild){
        commands = guild.commands
    }
    else{
        commands = client.application?.commands
    }
    commands?.create({
        name:'ping',
        description:'Reply with pong',    
    })
});

client.on('interactionCreate', async (interaction) => {
    if(!interaction.isCommand()){
        return
    }
    const {commandName, options} = interaction
    if (commandName===`ping`){
        interaction.reply({
            content: 'pong',
            ephemeral: true,
        })
    }
})
client.on('messageCreate',(message) => {
    if(message.content===`${prefix}ping`){
        message.reply({content:'pong'})
    }
})
// Login to Discord with your client's token
client.login(token);