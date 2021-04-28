const db = require('quick.db')
const Discord = require('discord.js')
 
 
exports.run = async (bot, message, args) => {
 if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Komutlar Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }
  
  let golduye = db.get(`üyelikk_${message.author.id}`)
  if(golduye) {

} else { return message.channel.send(`${message.author}, bu komutu sadece **GOLD** üyeler kullanabilir.`) }
  
    if (!message.member.hasPermission("VIEW_AUDIT_LOG")) return message.reply(`Bu Komutu Kullanabilmek İçin **Denetim Kaydını Görüntüle** İznine Sahip Olmalısın!`);
 
  if (args[0] === 'aç') {
    
    db.set(`ssaass_${message.guild.id}`, 'acik')
    message.channel.send(`Artık bot Sa diyince As diyecek. Kapatmak için "\`d!sa-as kapat\`" yazmalısın.`)
 
  }
  
  if (args[0] === 'kapat') {
    
    db.set(`ssaass_${message.guild.id}`, 'kapali')
    message.channel.send(`Artık biri sa diyince cevap vermeyecek.`)

  }
 
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sa-as-sistemi'],
  permLevel: 0,
  kategori: "Ayarlar"
};
 
exports.help = {
  name: 'sa-as',
  description: 'Sa As ayarlarsın.',
  usage: 'sa-as'
};