const {bot} = require('./createBot');
const {start,menu} = require('./constant/infoMessages');

bot.on('message', async msg=>{
   await bot.sendLocation(msg.chat.id,39.27308859, -76.19238295);
})



