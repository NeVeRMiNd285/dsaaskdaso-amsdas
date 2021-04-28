const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  if (!message.guild) {
    const doruk = new Discord.MessageEmbed()
      .setColor(0xff0000)
      .setTimestamp()
      .setAuthor(message.author.username, message.author.avatarURL)
      .addField("**Komutları Özel Mesajlarda Kullanılamaz!**");
    return message.author.send(doruk);
  }
  let kanal = message.mentions.channels.first();
  if (!kanal)
    return message.channel.send(
      "Yanlış yazdın dostum Doğru kullanım : **-kanal-id #genel-sohbet**"
    );
  message.channel.send(kanal.id);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "kanal-id",
  description: "doruk",
  usage: "kanal-id <kanal>"
};
