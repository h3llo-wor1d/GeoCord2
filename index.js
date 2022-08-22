const config = require("./config.json");
const { Client, GatewayIntentBits } = require('discord.js');
let c = require("./core/bot/commands.js");
const commands = new c();
const geo = require("./core/geo.js");

require("./core/bot/init.js")(); // Init commands on startup

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return;
  try {
    commands[interaction.commandName](interaction);
  } catch (err) {
    console.log(`Caught error: ${err}`);
  }
});

client.login(config.botToken);