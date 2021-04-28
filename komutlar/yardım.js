const Discord = require("discord.js");
const moment = require("moment");
const db = require("quick.db");
const ayarlar = require("../ayarlar.json");
const client = new Discord.Client();
require("moment-duration-format");
const prefix = ayarlar.prefix;
exports.run = async (bot, msg, args) => {
  const doruk = new Discord.MessageEmbed()
    .setColor("BLUE")
	.setFooter(
      `Bu komutu kullanan kullanıcı ${msg.author.tag}`,
  msg.author.avatarURL)
   .setThumbnail("https://cdn.discordapp.com/attachments/819232896841678890/826505235899875358/standard.gif")
    .setAuthor("Dorsky Bot Yardım Menüsü")
    .setDescription(
      "**Botu Davet Etmek İçin** `d!davet` yazabilirisiniz.",
      false
    )
    .addField(
      "**<:yt:831165505812824156> d!aboneyardım**",
      " `Abone Sistemi Ayarlarsınız.`",
      false
    )
    .addField(
      "**<a:nitro:830883436301778947> d!yardım**",
      " `Bu Mesajı Görüntülersiniz.`",
      false
    )
    .addField(
      "**<a:kitap:831165349880922113> d!dvt**",
      " `Botu Sunucunuza Davet Edersiniz.`",
      false
    )
    .addField(
      "**<a:ayarlar:830883368962490368> d!moderasyon**",
      " `Moderasyon Komutlarını Görürsünüz.`",
      false
    )
    .addField(
      "**<a:kos:831145924260397087> d!destek**",
      " `Destek Komutları.`",
      false
    )
      .addField(
      "**<a:pika:833018810184237057> d!discrim**",
      " `Discordda sizin etiketinizde olan kişileri gösterir.`",
      false
    )
  .addField(
      "**<a:at:832626077850796042> d!çekiliş-yardım**",
      " `Çekiliş Komutları.`",
      false
    )
    .addField(
      "**<a:tatli:832917044046462976> d!eğlence**",
      " `Eğlence Komutlarını İncelersiniz.`",
      false
    )
    .addField(
      "**<a:elmas:830806713447350302> d!gold-bilgi**",
      " `GOLD İle İlgili Bilgi Verir, d!gold-fiyat Yazarak Gold Fiyatlarına Bakabilirsiniz.`",
      false
    )
    .addField(
      "**<a:kedi:833018824772026389> d!ping**",
      " `Bot Pingini Görürsünüz.`",
      false
    )
    .addField(
      "**Bilgilendirme**",
      ">  <a:kitap:831165349880922113> `d!davet` | Dorsky Botu Sunucunuza Davet Edersiniz.\n`d!i` | Botun İstatistiklerini Görürsünüz.",
      true
    );
 msg.channel.send(doruk);
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["y", "h", "yardım", "help"],
  kategori: "yardım",
  permLevel: 0
};
exports.help = {
  name: "yardım",
  description: "İstediğiniz kullanıcını bilgilerini gösterir.",
  usage: "y"
};


