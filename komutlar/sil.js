const Discord = require("discord.js");
exports.run = function(client, message, args) {
  if (!message.member.hasPermission("MANAGE_MESSAGES")) {
    const doruk = new Discord.MessageEmbed()
      .setColor("BLACK")
      .setDescription(`**Ne yazıkki **MANAGE_MESSAGES** yetkisine sahip değilsin!**`)
      .setFooter(client.user.username, client.user.avatarURL());
    message.channel.send(doruk);
    return;
  }
  if (!args[0]) {
    const doruk = new Discord.MessageEmbed()
      .setColor("BLACK")
      .setDescription(`**Lütfen silinecek mesaj sayısını belirtiniz.**`)
      .setFooter(client.user.username, client.user.avatarURL());
    message.channel.send(doruk);
    return;
  }
  if (args[0] > 100) {
    const doruk = new Discord.MessageEmbed()
      .setColor("BLACK")
      .setDescription(`**Ne yazık ki 100'den fazla mesaj silemem.**`)
      .setFooter(client.user.username, client.user.avatarURL());
    message.channel.send(doruk);
    return;
  } message.channel.bulkDelete(args[0]).then(() => {
    const doruk = new Discord.MessageEmbed()
      .setColor("BLACK")
      .addField(`**Temizleyen Yetkili**`, `<@${message.author.id}>`)
      .setThumbnail("https://cdn.discordapp.com/attachments/819232896841678890/826505235899875358/standard.gif")
      .addField(`**Silinen Mesaj Sayısı**`, args[0])
      .setFooter(client.user.username, client.user.avatarURL()); message.channel.send(doruk).msg.delete({ timeout: 1000 })
  });
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["sil"],
  permLevel: 0
};
exports.help = {
  name: "sil",
  description: "Mesaj Siler",
  usage: "sil <mesajSayısı>"
};