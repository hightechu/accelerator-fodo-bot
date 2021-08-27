const Discord = require('discord.js');

// HighTechU Module
module.exports = {
    // Name of Command
    name: 'help',
    // Description of Command
    description: 'Description of all commands',
    // Aliases
    aliases: ['htu'],
    // Execute Commnad - Paramenters: message
    execute(message) {
        // Create Embed
        const embed = new Discord.MessageEmbed()
            .setColor('#20C19E')
            .setTitle('FodoBot Commands:')
            
            .setDescription('We hope you are enjoying FodoBot. Below is a complete list of all the commands you can use.')

            .addFields(
                { name: 'FodoBot', value: 'A revolutionary service to manage your time well.' },
                { name: '\u200B', value: '\u200B' },
                { name: '!help ', value: 'a list to all FodoBot Commands', inline: true },
                { name: '!points', value: 'a counter of your points', inline: true },
                { name: '!task', value: 'start the time', inline: true },
                { name: '!timer', value: 'check the time remaining', inline: true },
                { name: '!restart', value: 'restart time', inline: true },
            )

        // Send Message
        message.channel.send(embed);
    },
};