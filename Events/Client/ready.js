module.exports = {
    name:'ready',
    once:true,
    execute(client){
        console.log(`Bot logged in as ${client.user.username} and ID: ${client.user.id}`)
    }

}