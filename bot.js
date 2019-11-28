const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("635101002768318478")
setInterval(function() {
channel.send(`هلا بيك في سيرفرن انورت`);
}, 30)
})

client.login(process.env.BOT_TOKEN);