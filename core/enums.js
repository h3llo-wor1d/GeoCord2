const { TextInputComponent, MessageActionRow, Modal } = require('discord.js');

module.exports = {
    locationPrompt: function(userId) {
        const m = new Modal()
            .setCustomId(`modal||${userId}`)
            .setTitle("Set your location ([City, State] or [City, Country] recommended)")
        const q = new TextInputComponent()
            .setCustomId(`location`)
            .setLabel("What is your current location ([City, State] or [City, Country] recommended)")
            .setStyle("SHORT")
        m.addComponents(new MessageActionRow().addComponents(q));
        return modal
    }
}