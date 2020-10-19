require('dotenv').config();

const {
    infoHandler: {
        startHandler,
        aboutUsHandler,
        locationHandler,
        workingTimeHandler,
        goodByHandler,
        unknownMsgHandler,
        badEmailHandler
    },
    getAllDoctorsHandler,
    getServicesHandler,
    askEmailHandler,
    getRecordsByEmailHandler,
} = require('./botHandlers');
const {userMessages} = require('./constant');
const {bot} = require('./createBot');
const {ADMIN_CHAT_ID} = require('./config/config');

try {

    bot.on('message', async msg => {

        if (msg.text.includes(userMessages.start)) {
            await startHandler(msg);
        } else if (msg.text.includes(userMessages.aboutUs)) {
            await aboutUsHandler(msg);

        } else if (msg.text.includes(userMessages.location)) {
            await locationHandler(msg);

        } else if (msg.text.includes(userMessages.services)) {
            await getServicesHandler(msg);

        } else if (msg.text.includes(userMessages.doctors)) {
            await getAllDoctorsHandler(msg);

        } else if (msg.text.includes(userMessages.workingTime)) {
            await workingTimeHandler(msg);

        } else if (msg.text.includes(userMessages.bye)) {
            await goodByHandler(msg);

        } else if (msg.text.includes(userMessages.myReceptions)) {
            await askEmailHandler(msg);
        } else if (msg.text.includes('@')) {
            await getRecordsByEmailHandler(msg);

        } else {
            await unknownMsgHandler(msg)

        }

    });


} catch (e) {
    bot.sendMessage(ADMIN_CHAT_ID, JSON.stringify(e.message))
}




