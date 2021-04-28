const discord = require('discord.js')
const üretici = require('generate-password');
exports.run = async(client, message,args) => { 
let doruk = args[0]
if(!doruk) return message.channel.send('Lütfen sayı olarak uzunluk belirt!')
var şifre = üretici.generate({
    length: doruk,
    numbers: true
});
return message.channel.send(şifre)
};
exports.conf = {
enabled: true, 
guildOnly: false, 
permLevel: 0, 
aliases: []
};
exports.help = {
name: "şifre-oluştur"
};