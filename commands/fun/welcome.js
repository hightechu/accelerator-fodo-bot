// Require Discord.js
const Discord = require('discord.js');

// HighTechU Module
module.exports = {
    // Name of Command
    name: 'FodoBot',
    // Description of Command
    description: 'Welcome',
    // Execute Commnad - Paramenters: message
    execute(message) {
        // Create Embed
        const embed = new Discord.MessageEmbed()
            .setColor('GREEN')
            .setTitle('FodoBot')
            .setDescription('Thanks for inviting FodoBot. Type !help for more information')
            .setTimestamp()

        // Send Message
        message.channel.send(embed);
    }
}