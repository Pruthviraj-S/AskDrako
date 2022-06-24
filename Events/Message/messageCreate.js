const { Client, Message } = require('discord.js')

module.exports = {
    name: 'messageCreate',
    /**
     *  
     * @param {Client} client 
     * @param {Message} message 
     */
    async execute(message, client) {
        // check if bot
        if (message.author.bot) return;

        const content = message.content.toLowerCase();

        // switch case for messages
        switch (true) {
            // rip
            case /\brip\b/.test(content):
            case /\br.i.p\b/.test(content):
                message.channel.send('<:SnekRip:989223094205956116>')
                break;
            // hype
            case /\bhype\b/.test(content):
                message.channel.send('<a:peepohype:989192077772456006>')
                break;
            // noice
            case /\bnice\b/.test(content):
            case /\bnoice\b/.test(content):
                message.channel.send('<a:noice:989233309076832296>')
                break;
            // yeah boi
            case /\bboi\b/.test(content):
            case /\bbwoi\b/.test(content):
                message.channel.send('<a:yea_boi:989236572673159279>')
                break;
        }
    }
}

// TEST STRING USING REGEX :  case /rip/.test(content)
