const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  let user = message.mentions.users.first() || message.author;

  const doruk = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle(`${client.user.username}`)
    .setThumbnail("https://cdn.discordapp.com/attachments/819232896841678890/826505235899875358/standard.gif")
    .setDescription(
      `**• Abone Rolü** •

**• Abone Rolü Nasıl Alırım? •**

**Abone Rolü Almak İçin Yapmanız Gerekenler
• <#831220754662031442>  kanalına gidip abone olduğunuza dair, like attığınıza dair ve yorum attığınıza dair ss atınız.
• Yetkililer Sizinle İlgilenecektir**`)
  message.channel.send(doruk);

  message.delete();
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "abonemesaj",
  description: "abone kuralları atar",
  usage: "abonemesaj"
};
