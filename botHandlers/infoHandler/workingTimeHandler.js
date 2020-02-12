const {infoMessages} = require("../../constant");
const {bot} = require('../../createBot');

module.exports.workingTime = async msg => {

    await bot.sendMessage(
        msg.chat.id, infoMessages.workingTime, infoMessages.menu
    );
}