const Discord = require("discord.js");

exports.run = (client, message) => {
  if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
      .setColor(0xff0000)
      .setTimestamp()
      .setAuthor(message.author.username, message.author.avatarURL)
      .addField("**Komutları Özel Mesajlarda Kullanılamaz!**");
    return message.author.send(ozelmesajuyari);
  }
  const doruk = new Discord.MessageEmbed()

    .setColor("RANDOM")
    .setTitle("**  » Dorsky Bot   **")
    .setThumbnail(
      "https://cdn.discordapp.com/attachments/819232896841678890/826505235899875358/standard.gif"
    ).setDescription(`
**» Bağlantılar** 
**[Destek Sunucusu](https://discord.gg/53C7T8AxWC)** **•** **[Dorsky Botun Davet Linki](https://discord.com/api/oauth2/authorize?client_id=807993666165276674&permissions=8&scope=bot)** **•** **[Oy Ver!](https://top.gg/bot/807993666165276674#/)**
Bir komut hakkında detaylı __yardım için__: **d!yardım**


**• Komutlar**
> **d!anket** → Anket yaparsınız.
> **d!rololuştur** → Rol oluşturur.
> **d!id** → İstediğin bi kişinin ID sini alır.
> **d!kanal-id** → Etiketlediğin kanalın ID sini atar.
> **d!davet-oluştur** → Etiketlediğin kanalın ID sini atar.
> **d!hesapla** → Matamatik işlemi yapar.
> **d!kelime-hesapla** → Kelime Hesaplarsınız.
> **d!porçay** → Porçay png atar :(
> **d!atatürk** → Atatürk Gifi Atar.
> **d!nick** → Etiketlediğin kişinin ismini değiştirir.
> **d!tekerleme** → Tekerleme yazar.
> **d!ilgincbilgi** → İlginç bilgi yazar.
> **d!desteaç** → Zula deste açar.
> **d!soygunyap** → Vurgun yapmaya hazırmısın? :D

**• Bilgilendirme**

> :bulb: **Discord Js Sürümü : 12.5.0**
> :robot: **Yapımcım : <@718528038916063242>**
© 2021 Dorsky Bot | Tüm hakları saklıdır.
`);

  return message.channel.send(doruk).then;
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "extra",
  description: "Botun Komut Listesini Gösterir!",
  usage: "-extra"
};
