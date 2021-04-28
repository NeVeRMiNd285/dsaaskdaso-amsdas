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
**[Destek Sunucusu](https://discord.gg/4uq7UAFFSn)** **•** **[Botun Davet Linki](https://discord.com/api/oauth2/authorize?client_id=807993666165276674&permissions=8&scope=bot)** **•** **[Oy Ver!](https://top.gg/bot/807993666165276674#/)**
Bir komut hakkında detaylı __yardım için__: ** d!yardım**

**Dorsky Bot •Eğlence Komutları**
> **d!zarat** →  Zar atarsınız.
> **d!nah-çek** →  Nah Çekersiniz.
> **d!günlük-burç-yorumu** → Bota günlük burç yorumu yaptırırsınız.
> **d!kasaaç** → CsGo kasası açmaya ne dersin?.
> **d!emojiyazı** → Emojili yazı yazmaya ne dersin?.
> **d!espiri** → Bot espiri yapar.
> **d!sor** → Bot sorduğunuz soruya cevap verir.
> **d!aykut-elmas** → Aykut Elmas Diyorki.
> **d!vine** → Bot size komik paylaşımlar gösterir.
> **d!balıktut** → Dereden balık tutarsınız.
> **d!tersyaz** →  Yazdığınız yazıyı bot tersten yazar.
> **d!mcskin** →Yazdığınız ismin minecraft görünüşünü atar.
> **d!token** →  Botun tokenini gösterir.
> **d!düello** →  Arkadaşlarınızla düello yaparsınız.
> **d!nitro** →  Beleş Nitro :D.
> **d!extra** →  Extra Komutları Görürsünüz.
> **d!yumruk-at** → Etiketlediğin kişiye bot yumruk atar.
> **d!yazan-kazanır** → Yazan kazanır oyunu.
> **d!kapaklaf** → Etiketlediğin kişiye bot kapaklaf söyler.
> **d!şanslısayım** → Şanslı sayını bulmaya calışır.
> **d!kaçcm**→ Malafatını ölçer.

`)

  return message.channel.send(doruk).then;
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "eğlence",
  description: "Botun Komut Listesini Gösterir!",
  usage: "-eğlence"
};
