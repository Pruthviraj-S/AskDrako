const { Client, MessageReaction, User } = require('discord.js')
const { mongoose } = require('mongoose')

module.exports = {
    name: 'messageReactionAdd',
    /**
     * 
     * @param {MessageReaction} reaction 
     * @param {User} user 
     * @param {Client} client 
     * @returns 
     */
    async execute(reaction, user, client) {

        // fetch older messages
        if (reaction.partial) {
            // If the message this reaction belongs to was removed, the fetching might result in an API error which should be handled
            try {
                await reaction.fetch();
                // check if bot
                if (reaction.message.author.bot) return;
            } catch (error) {
                console.error('Something went wrong when fetching the message:', error);
                // Return as `reaction.message.author` may be undefined/null
                return;
            }
        }
        // console.log(reaction.emoji.name);

        // pepeshock 
        if (reaction.emoji.id === '983375754010198076' || reaction.emoji.id === '989240357197856798') {
            if (reaction.count > 1) return;
            reaction.message.reply('<a:pepeshocked:989240357197856798>')
        }
    }
}

