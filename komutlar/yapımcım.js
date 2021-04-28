const Discord = require("discord.js");

exports.run = (client, message, args) => {
  const doruk = new Discord.MessageEmbed()
    .setColor("#00ee00")
    .setDescription("> Yapımcım : <@718528038916063242>")
    .setFooter("Dorsky Bot");
  message.channel.send(doruk);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "yapımcım",
  description: "",
  usage: ""
};
