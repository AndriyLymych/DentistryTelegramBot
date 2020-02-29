const requestPromise = require('request-promise');
const cron = require('node-cron');

const {bot} = require('../createBot');
const {HOST, PORT} = require('../config/config');
const {oneDay: {ONE_DAY}} = require('../constant');

module.exports = async () => {
    let resBot = ``;
    const nowTime = new Date();


    cron.schedule('*/5 * * * * *', async () => {
        const records = JSON.parse(await requestPromise.get(`${HOST}:${PORT}/receptions?telegram_msg=0`));

        for (const record of records) {
            let {chat_id, date, telegram_msg, name, middle_name} = record;
            date = new Date(date);


            if (((date - nowTime) <= ONE_DAY) && chat_id !== null) {

                resBot += `📅  Добрий день, ${name} ${middle_name}. ✨ Нагадуємо Вам, що у вас завтра,  прийом об ${date.getHours()}:${date.getMinutes()} у клініці "Simstomat" ⚠ 🔜️`;


                bot.sendMessage(chat_id, resBot);

                await requestPromise.put(`${HOST}:${PORT}/receptions/telegram?chat_id=${chat_id}`, {
                    body: {
                        telegram_msg: 1
                    },
                    json: true,

                    encoding: 'utf8'
                })

            }
        }

    })


};

