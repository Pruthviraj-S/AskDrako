const { Client, GuildMember } = require('discord.js')
const { drawCard, LinearGradient, Text } = require('discord-welcome-card');
const { registerFont } = require('canvas');
const { join } = require('path');
registerFont(join(__dirname, '../../Fonts/Smooch-Regular.ttf'), { family: 'smooch' });

module.exports = {
    name: 'guildMemberAdd',
    /**
     * 
     * @param {GuildMember} member 
     * @param {Client} client 
     */
    async execute(member, client) {
        const image = await drawCard({
            theme: 'circuit',
            text: {
                title: new Text('Welcome!!!', 220, 80)
                    .setFontSize(80)
                    .setStyle(`#03B0CC`),
                text: new Text(member.user.tag, 240, 145)
                    .setFontSize(45),
                subtitle: new Text(`Member #${member.guild.memberCount}`, 220, 210)
                    .setFontSize(40),
                color: `#FFD800`,
                font: `smooch`,
            },
            avatar: {
                image: member.displayAvatarURL({ format: 'png' }),
                outlineWidth: 4,
                outlineColor: new LinearGradient([0, '#FF512F'], [1, '#DD2476']),
            },
            card: {
                background: 'https://i.imgur.com/FXY1r6d.png',
                blur: 0,
                border: true,
                rounded: true,
            },
        });
        let enb = ['5*', '6*', '9*', 'E3', 'E5']
        var enb1 = enb[Math.floor(Math.random() * enb.length)];
        let arr = ['Rogan', 'Drake', 'Delacium', 'Eloise', 'Aspen', 'Tix', 'Horus', 'Vesa', 'Sherlock', 'Mihm', 'Holmes Yung', 'Ithaqua', 'Kroos']
        var arr2 = arr[Math.floor(Math.random() * arr.length)];
        member.guild.channels.cache.get('982293786409455658').send({ content: `**A ${enb1} ${arr2} has appeared!!! Welcome ${member}** \nPlease read the rules in <#982301448278777866>. `, files: [image] })
    }
}
