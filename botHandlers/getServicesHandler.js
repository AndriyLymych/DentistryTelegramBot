const {bot} = require('../createBot');
const requestPromise = require('request-promise');
const {HOST, PORT} = require('../config/config');

module.exports = async (msg) => {

    let resBot = ``;

    let services = await requestPromise.get(`${HOST}:${PORT}/services`);

    services = JSON.parse(services);

    services.forEach(obj=> {
        const {service,price} = obj;

        resBot += `\n <i><b>💊 Послуга:</b></i> <b>${service}</b> 
<i><b>💰 Ціна:</b></i> <b>${price} грн.</b> \n`;
    });

    await bot.sendMessage(msg.chat.id,'<b>ДОСТУПНІ ПОСЛУГИ </b> ⬇️  ❤️',{parse_mode: "HTML"});

    await bot.sendMessage(msg.chat.id, resBot,{parse_mode: "HTML"});
};
