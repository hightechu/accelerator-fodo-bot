// Ping Module
module.exports = {
    // Name of Command
    name: 'restart',
    // Description of Command
    description: 'Restarting your time!',
    // Guild - TRUE
    guildOnly: true,
    // Cooldown
    cooldown: 20,
    // Execute Command - Parameters: message
    execute(message) {
        // Send Message
        message.channel.send('Timer has been reset!');
    },
};