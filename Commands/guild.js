// pre-reqs
const {CommandInteraction, MessageEmbed} =  require('discord.js')

module.exports = {
    name: 'guild',
    description: 'Send guild info',
    permission: 'BAN_MEMBERS',
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
     */
    execute(interaction){
        const num1 = interaction.options.getInteger('tw')
        const num2 = interaction.options.getInteger('tws')
        // embed make
        const emb = new MessageEmbed()
        .setColor('AQUA')
        .setTitle('Guild Status')
        .setDescription(`**The Watchers(TW): ${num1}/27** \n **TWS: ${num2}/18**`)
        // send embed
        let channel = interaction.guild.channels.cache.get('982747128801660929')
        interaction.reply({content:`Message succesfully sent in <#982747128801660929>`,ephemeral:true})
        channel.send(({embeds:[emb]}))
    }
}