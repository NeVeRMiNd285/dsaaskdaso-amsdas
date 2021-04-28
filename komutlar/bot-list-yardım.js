const Discord = require('discord.js');
const db = require("wio.db")
exports.run = async (client, message, args) => {
 if(!args[0]) {
   
const doruk = new Discord.MessageEmbed()
    .setAuthor("<a:ayarlar:810222847510446131> Dorsky Bot, Botlist || Yardım Menüsü", client.user.avatarURL())
   .setColor("#BLUE")
  .setDescription(`
  <a:hype:808432695151296522> **Kullanıcı Komutları
 
> <a:turkbayragi:807285948562931764> **• \`d!botekle\` => Botliste Bot Eklersiniz.**
> <a:turkbayragi:807285948562931764> **• \`d!say\` => Sunucuyu Sayar.**
 
<a:ayarlar:810222847510446131> **Yetkili Komutları**
  
> <a:turkbayragi:807285948562931764>  **• \`d!bot-kurallari\` => Botlist Kurallarını Atar.**
> <a:turkbayragi:807285948562931764>  **• \`d!botlist-ayar\` Ayarlama Menüsünü Atar.**
> <a:turkbayragi:807285948562931764>  **• \`d!bot-list-sunucu-kur\` Botlist Sunucusu Kurar.**
> <a:turkbayragi:807285948562931764>  **• \`d!botonayla\` Bot Onaylarsınız.**
> <a:turkbayragi:807285948562931764>  **• \`d!botreddet\` Bot Rededersiniz.**
\`\`\`Bu Altyapı Doruk'a Aittir. Tüm Abonelere İyi Kullanımlar Dileriz.\`\`\`
  
  `)   
  .addField(`» Bağlantı Adresleri`, `[**Dorsky Bot**](https://discord.gg/Ttk9sxKVDB) **•** [**YouTube Kanalı**](https://www.youtube.com/channel/UCMv_35aYVIH38GZLSiQbhbw) **•**`)        .setFooter(`🔵 Dorsky Bot Sizler İçin Burda!`, client.user.avatarURL())

  message.channel.send(doruk)

}else {

}
};

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'bot-list-yardım', 
  description: '',
  usage: ''
};