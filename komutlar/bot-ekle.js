const Discord = require('discord.js');
const db = require('wio.db');


exports.run = function(client, message, args) {

	let botid = args[0]
	let prefix = args[1]
  let onaylımı = args[2]
  let basvuru = db.fetch(`basvuruk_${message.guild.id}`)
	let kanal = db.fetch(`bot-ekle_${message.guild.id}`)
  let log =   db.fetch(`bot-log_${message.guild.id}`)
	if(!log) return message.channel.send("Bu komudu kullanmak için botlist kanallarının sunucuda ayarlı olması gerekiyor.")
  if(!basvuru) return message.channel.send("Bu komudu kullanmak için botlist kanallarının sunucuda ayarlı olması gerekiyor.")
  if(!kanal) return message.channel.send("Bu komudu kullanmak için botlist kanallarının sunucuda ayarlı olması gerekiyor.")
  
  if (message.channel.id !== kanal) return message.channel.send(`Bu komutu sadece <#${kanal}> kanalında kullanabilirsin.`).msg.delete({ timeout: 1000 })
	if (message.channel.id == kanal) {
  if (!botid) return message.channel.send(`:no_entry: Botunun ID'sini yazmalısın.`).msg.delete({ timeout: 1000 })
  if (!prefix) return message.channel.send(`:no_entry: Botunun prefixini yazmalısın.`).msg.delete({ timeout: 1000 })
  if (!onaylımı) return message.channel.send(`:no_entry: Botunun Dbl onaylımı onu yazmalısın`).msg.delete({ timeout: 1000 })
  message.delete()
  const basvuruuu = new Discord.MessageEmbed()
  .setColor("PURPLE")
  .setDescription(`${message.author} adlı kullanıcının <@${botid}> adlı botu sıraya eklendi. Botun onaylanması bekliyor. `)
  .addField(
      "**Bilgilendirme**",
      "> `Eğer Botum Ne Zaman Onaylancak Diye Soran Olursa Bot Red Yer Ve Botun Sahibi Sunucudan Kalıcı Ban Yer <a:uyari:807288324212523008>` ",
      true
    );
  const doruk = new Discord.MessageEmbed()
  .setColor("BLUE")
  .setDescription(`[Ekle 0 Perm](https://discordapp.com/oauth2/authorize?client_id=${botid}&scope=bot&permissions=0) | [Ekle 8 Perm](https://discordapp.com/oauth2/authorize?client_id=${botid}&scope=bot&permissions=8)`, true)
  .setTitle("Bot Ekletme")
  .addField("Bot Sahibi", message.author.tag)
  .addField("Bot ID", botid)
  .addField("Bot Prefix", prefix)
  .addField("Bot Onaylımı?", onaylımı)
  client.channels.cache.get(basvuru).send(doruk)
  client.channels.cache.get(log).send(basvuruuu)
  message.channel.send(`<a:zil:807286166319136784> Bot ekleme isteğiniz alındı.`).msg.delete({ timeout: 1000 })
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bot-ekle'],
  permLevel: 0
};

exports.help = {
  name: 'botekle', 
  description: "Sunucuya bot eklemenizi sağlar.",
  usage: 'botekle <botid> <prefix>'
};