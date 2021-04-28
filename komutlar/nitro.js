const Discord = require("discord.js");

exports.run = async (client, message, args) => {
 
 const doruk = new Discord.MessageEmbed()

.setColor("RANDOM")
.setImage("https://cdn.glitch.com/9986b79e-b038-4dd0-8025-a2482d621059%2Fcbd6cf0c-5ae1-48a0-a03e-f081cc5b264d.image.png?v=1617116682919")
.setTitle("Oha ab nitro ");

  message.channel.send(doruk);
}; 

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["nitro","nitro-ver"],
  permLevel: `Yok`
};

exports.help = {
  name: "nitro",
  description: "beleş nitro ab",
  usage: "nitro"
};