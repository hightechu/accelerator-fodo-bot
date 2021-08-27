const Discord = require ('discord.js')
const client = new Discord.Client()

const config = require('../../config.json')

client.on('ready', () => {
    console.log ('The Client is ready')

    command(client, 'help', (message) => {
        message.channel.send('Coming soon')
    })
})