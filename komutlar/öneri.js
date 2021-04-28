const Discord = require("discord.js");
const db = require("quick.db");
exports.run = async (client, message, args) => {
  var ökanal = await db.fetch(`önerikanal_${message.guild.id}`);
  var önerikanalı = message.guild.channels.cache.find(
    channel => channel.id === ökanal
  );
  if (!ökanal)
    return message.channel.send(
      "<a:carp:808692069697847306> **Maalesef Bir Öneri Kanalı Ayarlanmamış.** <a:nike:807287540674461718> `Ayarlamak İçin d!öneri-kanal #kanal` "
    );

  var oneri = args.join(" ").slice(0);
  if (!oneri) {
    message.channel.send(
      "**<a:carp:808692069697847306> Hey Dostum Yanlış Kullanıyorsun. Merak Etme Ben Burdayım :kopke:** \n <a:nike:807287540674461718> `Örnek: d!öneri Dorsky Bota Oy Vermeyen Banlansın`"
    );

    return;
  } else {
    const embed = new Discord.MessageEmbed()
      .setTitle("Yeni Bir Öneri Var!")
      .addField(
        "<a:kirmizielmas:807285977072402482> Öneren Kullanıcı:",
        `${message.author.tag}`
      )
      .addField(`<a:kirmizielmas:807285977072402482> Öneri`, oneri)
      .setColor("RED")
      .setTimestamp()
      .setThumbnail("https://cdn.discordapp.com/attachments/819232896841678890/826505235899875358/standard.gif")
      .setFooter(`Dorsky Bot | Öneri Sistemi`);

    önerikanalı.send(embed).then(m => {
      m.react("✔️");
      m.react("❌");
    });
  }

  message.channel.send(
    `<a:zil:807286166319136784> **Öneriniz başarıyla alındı!** \n <a:hype:808432695151296522> _Önerin ${önerikanalı} kanalına düştü_`
  );
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["istek"],
  permLevel: 0
};
exports.help = {
  name: "öneri",
  description: "ö",
  usage: "ö"
};
