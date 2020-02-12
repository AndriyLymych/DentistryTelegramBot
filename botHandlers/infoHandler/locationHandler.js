const {infoMessages} = require("../../constant");
const {bot} = require('../../createBot');

module.exports.getLocation = async msg => {
    await bot.sendLocation(
        msg.chat.id, infoMessages.location.lat, infoMessages.location.long, infoMessages.menu
    );

    await bot.sendMessage(
        msg.chat.id, infoMessages.location.locInfo, infoMessages.menu
    );
}