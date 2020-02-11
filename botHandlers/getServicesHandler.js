const {bot} = require('../createBot');
const {userMessages} = require('../constant');
const requestPromise = require('request-promise');
const {HOST} = require('../config/config');

module.exports.getServices = bot.on('message', async msg => {

    if (msg.text.includes(userMessages.services)) {

        let resBot = ``;

        let services = await requestPromise.get(HOST + '/services');

        services = JSON.parse(services);

        services.forEach((service) => {
            resBot += `\n Послуга: ${service.service} \n Ціна: ${service.price}\n`;
        });

        await  bot.sendMessage(msg.chat.id, resBot)
    }

});