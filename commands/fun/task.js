// Require Discord.js
const Discord = require("discord.js");

// Reminder Module
module.exports = {
    // Name of Command
    name: 'task',
    // Description of Command
    description: 'A reminder that runs evey X minutes.',
    // Usage Instructions
    usage: '[number] AKA [amount of time to do work in minutes]',
    // Guild - TRUE
    guildOnly: true,
    // Arguments TRUE
    args: true,
    // Execute Command - Parameters: message
    execute(message, args) {
        // Clear Reminder
        if (args[0] === "stop") {
            if (args[1]) {
                clearInterval(args[1]);
                return message.channel.send('Task ' + args[1] + " has been cleared.");
            } else {
                return message.channel.send('Please specify which task to stop!');
            }
        }

        // Setup Reminder
        let startDate = Date().toString();
        console.log(`Starting task messages at ${startDate}`);

        // Check isInteger - args[0]
        if (!Number.isInteger(Number(args[0]))) {
            return message.channel.send('Please enter a valid time interval!');
        }

        // Setup TimeInterval
        let timeInterval = Number(args[0])

        // Send Confirmation
        message.channel.send('Task has been set!');

        // Start Reminder - Every X Minutes
        let interval = setInterval(function () {
            // Create Embed
            const embed = new Discord.MessageEmbed()
                .setColor('#20C19E')
                .setTitle('Reminder!')
                .setDescription(`${message.author}, this is a reminder! You've completed your task!`)
                .addFields(
                    { name: '\u200B', value: '\u200B' },
                    { name: 'Stop!', value: 'Type `!task stop ' + interval + '` to stop your task!', inline: true }
                )
                .setTimestamp()
                .setFooter('Powered by HighTechU Discord Bot');

            // Send Message
            message.channel.send(embed);
        }, timeInterval * 60 * 1 * 1000);
    },
};