const requestPromise = require('request-promise');

const {bot} = require('../createBot');
const {HOST, PORT} = require('../config/config');

module.exports = async msg => {
    const chatId = msg.chat.id;

    let resBot = ``;

    const options = ({
        method: 'PUT',
        uri: `${HOST}${PORT}/receptions?email=${msg.text}`,
        body: {
            chat_id: JSON.stringify(chatId)
        },
        json: true,


    })
    await requestPromise(options);

    let records = JSON.parse(await requestPromise.get(`${HOST}${PORT}/receptions?email=${msg.text}`));

    for (const record of records) {
        const {date, MedicalService: {service}} = record;

        resBot += `Дата: ${new Date(date).toLocaleDateString()}\nПослуга: ${service} \n \n`;
    }


    bot.sendMessage(chatId, resBot);
};