// pre-reqs
const { CommandInteraction, MessageEmbed } = require('discord.js')

module.exports = {
    name: 'guild',
    description: 'Send guild info',
    permission: 'BAN_MEMBERS',
    /**
     * 
     * @param {CommandInteraction} interaction 
     */
    execute(interaction) {
        // embeds
        const emb = new MessageEmbed()
            .setColor('PURPLE')
            .setTitle('The Watchers')
            .setDescription(`Main Watcher Guild.`)
            .setThumbnail('https://i.imgur.com/mv83OOx.png')
            .setFields(
                { name: 'Guild ID', value: '802862', inline: true },
                { name: 'Guild lvl', value: '27', inline: true },
                { name: 'Minimum Power Requirement', value: '500k' },
                { name: 'Guild Space', value: '-', inline: true },
                { name: 'Max Guild Space', value: '28', inline: true }
            )
            .setTimestamp()
        const emb1 = new MessageEmbed()
            .setColor('AQUA')
            .setTitle('The WatcherSis')
            .setDescription(`Watcher Sister Guild.`)
            .setThumbnail('https://i.imgur.com/YtP88tw.png')
            .setFields(
                { name: 'Guild ID', value: '808472', inline: true },
                { name: 'Guild lvl', value: '22', inline: true },
                { name: 'Minimum Power Requirement', value: '100k' },
                { name: 'Guild Space', value: '-', inline: true },
                { name: 'Max Guild Space', value: '26', inline: true }
            )
            .setTimestamp()
        const emb2 = new MessageEmbed()
            .setColor('DARK_GOLD')
            .setTitle('The MfinSquis')
            .setDescription(`MfinSquis Guild.`)
            .setThumbnail('https://i.imgur.com/90JblKx.png')
            .setFields(
                { name: 'Guild ID', value: '804920', inline: true },
                { name: 'Guild lvl', value: '-', inline: true },
                { name: 'Minimum Power Requirement', value: '150k' },
                { name: 'Guild Space', value: '-', inline: true },
                { name: 'Max Guild Space', value: '24', inline: true }
            )
            .setTimestamp()
        // send embed
        let channel = interaction.guild.channels.cache.get('982747128801660929')
        interaction.reply({ content: `Message succesfully sent in <#982747128801660929>`, ephemeral: true })
        channel.send(({ embeds: [emb, emb1, emb2] }))
    }
}