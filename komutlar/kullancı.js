const Discord = require ("discord.js");

exports.run = (client, message) => {
if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }
  
const NARCOSEMBED = new Discord.MessageEmbed()

.setColor("RANDOM")
.setTitle("**  » Dorsky Bot  **")
.setThumbnail("https://cdn.glitch.com/1f71273a-932e-4580-81d1-890c4b5d55fc%2Fthumbnails%2F9ad09804-0085-48bc-b927-831075379c9c.image.png?1614321428536")
.setDescription(`
**» Bağlantılar** 
**[Destek Sunucusu](https://rtx-ozel-bot.glitch.me/support-server.html)** **•** **[Botun Davet Linki](https://rtx-ozel-bot.glitch.me/add-bot.html)** **•** **[Web-Site - Kaldırıldı - ]()**
Bir komut hakkında detaylı __yardım için__: ** *yardım**

**• Komutlar**
> d!aşk-ölç → Etiketlediğin kişinin aşkını ölcer <3 .
> d!kullanıcı-bilgi → Etiketlediniz kullanıcın bilgilerini gösterir.
> d!medya → Sosyal medyalarım. 
> d!toplamkomut → Botta ne kadar komut oldunu gösterir.
> d!say → Sunucu hakkında detaylı bilgi verir.
> d!avatar → Etiketlediğin birisinin avatarını gösterir.
> d!yetkilerim → Hangi yetkilere sahip olduğunuzu gösterir.
> d!sunucuresmi → Sunucu resmini gösterir.
> d!ping → Botun Pingine Bakarsın. 
> d!kurallar → Genel kuralları gösterir.
> d!davet → beni sunucuna ekle.
> d!i → Bot hakkında bilgi gösterir
> d!bug-bildir → Yazdığınız bug'u yapımcılarıma bildirir.
> d!istek-kod → Yazdığınız istek kodu yapımcılarıma bildirir.

`)
 

return message.channel.send(NARCOSEMBED)
.then; 

};
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: [], 
    permLevel: 0 
};
  
  exports.help = {
    name: 'kullanıcı', 
    description: 'Botun Komut Listesini Gösterir!',
    usage: '-kullanıcı'
};