const Discord = require ("discord.js");

exports.run = (client, message, msg, user) => {
if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }
const doruk = new Discord.MessageEmbed()

.setColor("BLUE")
.setTitle("**  » Dorsky Bot  **")
.setFooter(`${message.author.tag} tarafından istendi`, message.author.avatarURL({ dynamic: true }))
.setThumbnail("https://cdn.discordapp.com/attachments/819232896841678890/826505235899875358/standard.gif")
.setDescription(`
**» Bağlantılar** 
**[Destek Sunucusu](https://discord.gg/4uq7UAFFSn)** **•** **[Botun Davet Linki](https://discord.com/api/oauth2/authorize?client_id=807993666165276674&permissions=8&scope=bot)** **•** **[Dorsky Bota Oy Ver](https://top.gg/bot/807993666165276674/vote)**
Bir komut hakkında detaylı __yardım için__: ** d!yardım**

**Dorsky Bot • Gold Fiyat**
> <a:spo_kalp:833281393508483092>  **₺4,99'ye Dorsky Bot GOLD Üyelik Al! <a:spo_kalp:833281393508483092>
> <a:spo_kalp:833281393508483092> Satın Almak İçin [Tıkla](https://discord.gg/4uq7UAFFSn) botun sunucusuna gidip sunucu sahibiyle iletişime geçebilirsin.**  `)

 

.addField(
      "<a:spo_kalp:833281393508483092> **Bilgilendirme**",
      "> Eğer **GOLD** paket satın almak istiyorsanız botun sunucusuna gidebilir ya da ▄︻̷̿┻̿═━一 ʜᴇᴀᴅsʜᴏᴛ#5968 ile iletişime geçebilirsiniz.",
      true
    );
 
 

return message.channel.send(doruk)
.then; 

};
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: ["goldfiyat"], 
    permLevel: 0 
};
  
  exports.help = {
    name: 'gold-fiyat', 
    description: 'Botun Komut Listesini Gösterir!',
    usage: '-moderasyon'
};