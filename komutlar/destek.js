

const Discord = require('discord.js')
const moment = require('moment')
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')
const client = new Discord.Client();
require("moment-duration-format");
const prefix = ayarlar.prefix
exports.run = async (bot, msg, args) => {

        const doruk = new Discord.MessageEmbed()
                .setColor('GOLD')
        .setFooter(`${msg.author.username} Başarıyla Destek Komutunu Kullandı!`, msg.author.avatarURL)
        .setAuthor('Dorsky Destek Menüsü')
        .setThumbnail("https://cdn.discordapp.com/attachments/819232896841678890/826505235899875358/standard.gif")
        .setDescription(' Botu Davet Etmek İçin `d!davet` yazabilirisiniz.',false)        
        .addField('**d!çağır**', ' `Botun Sahibini Çağırırsınız(Botun Sahibi Size Biraz Geç Dönebilir).`',false)        
        .addField('**Bilgilendirme**', '>  `d!davet` | Dorsky Botu Sunucunuza Davet Edersiniz.\n `d!i` | Botun İstatistiklerini Görürsünüz.`',true)
        
  
msg.channel.send(doruk)
    
}
exports.conf = {
  enabled: true,
  guildOnly: true,
 aliases: ['destek', 'dstk','dst'],
  kategori: 'Destek',
  permLevel: 0
};
exports.help = {
  name: 'destek',
  description: 'İstediğiniz kullanıcını bilgilerini gösterir.',
  usage: 'destek'
};