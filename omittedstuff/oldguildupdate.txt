// pre-reqs
const { CommandInteraction, MessageEmbed} = require('discord.js')

module.exports = {
    name: 'guildupdate',
    description: 'Update guild info',
    permission: 'BAN_MEMBERS',
    options: [
        {
            name: 'tw',
            description: 'GuildSpace for TW',
            required: true,
            type: 4
        },
        {
            name: 'tws',
            description: 'GuildSpace for TWS',
            required: true,
            type: 4
        }
    ],
    /**
     * 
     * @param {CommandInteraction} interaction 
     */
    async execute(interaction) {
        const num1 = interaction.options.getInteger('tw')
        const num2 = interaction.options.getInteger('tws')
        // fetch old embed
        let channel = interaction.guild.channels.cache.get('982747128801660929')
        let target_msg = await channel.messages.fetch(`${channel.lastMessageId}`, { force: true, cache: true })
        // check if message exist
        if (!target_msg || !target_msg.embeds[0]) {
            interaction.reply({ content: ` ⚠️ Message not found !! Check if Original Message in **<#982747128801660929>** was deleted. \n If so use /guild command in **<#982747128801660929>** to add new message. `, ephemeral: true })
        } else {
            const oldemb = target_msg.embeds[0]
            // embed make
            const emb = new MessageEmbed()
                .setColor('GREEN')
                .setDescription(`✅ Guild Status Updated in **<#982747128801660929>**`)
            // send embed
            interaction.reply({ embeds: [emb] ,ephemeral:true})
            // update status in channel
            const newemb = new MessageEmbed()
                .setColor(oldemb.color)
                .setTitle(oldemb.title)
                .setDescription(`**The Watchers(TW): ${num1}/28** \n **TWS: ${num2}/18**`)
            target_msg.edit({ embeds: [newemb] })
        }
    }
}