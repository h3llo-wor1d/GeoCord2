const enums = require("../enums.js");

module.exports = class Functions {
    setUserState = (i) => {
        i.showModal(enums.locationPrompt(i.user.id));
    }
}