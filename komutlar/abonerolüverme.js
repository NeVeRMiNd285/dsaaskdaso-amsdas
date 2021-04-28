let Discord = require("discord.js")
let database = require("wio.db")
let ayarlar = require("../ayarlar.json")



exports.run = async(client, message, args) => {
let aboneyetkilisi = await database.fetch(`aboneyetkilisi.${message.guild.id}`)
let abonelog = await database.fetch(`abonelog.${message.guild.id}`)
let abonerol = await database.fetch(`abonerol.${message.guild.id}`)
  let abonekisi = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
if(!abonerol) return message.channel.send(`Abone rolü ayarlanmamış!`)
  if(!abonelog) return message.channel.send(`Abone log kanalı ayarlanmamış!`)
  if(!aboneyetkilisi) return message.channel.send(`Abone yetkili rolü ayarlanmamış!`)
  let user = message.mentions.users.first()
  if(!message.member.roles.cache.has(aboneyetkilisi)) return message.channel.send(`**Bu komutu sadece abone yetkilisi olan kişiler kullanabilir.**`)
  
  message.delete();
  
  if(!message.mentions.users.first()) return message.channel.send(`Bir Üye Etiketle!`)
  
  await(abonekisi.roles.add(abonerol))
  
  const doruk = new Discord.MessageEmbed()
  .setTitle(`<:youtube:831147013038276643> Abone Rolü Verildi! <:youtube:831147013038276643>  `)
  .addField(`<a:hype:830806589254008862> Abone Rolünü Veren Kişi: <a:hype:830806589254008862> `, `${message.author}`, true)
  .addField(`<a:m_onay:819241950657904670> Abone Rolü Verilen Kişi <a:m_onay:819241950657904670> `, `${user}`, true)
  .setThumbnail(user.avatarURL())
  .setColor(`GOLD`)
  .setFooter(`${client.user.username} Abone Sistemi`)
  .setThumbnail("https://cdn.discordapp.com/attachments/819232896841678890/826505235899875358/standard.gif");
  message.guild.channels.cache.get(abonelog).send(doruk)
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['abone'],
  perm: 0
}
exports.help = {
  name: 'a'
}

exports.play = {
  kullanım: '!abone-y-rol @rol',
  açıklama: 'Abone Yetkili Rolünü Ayarlarsınız',
  kategori: 'Abone'
}
