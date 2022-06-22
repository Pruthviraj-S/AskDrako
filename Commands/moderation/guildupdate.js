// pre-reqs
const { CommandInteraction, MessageEmbed } = require('discord.js')
module.exports = {
    name: 'guildupdate',
    description: 'Update guild info',
    permission: 'BAN_MEMBERS',
    category:'Moderation',
    options: [
        {
            name: 'guild',
            description: 'Choose Guild. ',
            required: true,
            type: 3,
            choices: [
                {
                    name: 'The Watchers',
                    value: 'TW'
                },
                {
                    name: 'The Watcher Sis',
                    value: 'TWS'
                },
                {
                    name: 'MfinSquis',
                    value: 'MFS'
                },
            ],
        },
        {
            name: 'guildspace',
            description: 'GuildSpace for the guild.',
            required: true,
            type: 4
        },
        {
            name: 'guildlvl',
            description: 'Set Guild lvl.',
            required: false,
            type: 4
        },
        {
            name: 'maxguildcap',
            description: 'Set  max Guild capacity.',
            required: false,
            type: 4
        }
    ],
    /**
     * 
     * @param {CommandInteraction} interaction 
     */
    async execute(interaction) {
        // fetch old embed
        let channel = interaction.guild.channels.cache.get('982747128801660929')
        let target_msg = await channel.messages.fetch(`${channel.lastMessageId}`, { force: true, cache: true })
        // check if message exist
        if (!target_msg) {
            interaction.reply({ content: ` ⚠️ Message not found !! Check if Original Message in **<#982747128801660929>** was deleted. \n If so use /guild command to add new message. `, ephemeral: true })
        } else {
            // edit the embed
            const set_guild = (interaction.options.getString('guild') == 'TW' ? 0 : interaction.options.getString('guild') == 'TWS' ? 1 : interaction.options.getString('guild') == 'MFS' ? 2 : null)
            target_msg.edit({
                embeds: target_msg.embeds.map((e, i) => {
                    if (i == set_guild) {
                        e.fields[4].value = `${interaction.options.getInteger('guildspace')}`
                        if (interaction.options.getInteger('guildlvl')) { e.fields[2].value = `${interaction.options.getInteger('guildlvl')}` }
                        if (interaction.options.getInteger('maxguildcap')) { e.fields[5].value = `${interaction.options.getInteger('maxguildcap')}` }
                    }
                    return e;
                })
            })
            // Send confirmation embed
            const emb = new MessageEmbed()
                .setColor('GREEN')
                .setDescription(`✅ Guild Status Updated in **<#982747128801660929>**`)
            interaction.reply({ embeds: [emb], ephemeral: true })
        }
    }
}