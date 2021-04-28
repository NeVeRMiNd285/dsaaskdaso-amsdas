const Discord = require('discord.js');
const film = require('film-apisi')

exports.run = async (client, message, args) => {
if(!args.join(" ")) return message.reply('aramam için bir film adı belirtmen gerekiyor.')
let c = await film.ara(args.join(" "))
const doruk = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle(c.ismi)
.setThumbnail(c.poster)
.addField('Yıldızlar:', c.yıldızlar)
.addField('Tür:', c.tür)
.addField('Puan:', c.puan)
.addField('Yıl:', c.yıl)
.addField('Süre:', c.süre)
.addField('Sezon:', c.sezon)
.addField('Bölüm:', c.bölüm)
.addField('Benzerler:', c.benzerler)
message.channel.send(doruk)

}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['film-ara'],
    permLevel: 0
}

exports.help = {
    name: 'film-ara',
    description: "imdb den arama yapmanızı sağlar",
    usage: 'film-ara'
}