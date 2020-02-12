const {infoMessages} = require("../../constant");
const {bot} = require('../../createBot');

module.exports.anyMsg = async msg => {

    await bot.sendMessage(
        msg.chat.id, infoMessages.anyMsg, infoMessages.menu
    );
}