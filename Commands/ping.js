// pre-reqs
const {CommandInteraction} =  require('discord.js')
module.exports = {
    name: 'ping',
    description: 'basic ping commands',
    permission: '',
    /**
     * @param {CommandInteraction} interaction
     */
    execute(interaction){
        interaction.reply({
            content: 'POOOOOOOOOOOOOONG!!!',
            ephemeral:true
        })
    }
}