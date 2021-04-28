const Discord = require ("discord.js");

exports.run = (client, message, msg) => {
if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }
const doruk = new Discord.MessageEmbed()

.setColor("RANDOM")
.setFooter(
      `Bu komutu kullanan kullanıcı ${message.author.tag}`,
  message.author.avatarURL)
.setTitle("**  » Dorsky Bot  **")
.setFooter(`${message.author.tag} tarafından istendi`, message.author.avatarURL({ dynamic: true }))
.setThumbnail("https://cdn.discordapp.com/attachments/819232896841678890/826505235899875358/standard.gif")
.setDescription(`
**» Bağlantılar** 
**[Destek Sunucusu](https://discord.gg/4uq7UAFFSn)** **•** **[Botun Davet Linki](https://discord.com/api/oauth2/authorize?client_id=807993666165276674&permissions=8&scope=bot)** **•** **[Dorsky Bota Oy Ver](https://top.gg/bot/807993666165276674/vote)**
Bir komut hakkında detaylı __yardım için__: ** d!yardım**

**Dorsky Bot • Gold Bilgi**
> <a:boostcuk:832656534013739079> **GOLD** üye ne işe yarar?
> <a:boostcuk:832656534013739079> **GOLD** üyeler sa-as kullanabilir
> <a:boostcuk:832656534013739079> **GOLD** üyelere özel mod-log sistemi
> <a:boostcuk:832656534013739079> **GOLD** üyelere özel karşılama mesajları
> <a:boostcuk:832656534013739079> **gibi şeyler bulunmaktadır.**`)

 .addField(
      "<a:boostcuk:832656534013739079> **Bilgilendirme**",
      "> Eğer **GOLD** paket satın almak istiyorsanız d!gold-fiyat yazabilir ve fiyatlarına bakabilirsiniz.",
      true
    );
 
 

return message.channel.send(doruk)
.then; 

};
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: ["goldbilgi"], 
    permLevel: 0 
};
  
  exports.help = {
    name: 'gold-bilgi', 
    description: 'Botun Komut Listesini Gösterir!',
    usage: '-moderasyon'
};