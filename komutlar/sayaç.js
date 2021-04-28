const Discord = require('discord.js')
const db = require('quick.db')
const ayarlar = require('../doruk.js')
 
exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("<a:uyari:807288324212523008> Bu komutu kullanabilmek için **Rolleri Yönet** yetkisine sahip olmalısın.")
  
  const doruk = await db.fetch(`sayac_${message.guild.id}`);
  const sayackanal = message.mentions.channels.first()

      
  if(args[0] !== "ayarla" && args[0] !== "sıfırla") return message.channel.send("<a:uyari:807288324212523008> Yanlış Kullanım Lütfen **ayarla** veya **sıfırla** yaz.")
    if(args[0] === "sıfırla") {
    if(!doruk) {
      message.channel.send(`<a:uyari:807288324212523008> | **Ayarlanmayan şeyi sıfırlayamazsın.**`)
return
    }
    
    db.delete(`sayac_${message.guild.id}`)
    db.delete(`sayacK_${message.guild.id}`)
    message.channel.send(`<a:kirmizielmas:807285977072402482> | **Sayaç başarıyla sıfırlandı.**`)
    return
  }
  
  if(args[0] === "ayarla") {
  if(isNaN(args[1])) {
    message.channel.send(`<a:ayarlar2:833704612392468501> | **Bir sayı yazmalısın.**`)
    return
  }
  
  if(!sayackanal) {
   await message.channel.send(`<a:ayarlar2:833704612392468501> | **Sayaç kanalını etiketlemelisin.**`)
  return
  }
  
  

  

 
        if(args[1] <= message.guild.memberCount) {
                message.channel.send(`<a:ayarlar:833704612392468501> | **Sunucudaki kullanıcı sayısından** (${message.guild.memberCount}) **daha yüksek bir değer girmelisin.**`)
                return
        }
  
  db.set(`sayac_${message.guild.id}`, args[1])
  db.set(`sayacK_${message.guild.id}`, sayackanal.id)
  
  message.channel.send(`<a:kirmizielmas:807285977072402482> | **Sayaç** \`${args[1]}\`, **sayaç kanalı** ${sayackanal} **olarak ayarlandı.**`)
}
}
 
exports.conf = {
        enabled: true,
        guildOnly: true,
        aliases: ['sayac'],
        permLevel: 0
}
 
exports.help = {
        name: 'sayaç',
        description: 'Sayacı ayarlar.',
        usage: 'sayaç <sayı> <#kanal> / sıfırla'
}