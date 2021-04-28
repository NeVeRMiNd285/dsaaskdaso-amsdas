const Discord = require("discord.js");
const moment = require("moment");
const db = require("quick.db");
const ayarlar = require("../ayarlar.json");
const client = new Discord.Client();
require("moment-duration-format");
const prefix = ayarlar.prefix;
exports.run = async (bot, msg, args) => {
  const doruk = new Discord.MessageEmbed()
    .setColor("GOLD")
    .setFooter(
      `${msg.author.username} Başarıyla Dorsky Abone Yardım Komutunu Kullandı!`,
      msg.author.avatarURL
    )
    .setAuthor("Dorsky Bot Abone Yardım Menüsü")
    .setThumbnail("https://cdn.discordapp.com/attachments/819232896841678890/826505235899875358/standard.gif")
    .setDescription(
      "**<:548481801958719521:816027439888859136> Botu Davet Etmek İçin** `d!dvt` yazabilirisiniz.",
      false
    )
    .addField(
      "**<:548481801958719521:816027439888859136> d!abone-yetkili-rol @rol**",
      " `Abone Yetkili Rolünü Ayarlarsınız.`",
      false
    )
    .addField(
      "**<:548481801958719521:816027439888859136> d!abone @üye**",
      " `Etiketlediğiniz Kişiye Abone Rolünü Verirsiniz.`",
      false
    )
    .addField(
      "**<:548481801958719521:816027439888859136> d!abonelog #kanal**",
      " `Abone Log Kanalı Ayarlarsınız.`",
      false
    )
    .addField(
      "**<:548481801958719521:816027439888859136> d!abonerol**",
      " `Abone Rolünü Ayarlarsınız.`",
      false
    )
    .addField(
      "**<:548481801958719521:816027439888859136> Bilgilendirme**",
      ">  `d!dvt` | Dorsky Botu Sunucunuza Davet Edersiniz. \n<:548481801958719521:816027439888859136> `d!i` | Botun İslatistiklerini Görürsünüz.`",
      true
    );

  msg.channel.send(doruk);
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["abone-yardım", "ay", "a-y"],
  kategori: "aboneyardım",
  permLevel: 0
};
exports.help = {
  name: "aboneyardım",
  description: "İstediğiniz kullanıcını bilgilerini gösterir.",
  usage: "aboneyardım"
};
