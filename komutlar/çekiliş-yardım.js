const Discord = require ("discord.js");

exports.run = (client, message) => {
if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }
const doruk = new Discord.MessageEmbed()

.setColor("RANDOM")
.setTitle("**  » Dorsky Bot  **")
.setThumbnail("https://cdn.discordapp.com/attachments/819232896841678890/826505235899875358/standard.gif")
.setDescription(`
**» Bağlantılar** 
**[Destek Sunucusu](https://discord.gg/4uq7UAFFSn)** **•** **[Botun Davet Linki](https://discord.com/api/oauth2/authorize?client_id=807993666165276674&permissions=8&scope=bot)** **•** **[Dorsky Bota Oy Ver](https://top.gg/bot/807993666165276674/vote)**
Bir komut hakkında detaylı __yardım için__: ** d!yardım**

**Dorsky Bot • Çekiliş Komutları**
> <a:ayarlar:830883368962490368> **d!çekiliş** →  Çekiliş Başlatmanızı Sağlar.
> <a:ayarlar:830883368962490368> **d!çekiliş-bitir** →  Çekiliş Bitirirsiniz.
> <a:ayarlar:830883368962490368> **d!reroll** →  Çekiliş Kazananını Yeniden Seçersiniz.`)
 
 

return message.channel.send(doruk)
.then; 

};
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: ["çekilişyardım"], 
    permLevel: 0 
};
  
  exports.help = {
    name: 'çekiliş-yardım', 
    description: 'Botun Komut Listesini Gösterir!',
    usage: '-moderasyon'
};