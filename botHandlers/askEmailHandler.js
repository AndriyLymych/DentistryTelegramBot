const requestPromise = require('request-promise');

const {bot} = require('../createBot');
const {HOST} = require('../config/config');
const {infoMessages} = require('../constant');

module.exports = async msg => {
    const chatId = msg.chat.id;
    let resBot = ``;

    console.log(`${HOST}/receptions?chat_id=${chatId}`);
    let records = await requestPromise.get(`${HOST}/receptions?chat_id=${chatId}`);

    records = JSON.parse(records);

    console.log(records);

    if (!records.length) {
        await bot.sendMessage(chatId, infoMessages.getEmail);
        // TODO next step needed
        // TODO how to handle email step by step??????? App.js always handle message with email like not valid!
        return;
    }

    for (const record of records) {
        const {date, MedicalService: {service}} = record;

        resBot += `Дата: ${new Date(date).toLocaleDateString()}\nПослуга: ${service} \n \n`;
        console.log(chatId);
    }

    return bot.sendMessage(chatId, resBot);
};
