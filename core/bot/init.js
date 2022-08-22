const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const config = require('../../config.json');

const commands = [
  {
    name: 'ping',
    description: 'Replies with Pong!',
  },
];

module.exports = function regCommands() {
  const rest = new REST({ version: '9' }).setToken(config.botToken);
  (async () => {
    try {
      console.log('Started refreshing application (/) commands.');

      await rest.put(
        Routes.applicationGuildCommands("1011253825883095231", "1011252639008292884"), // Temporary, change to final when release build is finished
        { body: commands },
      );

      console.log('Successfully reloaded application (/) commands.');
    } catch (error) {
      console.error(error);
    }
  })();
}