const Discord = require('discord.js');
exports.run = (client, message, args) => {   
if (!message.guild) {
    const dorsky = new Discord.MessageEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(dorsky); }
  
  if (!message.guild) {
    const doruk = new Discord.MessageEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(doruk); }
  
 let mesaj = args.slice(0).join(' ');
 let member = message.mentions.members.first();
 let body = 'https://mc-heads.net/body/' + mesaj
 if (mesaj.length < 1) return message.channel.send('skin adı gir')
 if (mesaj == member) {
   message.channel.send('skin adı belirt')
 } else {
 const doruk = new Discord.MessageEmbed()
   .setColor('BLUE')
   .setImage(body)

 message.channel.send(doruk);
 }
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["mccilt"],
  permLevel: 0
};

exports.help = {
  name: "mcskin"
};