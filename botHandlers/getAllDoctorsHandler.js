const {bot} = require('../createBot');
const requestPromise = require('request-promise');
const {HOST} = require('../config/config');

module.exports.doctors = async msg => {

    let resBot = ``;

    let doctors = await requestPromise.get(HOST + '/doctors');

    doctors = JSON.parse(doctors);

    doctors.forEach((doctor) => {
        resBot += `\n Лікар: \n Ім'я: ${doctor.name} \n Прізвище: ${doctor.surname}
 Вік: ${doctor.age} \n Спеціальнісь: ${doctor['UserSpeciality.label']} \n\n`;
    });

    await bot.sendMessage(msg.chat.id, resBot)
};

