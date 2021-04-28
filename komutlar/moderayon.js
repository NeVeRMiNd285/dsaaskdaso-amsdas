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

.setColor("BLUE")
.setTitle("**  » Dorsky Bot  **")
.setThumbnail("https://cdn.discordapp.com/attachments/819232896841678890/826505235899875358/standard.gif")
 
.setDescription(`
**» Bağlantılar** 
**[Destek Sunucusu](https://discord.gg/4uq7UAFFSn)** **•** **[Botun Davet Linki](https://discord.com/api/oauth2/authorize?client_id=807993666165276674&permissions=8&scope=bot)** **•** **[Dorsky Bota Oy Ver](https://top.gg/bot/807993666165276674/vote)**
Bir komut hakkında detaylı __yardım için__: ** d!yardım**


**Dorsky Bot • Moderasyon Komutları**
> <a:ayarlar:830883368962490368> **d!sil** →  Belirttiğiniz Kadar Mesaj Siler. (En fazla 100)
> <a:ayarlar:830883368962490368> **d!taç** → Sunucunun sahibini gösterir.
> <a:ayarlar:830883368962490368> **d!ban** → Etiketlediğiniz kişiyi sunucudan banlarsınız.
> <a:ayarlar:830883368962490368> **d!kick** → Etiketlediğiniz kişiyi sunucudan atarsınız.
> <a:ayarlar:830883368962490368> **d!emojikopyala** → Botun olduğu bir sunucudan emoji kopyalarsınız.
> <a:ayarlar:830883368962490368> **d!sil** → Belirttiğiniz Kadar Mesaj Silersiniz.
> <a:ayarlar:830883368962490368> **d!duyuru** → Bot yazdıgının mesajı duyuru yapar.
> <a:ayarlar:830883368962490368> **d!otorol ayarla @rol #kanal** → Otorol Sistemi.
> <a:ayarlar:830883368962490368> **d!sayaç ayarla** → Sayaç Sistemi.
> <a:ayarlar:830883368962490368> **d!unban** → Birisinin banını açarsınız.
> <a:ayarlar:830883368962490368> **d!sa-as** →  Sa-As sistemini aktif eder.
> <a:ayarlar:830883368962490368> **d!sunucu-bilgi** →  Sunucu hakkında bilgi verir.
> <a:ayarlar:830883368962490368> **d!üyedurum** →  Sunucu üyeleri hakkında bilgi verir.

`)

 
 

return message.channel.send(doruk)
.then; 

};
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: [], 
    permLevel: 0 
};
  
  exports.help = {
    name: 'moderasyon', 
    description: 'Botun Komut Listesini Gösterir!',
    usage: '-moderasyon'
};