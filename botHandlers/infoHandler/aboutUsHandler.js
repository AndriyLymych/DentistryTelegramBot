const {infoMessages} = require("../../constant");
const {bot} = require('../../createBot');

module.exports.aboutInfo = async msg => {

    await bot.sendMessage(
        msg.chat.id, infoMessages.aboutUs, infoMessages.menu
    );
}