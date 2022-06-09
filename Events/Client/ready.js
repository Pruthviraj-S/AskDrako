const { guildid } = require('../../config.json');
const { Client, MessageEmbed, CommandInteraction, Guild } = require('discord.js')

module.exports = {
    name: 'ready',
    once: true,
    /**
    * @param {CommandInteraction} interaction
    * @param {Client} client
    */
    execute(interaction, client) {
        // set prescence
        client.user.setPresence({
            activities: [
                {
                    name: 'with P_dawg#0304'
                }
            ],
            status: 'idle'
        });
        // send status in channel
        const status = new MessageEmbed()
            .setColor('RANDOM')
            .setDescription(`**Client:** 🟢 Online, from LocalHost.`)
        // client.guilds.cache.get(guildid).channels.cache.get('983002770468655195').send({embeds: [status]})
        console.log(`Bot logged in as ${client.user.username} and ID: ${client.user.id}`)
    }
}