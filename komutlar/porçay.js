const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
var request = require("request");


exports.run = (client, message, params) => {
  const png = "https://cdn.glitch.com/1f71273a-932e-4580-81d1-890c4b5d55fc%2F4bd94988-6775-403c-bc06-d4389f3bea69.image.png?v=1614327083874" || "https://cdn.glitch.com/1f71273a-932e-4580-81d1-890c4b5d55fc%2Ff3e14bde-67bd-4e26-baf7-7cc9cd01015a.image.png?v=1614327185047"
  if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
      .setColor(0xff0000)
      .setTimestamp()
      .setAuthor(message.author.username, message.author.avatarURL())
      .addField("Eğlence Komutları Özel Mesajlarda Kullanılamaz!");
    return message.author.send(ozelmesajuyari);
  } 
  if (message.channel.type !== "dm") {
    const doruk = new Discord.MessageEmbed()
    .setAuthor( " 4 yıl sonra görüşürüz porçay :(")
      .setColor(0xffffff)
      .setTimestamp()
      .setDescription("")
      .setImage(png);
    return message.channel.send(doruk);
  }
}; 

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "porçay",
  description: "porçay",
  usage: "porçay"
};