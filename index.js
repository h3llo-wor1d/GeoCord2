const config = require("./config.json");
const { Client, GatewayIntentBits } = require('discord.js');
let c = require("./core/bot/commands.js");
let f = require("./core/bot/functions.js");
const commands = new c();
const functions = new f();
const geo = require("./core/geo.js");

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', async interaction => {
  console.log(interaction)
  if (interaction.isCommand()) {
    commands[interaction.commandName](interaction);
  } else {
    try {
      switch (interaction.componentType) {
        case 2:
          console.log("testing!");
          console.log(interaction.customId);
          functions[interaction.customId](interaction);
          break;
      }
    } catch {}
  }
});

client.login(config.botToken);