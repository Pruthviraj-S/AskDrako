// pre-reqs
const { CommandInteraction, MessageEmbed } = require('discord.js')

module.exports = {
    name: 'guild',
    description: 'Send guild info',
    role:'982294535113670747',
    /**
     * 
     * @param {CommandInteraction} interaction 
     */
    execute(interaction) {
        // embeds
        const emb = new MessageEmbed()
            .setColor('GOLD')
            .setTitle('The Watchers')
            .setDescription(`**Main Watcher Guild.** `)
            // .setThumbnail('https://i.imgur.com/onUhqBo.png')
            .setFields(
                { name: 'Guild Owner', value: '<@!957335076146925578>' },
                { name: 'Guild ID', value: '802862', inline: true },
                { name: 'Guild lvl', value: '32', inline: true },
                { name: 'Minimum Power Requirement', value: '1.5 mil' },
                { name: 'Guild Space', value: '27', inline: true },
                { name: 'Max Guild Space', value: '30', inline: true },
                { name: 'Inactivity Timer', value: '1 Day', inline: true }
            )
            .setImage('https://i.imgur.com/onUhqBo.png')
            .setTimestamp()
        const emb1 = new MessageEmbed()
            .setColor('AQUA')
            .setTitle('The WatcherSis')
            .setDescription(`Watcher Sister Guild.`)
            // .setThumbnail('https://i.imgur.com/gxFxYMk.png')
            .setFields(
                { name: 'Guild Owner', value: '<@!98411213490225152>' },
                { name: 'Guild ID', value: '808472', inline: true },
                { name: 'Guild lvl', value: '30', inline: true },
                { name: 'Minimum Power Requirement', value: '1.5 mil' },
                { name: 'Guild Space', value: '14', inline: true },
                { name: 'Max Guild Space', value: '30', inline: true },
                { name: 'Inactivity Timer', value: '2 Days', inline: true }
            )
            .setImage('https://i.imgur.com/gxFxYMk.png')
            .setTimestamp()
        const emb2 = new MessageEmbed()
            .setColor('DARK_GOLD')
            .setTitle('The Watched')
            .setDescription(`Alt Guild in server 1019.`)
            // .setThumbnail('https://i.imgur.com/mU3qvLQ.png')
            .setFields(
                { name: 'Guild Owner', value: '<@!859500989518184538>' },
                { name: 'Guild ID', value: '837639', inline: true },
                { name: 'Guild lvl', value: '7', inline: true },
                { name: 'Minimum Power Requirement', value: '150k' },
                { name: 'Guild Space', value: '17', inline: true },
                { name: 'Max Guild Space', value: '18', inline: true },
                { name: 'Inactivity Timer', value: '3 Days', inline: true }
            )
            .setImage('https://i.imgur.com/o2OnM2Q.png')
            .setTimestamp()
        // send embed
        let channel = interaction.guild.channels.cache.get('982747128801660929')
        interaction.reply({ content: `Message succesfully sent in <#982747128801660929>`, ephemeral: true })
        channel.send({ embeds: [emb, emb1] })
    }
}