// pre-reqs
const { CommandInteraction, MessageEmbed} = require('discord.js')

module.exports = {
    name: 'gu',
    description: 'Update guild info',
    permission: 'BAN_MEMBERS',
    options: [
        {
            name: 'guild',
            description: 'Choose Guild. ',
            required: true,
            type: 3,
            choices:[
                {
                    name:'The Watchers',
                    value:'TW' 
                },
                {
                    name:'The Watcher Sis',
                    value:'TWS'
                },
                {
                    name:'MfinSquis',
                    value:'MFS'
                },
            ],
        },
        {
            name: 'guildspace',
            description: 'GuildSpace for the guild.',
            required: true,
            type: 4
        }
    ],
    /**
     * 
     * @param {CommandInteraction} interaction 
     */
    async execute(interaction) {
        if(interaction.options.getString('Guild')=='TW'){
            interaction.reply({content:'tw',ephemeral:true})
        }
        else if(interaction.options.getString('Guild')=='TWS'){
            interaction.reply({content:'tws',ephemeral:true})
        }
        else if(interaction.options.getString('Guild')=='MFS'){
            interaction.reply({content:'mfs',ephemeral:true})
        };

        // const num1 = interaction.options.getInteger('tw')
        // const num2 = interaction.options.getInteger('tws')
        // // fetch old embed
        // let channel = interaction.guild.channels.cache.get('982747128801660929')
        // let target_msg = await channel.messages.fetch(`${channel.lastMessageId}`, { force: true, cache: true })
        // // check if message exist
        // if (!target_msg || !target_msg.embeds[0]) {
        //     interaction.reply({ content: ` ⚠️ Message not found !! Check if Original Message in **<#982747128801660929>** was deleted. \n If so use /guild command in **<#982747128801660929>** to add new message. `, ephemeral: true })
        // } else {
        //     const oldemb = target_msg.embeds[0]
        //     // embed make
        //     const emb = new MessageEmbed()
        //         .setColor('GREEN')
        //         .setDescription(`✅ Guild Status Updated in **<#982747128801660929>**`)
        //     // send embed
        //     interaction.reply({ embeds: [emb] ,ephemeral:true})
        //     // update status in channel
        //     const newemb = new MessageEmbed()
        //         .setColor(oldemb.color)
        //         .setTitle(oldemb.title)
        //         .setDescription(`**The Watchers(TW): ${num1}/28** \n **TWS: ${num2}/18**`)
        //     target_msg.edit({ embeds: [newemb] })
        // }
    }
}