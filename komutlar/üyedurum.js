const Discord = require("discord.js");

exports.run = (client, message) => {
  if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
      .setColor(0xff0000)
      .setTimestamp()
      .setAuthor(message.author.username, message.author.avatarURL)
      .addField("**Komutlar Özel Mesajlarda Kullanılamaz!**");
    return message.author.send(ozelmesajuyari);
  }

  let doruk = new Discord.MessageEmbed()
    .setAuthor(`${message.guild.name} Üye Durum Bilgisi`)
    .setColor("RED")
    .addField("**Toplam Kullanıcı**", message.guild.memberCount)
    .addField(
      "<:yesildaire:826024641969389588> **Çevrimiçi Kullanıcılar**",
      message.guild.members.cache.filter(o => o.presence.status === "online")
        .size
    )
    .addField(
      "<a:idle:833683963461107793> **Boşta Kullanıcılar**",
      message.guild.members.cache.filter(o => o.presence.status === "idle").size
    )
    .addField(
      "<a:dnd:833683277805387776> **Rahatsız Etmeyindeki Kullanıcılar**",
      message.guild.members.cache.filter(o => o.presence.status === "dnd").size
    )
    .addField(
      "<a:offline:831165447989887078> **Çevrimdışı Kullanıcılar**",
      message.guild.members.cache.filter(o => o.presence.status === "offline")
        .size
    )

    .setTimestamp();
  return message.channel.send(doruk);
};

module.exports.conf = {
  aliases: ["üyedurum"],
  permLevel: 0,
  enabled: true,
  guildOnly: true
};

module.exports.help = {
  name: "üyedurum",
  description: "",
  usage: ""
};
