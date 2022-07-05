const { guildid } = require('../../config.json');
const { Client, CommandInteraction, MessageEmbed } = require('discord.js')
const { mongoose } = require('mongoose')

module.exports = {
    name: 'ready',
    once: true,
    /**
    * @param {CommandInteraction} interaction
    * @param {Client} client
    */
    async execute(interaction, client) {
        // set prescence
        client.user.setPresence({
            activities: [
                {
                    name: 'with P_Dawg#0304'
                }
            ],
            status: 'online'
        });
        // log
        console.log(`Bot logged in as ${client.user.username} and ID: ${client.user.id}`)

        // Connect MongoDb
        if (!process.env.DB_TOKEN) return;
        mongoose.connect(process.env.DB_TOKEN, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }).then(() => {
            console.log(`The Bot is connected to MongoDb`)
        }).catch((err) => {
            console.log(err)
        });
        const emb = new MessageEmbed()
            .setColor('FUCHSIA')
            .setDescription('**Bot Restarted!**')
            .setFields(
                {
                    name:'Username', value:`${client.user.username}`
                },
                {
                    name:'ID', value:`${client.user.id}`
                },
                {
                    name:'Status', value:`${client.ws.status}`
                }
            )
            .setTimestamp()
        client.guilds.cache.get(guildid).channels.cache.get('989213178594492426').send({content:`<@495023063486824467>`,embeds:[emb]})
    }
}