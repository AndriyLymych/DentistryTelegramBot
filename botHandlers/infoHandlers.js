const {bot} = require('../createBot');
const {infoMessages, userMessages} = require('../constant');

const botInfoMessages = bot.on('message', async msg => {

    if (msg.text.includes(userMessages.start)) {
        await bot.sendMessage(
            msg.chat.id, `Добрий день, ${msg.from.first_name}!` + infoMessages.start, infoMessages.menu
        );

    } else if (msg.text.includes(userMessages.aboutUs)) {

        await bot.sendMessage(msg.chat.id, infoMessages.aboutUs, infoMessages.menu);

    } else if (msg.text.includes(userMessages.location)) {

        await bot.sendLocation(
            msg.chat.id, infoMessages.location.lat, infoMessages.location.long, infoMessages.menu
        );

        await bot.sendMessage(
            msg.chat.id, infoMessages.location.locInfo, infoMessages.menu
        );


    } else {
        await bot.sendMessage(msg.chat.id, infoMessages.anyMsg);
    }
});


module.exports = {
    botInfoMessages
}