const {bot} = require('../createBot');
const requestPromise = require('request-promise');
const {HOST, PORT} = require('../config/config');

module.exports = async msg => {

    let resBot = ``;

    let doctors = await requestPromise.get(`${HOST}:${PORT}/doctors`);

    doctors = JSON.parse(doctors);

    doctors.forEach((doctor) => {
        resBot += `\n Лікар: \n Ім'я: ${doctor.name} \n Прізвище: ${doctor.surname}
 Вік: ${doctor.age} \n Спеціальнісь: ${doctor['UserSpeciality.label']} \n\n`;
    });

    await bot.sendMessage(msg.chat.id, resBot)
};

