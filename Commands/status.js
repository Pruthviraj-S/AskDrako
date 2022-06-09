// pre-reqs
const {Client, MessageEmbed, CommandInteraction} = require('discord.js');
const {connection} = require('mongoose');
require('../Events/Client/ready');

module.exports = {
    name: 'status',
    description: 'Shows bot status',
    permission: 'BAN_MEMBERS',
    /**
     * @param {CommandInteraction} interaction
     * @param {Client} client
     */
    async execute(client, interaction){
        // Embed make
        const status = new MessageEmbed()
            .setColor('DARK_AQUA')
            .setDescription(`**Status:** ✅ Online \n**Ping:** ${client.ws.ping}ms \n**Up-Time:** <t:${parseInt(client.readyTimestamp)}:R> \n**Database:** ${switch_status_func(connection.readyState)}`)
            .setTimestamp()
        // send Embed
        interaction.reply({embeds:[status]})
    }
}

// set status function
function switch_status_func(val){
    var status = '';
    switch(val){
        case 0 : status = `❌ **Disconnected.**`
        break;
        case 1 : status = `✅ **Connected.**`
        break;
        case 2 : status = `🟧 **Connecting.**`
        break;
        case 3 : status = `🟥 **Disconnecting.**`
        break;
    }
}