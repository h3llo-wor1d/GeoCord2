const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
const enums = require("../enums.js");

module.exports = class Commands {
    createbutton = (i) => {
        if (i.user.id == "902242926577455235") {
            const row = new ActionRowBuilder()
			.addComponents(
				new ButtonBuilder()
					.setCustomId(i.options.getString("id"))
					.setLabel(i.options.getString("label"))
					.setStyle(ButtonStyle.Primary),
			);
            i.client.channels.cache.get(i.channelId).send({content: i.options.getString("text"), components: [row]});
        }
    }

    register = (i) => {
        require("./init.js")(); 
        i.reply({content: "re-registered commands successfully!", ephemeral: true });
    }
    
    ping = (i) => {
        i.reply("Pong!");
    } 
}