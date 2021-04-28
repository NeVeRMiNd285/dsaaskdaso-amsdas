const Discord = require("discord.js");

exports.run = (client, message, args) => {
  const doruk = new Discord.MessageEmbed()
    .setAuthor(`${client.user.username} Linkler`, client.user.avatarURL())
    .setColor("RANDOM")
     .setThumbnail("https://cdn.discordapp.com/attachments/819232896841678890/826505235899875358/standard.gif")
    .setDescription(
      `<a:discord:807286061502824498> [ •Dorsky Botu Davet ET!](https://discord.com/api/oauth2/authorize?client_id=807993666165276674&permissions=8&scope=bot)\n<a:discord:807286061502824498> [ •Dorsky Bota Oy Ver !](https://top.gg/bot/807993666165276674#/)\n<a:discord:807286061502824498> [ • Dorsky Bot Destek Sunucusu](https://discord.gg/4uq7UAFFSn)`
    )
    .setFooter(`Dorsky Bot`)
    .setTimestamp();
  message.channel.send(doruk);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["davet"],
  permLevel: 0
};
exports.help = {
  name: "dvt"
};
