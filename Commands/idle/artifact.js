// pre-reqs
const { CommandInteraction, MessageEmbed } = require('discord.js')

module.exports = {
    name: 'artifact',
    description: 'Send guild info',
    permission: 'SEND_MESSAGES',
    options: [
        {
            name: 'artifact',
            description: 'Choose artifact',
            type: 3,
            required:true,
            choices: [
                {
                    name: 'Demon Bell',
                    value: 'db'
                },
                {
                    name: 'Antlers Cane',
                    value: 'ac'
                },
                {
                    name: 'Punisher of immortal',
                    value: 'poi'
                },
                {
                    name: 'Magic Stone Sword',
                    value: 'mss'
                },
                {
                    name: 'Augustus Magic Ball',
                    value: 'amb'
                },
                {
                    name: 'Kiss of Ghost',
                    value: 'kog'
                },
                {
                    name: 'Lucky Candy Bar',
                    value: 'lcb'
                },
                {
                    name: 'Wildfire Torch',
                    value: 'wt'
                },
                {
                    name: 'Golden Crown',
                    value: 'gc'
                },
                {
                    name: 'Ruyi Scepter',
                    value: 'rs'
                },
                {
                    name: 'Snow Heart',
                    value: 'sh'
                },
                {
                    name: 'Melodic Strings',
                    value: 'ms'
                },
            ]
        }
    ],
    /**
     * 
     * @param {CommandInteraction} interaction 
     */
    async execute(interaction) {
        interaction.reply({files:[switch_arti(interaction.options.getString('artifact'))]})
    }
}

function switch_arti(valset) {
    var arti_img = '';
    switch (valset) {
        case 'db': arti_img = 'https://i.imgur.com/aMhWtOP.png'
            break;
        case 'ac': arti_img = 'https://i.imgur.com/SJdUKkr.png'
            break;
        case 'poi': arti_img = 'https://i.imgur.com/2WdxpRK.png'
            break;
        case 'mss': arti_img = 'https://i.imgur.com/t0Tv9Z8.png'
            break;
        case 'amb': arti_img = 'https://i.imgur.com/diBBrh9.png'
            break;
        case 'kog': arti_img = 'https://i.imgur.com/kr77W16.png'
            break;
        case 'lcb': arti_img = 'https://i.imgur.com/t36WkO8.png'
            break;
        case 'wt': arti_img = 'https://i.imgur.com/xFliiMy.png'
            break;
        case 'gc': arti_img = 'https://i.imgur.com/LLR6xgY.png'
            break;
        case 'rs': arti_img = 'https://i.imgur.com/V6Hxixq.png'
            break;
        case 'sh': arti_img = 'https://i.imgur.com/KNcHvQJ.png'
            break;
        case 'ms': arti_img = 'https://i.imgur.com/KUFoqZU.png'
            break;
    }
    return arti_img;
}