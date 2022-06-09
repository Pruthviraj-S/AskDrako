// pre-reqs
const {CommandInteraction, Client, MessageEmbed} =  require('discord.js')

module.exports = {
    name: 'guilds',
    description: 'Show current guild info',
    permission: '',
    options: [
        {
            name: 'tw',
            description: 'GuildSpace for TW',
            required:true,
            type: 4
        },
        {
            name: 'tws',
            description: 'GuildSpace for TWS',
            required:true,
            type: 4
        }
    ],
    /**
     * 
     * @param {CommandInteraction} interaction 
     * @param {Client} client 
     */
    execute(interaction,client){
        const num1 = interaction.options.getInteger('tw')
        const num2 = interaction.options.getInteger('tws')
        // embed make
        const emb = new MessageEmbed()
        .setColor('AQUA')
        .setTitle('Guild Status')
        .setDescription(`**The Watchers(TW): ${num1}/27** \n **TWS: ${num2}/18**`)
        // send embed
        interaction.reply({embeds:[emb]})
    }
}