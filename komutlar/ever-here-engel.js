const Discord = require('discord.js')
const db = require('wio.db');
const ayarlar = require('../ayarlar.json')
let prefix = ayarlar.prefix

exports.run = async (client, message, args) => { 
  if (!args[0]) {  
  const doruk = new Discord.MessageEmbed()
  .addField("Hatalı Kullanım",`Örnek Kullanım: **${prefix}ever-here-engel aç/kapat**`)
  .setColor("RED")
  .setFooter("Dorsky Bot")
  return message.channel.send(doruk)
  }
  if (args[0] == 'aç') {  
  db.set(`hereengel_${message.guild.id}`, 'acik')
  const doruk = new Discord.MessageEmbed() 
  .addField("İşlem Başarılı",`Ever-Here Engel Başarılı Bir Şekilde Aktif Edildi (Yönetici Yetkisi Olan Kişilerin Mesajlarını Silmeyecektir!`)
  .setColor("GREEN")
  .setFooter("Dorsky Bot | Ever Here Engel Sistemi")
  return message.channel.send(doruk)
  }
  if (args[0] == 'kapat') {
  db.set(`hereengel_${message.guild.id}`, 'kapali')
  const doruk = new Discord.MessageEmbed() 
  .addField("İşlem Başarılı",`Ever-Here Engel Başarılı Bir Şekilde Kapatıldı`)
  .setColor("GREEN")
  .setFooter("Dorsky Bot | Ever Here Engel Sistemi")
  return message.channel.send(doruk)
  } 
  }
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['ever-here-engel','everhere-engel','ever-hereengel'],
  permLevel: 3
};

exports.help = {
  name: 'everhereengel',
  description: '@everyone ve @here Etiketlerini Engeller',
  usage: 'everhereengel'
};