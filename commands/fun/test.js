// Test Module
module.exports = {
    // Name of Command
    name: 'welcome',
    // Description of Command
    description: 'Welcome!',
    // Guild - TRUE
    guildOnly: true,
    // Cooldown
    cooldown: 50,
    // Execute Command - Parameters: message
    execute(message) {
        // Send Message
        message.channel.send('Welcome to this server!');
    },
};