const Discord = require("discord.js");
const moment = require("moment");
const os = require("os");
require("moment-duration-format");
exports.run = async (client, message, args) => {
  const lelyss = moment;

  const doruk = moment
    .duration(client.uptime)
    .format(" D [gün], H [saat], m [dakika], s [saniye]");

  const dorsky = new Discord.MessageEmbed()
    .setColor("BLUE")
    .setThumbnail("https://cdn.discordapp.com/attachments/819232896841678890/826505235899875358/standard.gif")
    .setTitle("Dorsky Bot İstatistik Menüsü")
    .addField(
      "**__Sahip Geliştirici__**",
      `        <a:elmas:830806713447350302> Bot Sahip : <@718528038916063242>
               <a:elmas:830806713447350302> Bot Geliştirici : <@718528038916063242>`
    )
    .addField(
      "**__Bot Bilgi__**",
      `
       <a:nitro:830883436301778947> Prefix : ** d! **
       
	   <a:nitro:830883436301778947> Bot Dil : :flag_tr:`,
      true
    )
    .addField(
      "**__Sunucu/Kullanıcı__**",
      ` 
       <a:pika:833018810184237057> Toplam Sunucular : **${
         client.guilds.cache.size
       }**
       <a:pika:833018810184237057> Toplam Kullanıcılar :  **${client.guilds.cache
         .reduce((a, b) => a + b.memberCount, 0)
         .toLocaleString()}**`,
      true
    )

    .addField(
      "**__Sürümler__**",
      `<a:m_onay:819241950657904670> Discord.js :  **v${Discord.version}**
       <a:m_onay:819241950657904670> Node.js : **${process.version}**`,
      true
    )
    .addField(
      "**__Gecikmeler__**",
      `<a:uptime:819242012058320896> Ping : **${client.ws.ping}** MS 
       
	   <a:uptime:819242012058320896> Uptime : ${doruk}
        `,
      true
    )
    .addField(
      "**__Linkler__**",
      `
         <a:giris:819241987261464617> Rollü Davet [Tıkla!](https://discord.com/api/oauth2/authorize?client_id=807993666165276674&permissions=8&scope=bot) 
         <a:elmas:830806713447350302> Oy Ver! [Tıkla!](https://top.gg/bot/807993666165276674#/)
         <a:hype:830806589254008862>  Destek Sunucusu [Tıkla!](https://discord.gg/4uq7UAFFSn)`,
      true
    )
  .addField(
      "**__Youtube__**",
      `<:xx:830806555087601674> Doruk [Tıkla!](https://www.youtube.com/channel/UCMv_35aYVIH38GZLSiQbhbw)`,
      true
     )
    .setFooter(
      `${message.author.username} Tarafından İstendi.`,
      message.author.displayAvatarURL({ dynamic: true })
    );
  return message.channel.send(dorsky);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["i"],
  permLevel: 0
};

exports.help = {
  name: "istatistik",
  description: "i",
  usage: "i"
};
