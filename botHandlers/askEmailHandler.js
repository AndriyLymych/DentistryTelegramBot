const requestPromise = require('request-promise');

const {bot} = require('../createBot');
const {HOST, PORT} = require('../config/config');
const {infoMessages} = require('../constant');

module.exports = async msg => {

    const chatId = msg.chat.id;
    let resBot = ``;

    let records = await requestPromise.get(`${HOST}:${PORT}/receptions?chat_id=${chatId}`);

    records = JSON.parse(records);

    if (!records.length) {
        await bot.sendMessage(chatId, infoMessages.getEmail);
        return;
    }

    for (const record of records) {
        let {date, MedicalService: {service}} = record;

        date = new Date(date);

        resBot += `⚙️ <i><b>Послуга:</b></i><b> ${service}</b> \n🗓 <i><b>Дата:</b></i> <b>${date.getHours()}:${date.getMinutes()}  ${date.getDay()+1}-${date.getMonth()+1}-${date.getFullYear()}</b>\n \n`;
    }

    return bot.sendMessage(chatId, resBot,{parse_mode: "HTML"});
};
