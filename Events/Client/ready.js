/**
 * @param {Client} client
 */
module.exports = {
    name: 'ready',
    once: true,
    execute(client) {
        // set prescence
        client.user.setPresence({
            activities: [
                {
                    name: 'with P_dawg#0304',
                    type: Watching,
                }
            ], 
            status: 'idle'
        });
        console.log(`Bot logged in as ${client.user.username} and ID: ${client.user.id}`)
    }

}