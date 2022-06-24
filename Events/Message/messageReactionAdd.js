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
            } catch (error) {
                console.error('Something went wrong when fetching the message:', error);
                // Return as `reaction.message.author` may be undefined/null
                return;
            }
        }
        // console.log(reaction.emoji.name);
        // check if message was from bot
        if (reaction.message.author.bot) return;

        // switch case for reactions
        switch (reaction.emoji.id) {
            // pepeshock 
            case '983375754010198076':
            case '989240357197856798':
                reaction.message.reply('<a:pepeshocked:989240357197856798>')
                break;
            // kekw
            case '983394003733057537':
                reaction.message.reply('<:kek:983394003733057537>')
                break;
        }
    }
}

