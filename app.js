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

    bot.on('message', async msg => {

        if (msg.text.includes(userMessages.start)) {
            await startHandler.start(msg);
        }else if (msg.text.includes(userMessages.aboutUs)){
            await aboutUsHandler.aboutInfo(msg);

        }else if (msg.text.includes(userMessages.location)){
            await locationHandler.getLocation(msg);

        }else if (msg.text.includes(userMessages.services)){
            await getServicesHandler.services(msg);

        }else if (msg.text.includes(userMessages.doctors)){
            await getAllDoctorsHandler.doctors(msg);

        }else if (msg.text.includes(userMessages.workingTime)){
            await workingTimeHandler.workingTime(msg);

        }else if (msg.text.includes(userMessages.bye)){
            await goodByHandler.bye(msg);

        }else {
            await unknownMsgHandler.anyMsg(msg)
        }

    })

} catch (e) {
    bot.sendMessage(ADMIN_CHAT_ID, JSON.stringify(e))
}




