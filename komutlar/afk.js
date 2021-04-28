const Discord = require('discord.js');
const db = require('quick.db');

    exports.run = async(client, message, args) => {

        const codemarefiuser = db.fetch(`kisiid_${message.author.id}_${message.guild.id}`);
        const codemarefisebep = args[0];

        if(!args[0]) {
            let kisi = message.guild.members.cache.get(message.author.id);
            let kisiisim = kisi.displayName;

            db.set(`cmfsebep_${message.author.id}_${message.guild.id}`, 'Sebep Yok');
            db.set(`kisiid_${message.author.id}_${message.guild.id}`,message.author.id);
            db.set(`kisiisim_${message.author.id}_${message.guild.id}`, kisiisim);
            let sebep = db.fetch(`cmfsebep_${message.author.id}_${message.guild.id}`);

            const afk = new Discord.MessageEmbed()
            .setDescription(`${message.author} Başarılı şekilde **${sebep}** Sebebiyle 'AFK' moduna geçtiniz.`)
            .setColor('#00ff00')
            .setFooter('Dorsky Bot | Afk Sistemi')
            message.channel.send(afk)

            message.member.setNickname(`[AFK] ` + kisiisim);
        }

        if(args[0]) {
            let cmfsebep = args.join(' ');
            let kisi = message.guild.members.cache.get(message.author.id);
            let kisiisim = kisi.displayName;
        
            db.set(`cmfsebep_${message.author.id}_${message.guild.id}`, cmfsebep);
            db.set(`kisiid_${message.author.id}_${message.guild.id}`,message.author.id);
            db.set(`kisiisim_${message.author.id}_${message.guild.id}`, kisiisim);
            let sebep = db.fetch(`cmfsebep_${message.author.id}_${message.guild.id}`);

            const afk = new Discord.MessageEmbed()
            .setDescription(`${message.author} Başarılı şekilde **${sebep}** Sebeiyle 'AFK' moduna geçtiniz.`)
            .setColor('#00ff00')
            .setFooter('Dorsky Bot | Afk Sistemi')
            message.channel.send(afk)

            message.member.setNickname(`[AFK] ` + kisiisim);
        }
    } 

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['Afk','AFK'],
    permLevel: 0
}

exports.help = {
    name: 'afk'
}