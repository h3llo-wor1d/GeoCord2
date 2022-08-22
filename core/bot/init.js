const { REST } = require('@discordjs/rest');
const { Routes   } = require('discord-api-types/v9');
const { SlashCommandBuilder } = require('discord.js');
const config = require('../../config.json');

const commands = [
  {
    name: 'ping',
    description: 'Replies with Pong!',
  },
  new SlashCommandBuilder()
    .setName('createbutton')
    .setDescription('Create button with options.')
    .addStringOption(option =>
      option.setName('id')
        .setDescription('Custom ID of button')
        .setRequired(true))
    .addStringOption(option =>
      option.setName('label')
        .setDescription('Label for button')
        .setRequired(true))
    .addStringOption(option =>
      option.setName('text')
        .setDescription('Text in button message')
        .setRequired(true))
    ,
    {
      name: "register",
      description: "re-register commands"
    }
];

module.exports = function regCommands() {
  const rest = new REST({ version: '9' }).setToken(config.botToken);
  (async () => {
    try {
      console.log('Started refreshing application (/) commands.');

      await rest.put(
        Routes.applicationCommands("1011253825883095231"),
        { body: commands },
      );

      console.log('Successfully reloaded application (/) commands.');
    } catch (error) {
      console.error(error);
    }
  })();
}