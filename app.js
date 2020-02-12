const {
    infoHandler: {
        startHandler,
        aboutUsHandler,
        locationHandler,
        workingTimeHandler,
        goodByHandler,
        unknownMsgHandler
    },
    getAllDoctorsHandler,
    getServicesHandler
} = require('./botHandlers');
const {userMessages} = require('./constant');
const {bot} = require('./createBot');
const {ADMIN_CHAT_ID} = require('./config/config');

try {
    const commands = Object.values(userMessages);

    bot.on('message', msg => {
        if (commands.includes(msg.text)) {
            bot.onText(new RegExp(userMessages.start), startHandler);
            bot.onText(new RegExp(userMessages.aboutUs), aboutUsHandler);
            bot.onText(new RegExp(userMessages.location), locationHandler);
            bot.onText(new RegExp(userMessages.services), getServicesHandler);
            bot.onText(new RegExp(userMessages.doctors), getAllDoctorsHandler);
            bot.onText(new RegExp(userMessages.workingTime), workingTimeHandler);
            bot.onText(new RegExp(userMessages.bye), goodByHandler);

        } else {
            bot.sendMessage(msg.chat.id,unknownMsgHandler)
        }
    })

} catch (e) {
    bot.sendMessage(ADMIN_CHAT_ID, JSON.stringify(e))
}




