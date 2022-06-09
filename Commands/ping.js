// pre-reqs
const {CommandInteraction} =  require('discord.js')
module.exports = {
    name: 'ping',
    description: 'basic ping commands',
    permission: 'ADMINISTRATOR',
    /**
     * @param {CommandInteraction} interaction
     */
    execute(interaction){
        interaction.reply({
            content: 'Pong!!',
            ephemeral:true
        })
    }
}