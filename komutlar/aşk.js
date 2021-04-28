const Discord = require('discord.js')
 
exports.run = async (client, message, args) => {
      if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }    
  let member = message.guild.member(message.mentions.users.array()[0] ||  message.guild.members.cache.get(args[0]))
        let member2 = message.guild.member(message.mentions.users.array()[1] || message.guild.members.cache.get(args[1]))
        var s = message.author
        if(member2) {
                var s = member2.user
        }
        if(!member) {
                const doruk = new Discord.MessageEmbed()
                        .setDescription(`Aşk ölçmek için birini etiketlemen lazım,Hem seni ve hemde onu <3`)
                        .setColor("RED")
                        .setTimestamp()
                message.channel.send({doruk})
                return
        }
 
        var doruksonuc = Math.floor(Math.random() * 101)
        var dorukkalp = ''
        var dorukkalp = ''
        if(Math.floor(Math.round(doruksonuc / 10) * 10) >= 10) {
                var c = 0
                for(var i = 0; i < Math.floor(Math.round(doruksonuc / 10)); i++) {
                        dorukkalp += '❤️'
                        c++
                }
                for(var x = c; x < 10; x++) {
                        dorukkalp += `🖤`
                }
        } else {
                var dorukkalp = '🖤'
                var dorukkalp = '🖤🖤🖤🖤🖤🖤🖤🖤🖤'
        }
        var dorukyorum = `Sizi evlendirelim <3`
        if(doruksonuc < 90) {
                var dorukyorum = 'birazdaha uğraşırsan bu kız senin!'
        }
        if(doruksonuc < 70) {
                var dorukyorum = 'bilemedim bak'
        }
        if(doruksonuc < 50) {
                var dorukyorum = 'Çok azda olsa senden hoşlanıyo...'
        }
        if(doruksonuc < 30) {
                var dorukyorum = 'Seni sevmiyormuş ağa beeeeee...'
        }
        const embed = new Discord.MessageEmbed()
                .setAuthor(`${member.user.tag} | ${s.tag}`)
                .setDescription(`NE kadar seviyo bakalım : ${doruksonuc}\n${dorukkalp}${dorukkalp}\n\n${dorukyorum}`)
                .setColor("RED")
                .setTimestamp()
        message.channel.send({embed})
}
 
exports.conf = {
        enabled: true,
        guildOnly: true,
        aliases: [''],
        permLevel: 0
}
 
exports.help = {
        name: 'aşk-ölç',
        description: 'Aşk ölcer.',
        usage: '-aşk-ölç'
}