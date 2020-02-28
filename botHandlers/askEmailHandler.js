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
        const {date, MedicalService: {service}} = record;

        resBot += `Дата: ${new Date(date).toLocaleDateString()}\nПослуга: ${service} \n \n`;
    }

    return bot.sendMessage(chatId, resBot);
};
