const fs = require("fs");
const Discord = require("discord.js");
const http = require("http");
const client = new Discord.Client();
const db = require("quick.db");
const chalk = require("chalk");
require('./util/eventLoader.js')(client);
const moment = require("moment");
const fetch = require('node-fetch');
const ayarlar = require("./ayarlar.json");
var prefix = ayarlar.prefix;

const log = message => {
    console.log(`${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
    if (err) console.error(err);
    log(`${files.length} komut yüklenecek.`);
    files.forEach(f => {
        let props = require(`./komutlar/${f}`);
        log(`Yüklenen komut: ${props.help.name}.`);
        client.commands.set(props.help.name, props);
        props.conf.aliases.forEach(alias => { 
            client.aliases.set(alias, props.help.name);
        });
    });
});




client.reload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.load = command => {
    return new Promise((resolve, reject) => {
        try {
            let cmd = require(`./komutlar/${command}`);
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};




client.unload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};



client.on('message', msg => {
  if (msg.content === '.eval') {
    if (!["789164345585565706"].includes(message.author.id))//eval kullanack kişilerin id'lerini girin
                return message.reply("`code` komutunu kullanmak için gerekli izne sahip değilsiniz!").catch();
    let result = eval(args.join(" "))
message.channel.send(result)
  }
});


client.elevation = message => {
    if (!message.guild) {
        return;
    }
    let permlvl = 0;
    if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
    if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
    if (message.author.id === ayarlar.sahip) permlvl = 4;
    return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on('warn', e => {
    console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
    console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

///////////////////////////////KOMUTLAR/////////////////////////////

//---------------------------------|Oto Cevap Sistemi Başlangıç|---------------------------------\\
client.on("message", async message => {
  if (message.author.bot) return;
   let yazılar = db.fetch(`${message.guild.id}.otocevap.yazılar`)
   let cevaplar = db.fetch(`${message.guild.id}.otocevap.cevaplar`)
  var efe = ""
  let sunucuadı = message.guild.name
  let üyesayı = message.guild.members.cache.size
  let roller =  message.guild.roles.cache.map(role => role.name).join(", ")
  let sunucuid = message.guild.id
  let sunucubolge = message.guild.region
  let olusturulma = message.guild.createdAt
      for (var i = 0; i < (db.fetch(`${message.guild.id}.otocevap.yazılar`) ? db.fetch(`${message.guild.id}.otocevap.yazılar`).length : 0); i++) {
    if (message.content.toLowerCase() == yazılar[i].toLowerCase()) {
        efe += `${cevaplar[i]
          .replace("{sunucuadı}", `${sunucuadı}`)
          .replace("{üyesayı}", `${üyesayı}`)
          .replace("{roller}", `${roller}`)
          .replace("{sunucuid}", `${sunucuid}`)
          .replace("{sunucubölge}", `${sunucubolge}`)
          .replace("{sunucutarih}", `${olusturulma}`)}`
          var embed = new Discord.MessageEmbed()
          .setDescription(`${efe}`)
          return message.channel.send({embed: embed})
          }
      }
    })
//---------------------------------|Oto Cevap Sistemi Son|---------------------------------\\


/// modlog sistemi

client.on("messageDelete", async (message) => {

  if (message.author.bot || message.channel.type == "dm") return;

  let log = message.guild.channels.cache.get(await db.fetch(`log_${message.guild.id}`));

  if (!log) return;

  const embed = new Discord.MessageEmbed()

    .setTitle(message.author.username + " | Mesaj Silindi")

    .addField("Kullanıcı: ", message.author)

    .addField("Kanal: ", message.channel)

    .addField("Mesaj: ", "" + message.content + "")

  log.send(embed)

})

client.on("messageUpdate", async (oldMessage, newMessage) => {

  let modlog = await db.fetch(`log_${oldMessage.guild.id}`);

  if (!modlog) return;

  let embed = new Discord.MessageEmbed()

  .setAuthor(oldMessage.author.username, oldMessage.author.avatarURL())

  .addField("**Eylem:**", "Mesaj Düzenleme")

  .addField("**Mesajın sahibi:**", `<@${oldMessage.author.id}> === **${oldMessage.author.id}**`)

  .addField("**Eski Mesajı:**", `${oldMessage.content}`)

  .addField("**Yeni Mesajı:**", `${newMessage.content}`)

  .setTimestamp()

  .setColor(0x36393F)

  .setFooter(`Sunucu: ${oldMessage.guild.name} - ${oldMessage.guild.id}`, oldMessage.guild.iconURL())

  .setThumbnail(oldMessage.guild.iconURL)

  client.channels.cache.get(modlog).send(embed)

});

client.on("channelCreate", async(channel) => {

  let modlog = await db.fetch(`log_${channel.guild.id}`);

    if (!modlog) return;

    const entry = await channel.guild.fetchAuditLogs({type: 'CHANNEL_CREATE'}).then(audit => audit.entries.first());

    let kanal;

    if (channel.type === "text") kanal = `<#${channel.id}>`

    if (channel.type === "voice") kanal = `\`${channel.name}\``

    let embed = new Discord.MessageEmbed()

    .setAuthor(entry.executor.username, entry.executor.avatarURL())

    .addField("**Eylem:**", "Kanal Oluşturma")

    .addField("**Kanalı Oluşturan Kişi:**", `<@${entry.executor.id}>`)

    .addField("**Oluşturduğu Kanal:**", `${kanal}`)

    .setTimestamp()

    .setColor(0x36393F)

    .setFooter(`Sunucu: ${channel.guild.name} - ${channel.guild.id}`, channel.guild.iconURL())

    .setThumbnail(channel.guild.iconUR)

    client.channels.cache.get(modlog).send(embed)

    })

client.on("channelDelete", async(channel) => {

  let modlog = await db.fetch(`log_${channel.guild.id}`);

    if (!modlog) return;

    const entry = await channel.guild.fetchAuditLogs({type: 'CHANNEL_DELETE'}).then(audit => audit.entries.first());

    let embed = new Discord.MessageEmbed()

    .setAuthor(entry.executor.username, entry.executor.avatarURL())

    .addField("**Eylem:**", "Kanal Silme")

    .addField("**Kanalı Silen Kişi:**", `<@${entry.executor.id}>`)

    .addField("**Silinen Kanal:**", `\`${channel.name}\``)

    .setTimestamp()

    .setColor(0x36393F)

    .setFooter(`Sunucu: ${channel.guild.name} - ${channel.guild.id}`, channel.guild.iconURL())

    .setThumbnail(channel.guild.iconURL)

    client.channels.cache.get(modlog).send(embed)

    })

client.on("roleCreate", async(role) => {

let modlog = await db.fetch(`log_${role.guild.id}`);

if (!modlog) return;

const entry = await role.guild.fetchAuditLogs({type: 'ROLE_CREATE'}).then(audit => audit.entries.first());

let embed = new Discord.MessageEmbed()

.setAuthor(entry.executor.username, entry.executor.avatarURL())

.addField("**Eylem:**", "Rol Oluşturma")

.addField("**Rolü oluşturan kişi:**", `<@${entry.executor.id}>`)

.addField("**Oluşturulan rol:**", `\`${role.name}\` **=** \`${role.id}\``)

.setTimestamp()

.setFooter(`Sunucu: ${role.guild.name} - ${role.guild.id}`, role.guild.iconURL)

.setColor(0x36393F)

.setThumbnail(role.guild.iconURL)

client.channels.cache.get(modlog).send(embed)

})

client.on("roleDelete", async(role) => {

let modlog = await db.fetch(`log_${role.guild.id}`);

if (!modlog) return;

const entry = await role.guild.fetchAuditLogs({type: 'ROLE_DELETE'}).then(audit => audit.entries.first());

let embed = new Discord.MessageEmbed()

.setAuthor(entry.executor.username, entry.executor.avatarURL())

.addField("**Eylem:**", "Rol Silme")

.addField("**Rolü silen kişi:**", `<@${entry.executor.id}>`)

.addField("**Silinen rol:**", `\`${role.name}\` **=** \`${role.id}\``)

.setTimestamp()

.setFooter(`Sunucu: ${role.guild.name} - ${role.guild.id}`, role.guild.iconURL)

.setColor(0x36393F)

.setThumbnail(role.guild.iconURL)

client.channels.cache.get(modlog).send(embed)

})

client.on("emojiCreate", async(emoji) => {

let modlog = await db.fetch(`log_${emoji.guild.id}`);

if (!modlog) return;

const entry = await emoji.guild.fetchAuditLogs({type: 'EMOJI_CREATE'}).then(audit => audit.entries.first());

let embed = new Discord.MessageEmbed()

.setAuthor(entry.executor.username, entry.executor.avatarURL())

.addField("**Eylem:**", "Emoji Oluşturma")

.addField("**Emojiyi oluşturan kişi:**", `<@${entry.executor.id}>`)

.addField("**Oluşturulan emoji:**", `${emoji} - İsmi: \`${emoji.name}\``)

.setTimestamp()

.setColor(0x36393F)

.setFooter(`Sunucu: ${emoji.guild.name} - ${emoji.guild.id}`, emoji.guild.iconURL)

.setThumbnail(emoji.guild.iconURL)

client.channels.cache.get(modlog).send(embed)

})

client.on("emojiDelete", async(emoji) => {

let modlog = await db.fetch(`log_${emoji.guild.id}`);

if (!modlog) return;

const entry = await emoji.guild.fetchAuditLogs({type: 'EMOJI_DELETE'}).then(audit => audit.entries.first());

let embed = new Discord.MessageEmbed()

.setAuthor(entry.executor.username, entry.executor.avatarURL())

.addField("**Eylem:**", "Emoji Silme")

.addField("**Emojiyi silen kişi:**", `<@${entry.executor.id}>`)

.addField("**Silinen emoji:**", `${emoji}`)

.setTimestamp()

.setFooter(`Sunucu: ${emoji.guild.name} - ${emoji.guild.id}`, emoji.guild.iconURL)

.setColor(0x36393F)

.setThumbnail(emoji.guild.iconURL)

client.channels.cache.get(modlog).send(embed)

})

client.on("emojiUpdate", async(oldEmoji, newEmoji) => {

let modlog = await db.fetch(`log_${oldEmoji.guild.id}`);

if (!modlog) return;

const entry = await oldEmoji.guild.fetchAuditLogs({type: 'EMOJI_UPDATE'}).then(audit => audit.entries.first());

let embed = new Discord.MessageEmbed()

.setAuthor(entry.executor.username, entry.executor.avatarURL())

.addField("**Eylem:**", "Emoji Güncelleme")

.addField("**Emojiyi güncelleyen kişi:**", `<@${entry.executor.id}>`)

.addField("**Güncellenmeden önceki emoji:**", `${oldEmoji} - İsmi: \`${oldEmoji.name}\``)

.addField("**Güncellendikten sonraki emoji:**", `${newEmoji} - İsmi: \`${newEmoji.name}\``)

.setTimestamp()

.setColor(0x36393F)

.setFooter(`Sunucu: ${oldEmoji.guild.name} - ${oldEmoji.guild.id}`, oldEmoji.guild.iconURL)

.setThumbnail(oldEmoji.guild.iconURL)

client.channels.cache.get(modlog).send(embed)

})

client.on("guildBanAdd", async(guild, user) => {

let modlog = await db.fetch(`log_${guild.id}`);

if (!modlog) return;

const entry = await guild.fetchAuditLogs({type: "MEMBER_BAN_ADD"}).then(audit => audit.entries.first());

let embed = new Discord.MessageEmbed()

.setAuthor(entry.executor.username, entry.executor.avatarURL())

.addField("**Eylem:**", "Yasaklama")

.addField("**Kullanıcıyı yasaklayan yetkili:**", `<@${entry.executor.id}>`)

.addField("**Yasaklanan kullanıcı:**", `**${user.tag}** - ${user.id}`)

.addField("**Yasaklanma sebebi:**", `${entry.reason}`)

.setTimestamp()

.setColor(0x36393F)

.setFooter(`Sunucu: ${guild.name} - ${guild.id}`, guild.iconURL)

.setThumbnail(guild.iconURL)

client.channels.cache.get(modlog).send(embed)

})

client.on("guildBanRemove", async(guild, user) => {

let modlog = await db.fetch(`log_${guild.id}`);

if (!modlog) return;

const entry = await guild.fetchAuditLogs({type: "MEMBER_BAN_REMOVE"}).then(audit => audit.entries.first());

let embed = new Discord.MessageEmbed()

.setAuthor(entry.executor.username, entry.executor.avatarURL())

.addField("**Eylem:**", "Yasak kaldırma")

.addField("**Yasağı kaldıran yetkili:**", `<@${entry.executor.id}>`)

.addField("**Yasağı kaldırılan kullanıcı:**", `**${user.tag}** - ${user.id}`)

.setTimestamp()

.setColor(0x36393F)

.setFooter(`Sunucu: ${guild.name} - ${guild.id}`, guild.iconURL)

.setThumbnail(guild.iconURL)

client.channels.cache.get(modlog).send(embed)

})
// mod log son ///


//eklendim-atıldım
client.on("guildCreate", guild => {
let doruk = client.channels.cache.get("830808285522165771")
const dorsky = new Discord.MessageEmbed()

.setAuthor(`Sunucuya Eklendim`, client.user.avatarURL())
.setColor("GREEN")
.setThumbnail(client.user.avatarURL())
.addField(`Sunucu Adı`,guild.name)
.addField(`Sunucu ID`, guild.id, true)
.addField(`Kurucu`,guild.owner.user.tag, true)
.addField(`Kurucu ID`,guild.owner.user.id, true)
.addField(`Toplam Kullanıcı`,guild.memberCount, true)
.addField(`Toplam Kanal`,guild.channels.cache.size, true )
.setFooter(`©2021| Dorsky Bot`, client.user.avatarURL())

doruk.send(dorsky)

});

client.on("guildDelete", guild => {
let doruk = client.channels.cache.get("830808285522165771")
const dorsky = new Discord.MessageEmbed()

.setAuthor(`Sunucudan Atıldım`, client.user.avatarURL())
.setColor("GREEN")
.setThumbnail(guild.iconURL())
.addField(`Sunucu Adı`,guild.name)
.addField(`Sunucu ID`, guild.id, true)
.addField(`Kurucu`,guild.owner.user.tag, true)
.addField(`Kurucu ID`,guild.owner.user.id, true)
.addField(`Toplam Kullanıcı`,guild.memberCount, true)
.addField(`Toplam Kanal`,guild.channels.cache.size, true )
.setFooter(`©2021 | Dorsky Bot`, client.user.avatarURL())

doruk.send(dorsky)
});
//eklendim-atıldım

// çekiliş sistemi

const { GiveawaysManager } = require('discord-giveaways');
client.giveawaysManager = new GiveawaysManager(client, {
    storage: "./giveaways.json",
    updateCountdownEvery: 5000,
    default: {
        botsCanWin: false,
        exemptPermissions: [ "MANAGE_MESSAGES", "ADMINISTRATOR" ],
        embedColor: "#FF0000",
        reaction: "<a:cekilis:833705055776538675>"
    }
});

//çekiliş

//oto-rol
client.on("guildMemberAdd", member => {
  let rol = db.fetch(`autoRole_${member.guild.id}`);
if (!rol) return;
  let kanal = db.fetch(`autoRoleChannel_${member.guild.id}`);
  if (!kanal) return;

  member.roles.add(member.guild.roles.cache.get(rol));
  let embed = new Discord.MessageEmbed()
    .setDescription(
      "> <a:onay:831165483029102592> **Sunucuya yeni katılan** **" +
        member.user.username +
        "** **Kullanıcısına** <@&" +
        rol +
"> **Rolü verildi**"
    )
    .setColor("RANDOM");
  member.guild.channels.cache.get(kanal).send(embed);
});
//oto-rol

//ever-here-engel
//-------------------- Ever Here Engel --------------------//

client.on("message", async msg => {
  let hereengelle = await db.fetch(`hereengel_${msg.guild.id}`);
  if (hereengelle == "acik") {
    const here = ["@here", "@everyone"];
    if (here.some(word => msg.content.toLowerCase().includes(word))) {
      if (!msg.member.hasPermission("ADMINISTRATOR")) {
        msg.delete();
        msg.channel
          .send(`<@${msg.author.id}>`)
          .then(message => message.delete());
        var doruk = new Discord.MessageEmbed()
          .setColor("BLACK")
          .setDescription(`**Bu Sunucuda Everyone ve Here Yasak!**`);
        msg.channel.send(doruk);
      }
    }
  } else if (hereengelle == "kapali") {
  }
});

//-------------------- Ever Here Engel Son --------------------//
//ever-here-engel

//sayaç//
client.on("guildMemberAdd", async member => {
  let sayac = await db.fetch(`sayac_${member.guild.id}`);
  let skanal = await db.fetch(`sayacK_${member.guild.id}`);
  if (!sayac) return;
  if (member.guild.memberCount >= sayac) {
    member.guild.channels.cache
      .get(skanal)
      .send(
        `<a:giris:819241987261464617> **${
          member.user.tag
        }** sunucuya **katıldı**! \`${db.fetch(
          `sayac_${member.guild.id}`
        )}\` kişi olduk! :RainbowiekGif: Sayaç sıfırlandı.`
);
   db.delete(`sayac_${member.guild.id}`);
    db.delete(`sayacK_${member.guild.id}`);
    return;
  } else {
    member.guild.channels.cache
      .get(skanal)
      .send(
        `<a:giris:819241987261464617> **${
          member.user.tag
        }** sunucuya **katıldı**! \`${db.fetch(
          `sayac_${member.guild.id}`
        )}\` üye olmamıza son \`${db.fetch(`sayac_${member.guild.id}`) -
          member.guild.memberCount}\` üye kaldı! Sunucumuz şuanda \`${
          member.guild.memberCount
        }\` kişi!`
);
}
});


client.on("guildMemberRemove", async member => {
  let sayac = await db.fetch(`sayac_${member.guild.id}`);
  let skanal = await db.fetch(`sayacK_${member.guild.id}`);
  if (!sayac) return;
  member.guild.channels.cache
    .get(skanal)
    .send(
      `<a:think:831166721229586482> **${
        member.user.tag
      }** sunucudan **ayrıldı**! \`${db.fetch(
        `sayac_${member.guild.id}`
      )}\` üye olmamıza son \`${db.fetch(`sayac_${member.guild.id}`) -
        member.guild.memberCount}\` üye kaldı! Sunucumuz şuanda \`${
        member.guild.memberCount
      }\` kişi!`
);
});
//sayaç//

//---------------------------------|Capslock-Engelle Başlangıç|---------------------------------\\
client.on("message", async msg => {
  var replace = await db.fetch(`capslockengl_${msg.guild.id}`);
  if (replace == "acik") {
    if (msg.channel.type === "dm") return;
    if (msg.author.bot) return;
    if (msg.content.length > 4) {
      if (db.fetch(`capslock_${msg.guild.id}`)) {
        let caps = msg.content.toUpperCase();
        if (msg.content == caps) {
          if (!msg.member.hasPermission("ADMINISTRATOR")) {
            if (!msg.mentions.users.first()) {
              msg.delete({ timeout: 1 });
              return msg
                .reply(
                  `<a:siren:807285996580110346> **Bu sunucuda, büyük harf kullanımı engellenmekte!**`
                )
                .then(msg => msg.delete({ timeout: 1500 }));

              msg.delete(3000);
            }
          }
        }
      }
    } else if (replace == "kapali") {
    }
    if (!replace) return;
  }
});
//---------------------------------|CapsLock-Engelle Son|---------------------------------\\

//bot//
client.on('message', async (msg, member, guild) => {
  let i = await  db.fetch(`31sj_${msg.guild.id}`)
        if (msg.content.toLowerCase() === 'bot') {
        msg.reply('**Beni Çağırmışsın Atımla Geliyorum! <a:at:832626077850796042>**');      
      } 
      }
    ); 
//bot//

//dorsky/
client.on('message', async (msg, member, guild) => {
  let i = await  db.fetch(`31sj_${msg.guild.id}`)
        if (msg.content.toLowerCase() === 'dorsky') {
        msg.reply('**Meyabaa sanırım bana seslendin dostum prefixim d! <a:slk:830538658741747742>**');      
      } 
      }
    ); 
//dorsky//


//dorsky/
client.on('message', async (msg, member, guild) => {
  let i = await  db.fetch(`31sj_${msg.guild.id}`)
        if (msg.content.toLowerCase() === 'dorsky bot') {
        msg.reply('**Meyabaa sanırım bana seslendin dostum prefixim d! <a:slk:830538658741747742>**');      
      } 
      }
    ); 
//dorsky//

///////////
client.on("message" , message => {
  if(!message.guild) return;
  if(message.content.startsWith(ayarlar.prefix + 'afk')) return;

  let codemarefiafk = message.mentions.users.first()
  let codemarefikisi = db.fetch(`kisiid_${message.author.id}_${message.guild.id}`)
  let codemarefikisiisim = db.fetch(`kisiisim_${message.author.id}_${message.guild.id}`)

  if(codemarefiafk){
    let cmfsebep = db.fetch(`cmfsebep_${codemarefiafk.id}_${message.guild.id}`)
    let codemarefikisi2 = db.fetch(`kisiid_${codemarefiafk.id}_${message.guild.id}`)

    if(message.content.includes(codemarefikisi2)){
      const cmfbilgiafk = new Discord.MessageEmbed()
      .setDescription(`${message.author} - Etiketlemiş Olduğun <@!${codemarefikisi2}> Kişisi Şuan **${cmfsebep}** Sebebiyle AFK`)
      .setColor("#36393F")
      .setFooter('Dorsky Bot')
      message.channel.send(cmfbilgiafk)
    }
  }

  if(message.author.id === codemarefikisi){


    db.delete(`cmfsebep_${message.author.id}_${message.guild.id}`)
    db.delete(`kisiid_${message.author.id}_${message.guild.id}`)
    db.delete(`kisiisim_${message.author.id}_${message.guild.id}`)

    message.member.setNickname(codemarefikisiisim)

    const cmfbilgiafk = new Discord.MessageEmbed()
    .setAuthor(`Hoşgeldin ${message.author.username}`, message.author.avatarURL({dynamic: true, size: 2048}))
    .setDescription(`<@!${codemarefikisi}> Başarılı Bir Şekilde **AFK** Modundan Çıkış Yaptın.`)
    .setColor("#36393F")
    .setFooter('Dorsky Bot')
    message.channel.send(cmfbilgiafk)
  }  
})
////////////////////////////////////////////////////////////////////
client.on("message", async msg => {
  const i = await db.fetch(`ssaass_${msg.guild.id}`);
  if (i == "acik") {
    if (
      msg.content.toLowerCase() == "sa" ||
      msg.content.toLowerCase() == "s.a" ||
      msg.content.toLowerCase() == "selamun aleyküm" ||
      msg.content.toLowerCase() == "sea" ||
      msg.content.toLowerCase() == "selam"
    ) {
      try {
        return msg.reply(
          "**Aleyküm Selam, Kardeşim Hoşgeldin** <a:opucuk:831894450753503262>"
        );
      } catch (err) {
        console.log(err);
      }
    }
  } else if (i == "kapali") {
  }
  if (!i) return;
});

client.login(ayarlar.token);

//sunucu-sahibine-mesaj
client.on("guildCreate", async guild => {
  const doruk = [
    "**<a:kutlama:830883463455834162> Dorsky Bot sunucuna eklendi.Tebrikler dostum.",
    "<a:elmas:830806713447350302> Bu bot <@718528038916063242> tarafından geliştirilmektedir.",
    "<a:ayarlar:830883368962490368> Prefixim: d!",
    "<a:at:832626077850796042> d!yardım yazarak komutlarına erişebilirsin",
    "<a:hype2:810223233537933314> Destek Sunucum https://discord.gg/53C7T8AxWC ",
    '<a:nitro:830883436301778947> iyi günlerde kullan..**'
  ];
  guild.owner.send(doruk);
});
//sunucu-sahibine-mesaj

//sahip gelince msj atma//
client.on("guildMemberAdd", member => {
  if (member.id !== '718528038916063242') return;
  let channels = member.guild.channels.cache.filter(channel => channel.permissionsFor(client.user.id).has("SEND_MESSAGES") && channel.type === "text");
  if (!channels) return;
  let doruk = channels.random();
  doruk.send(`Açılın! Sahibim <@718528038916063242> sunucuya katıldı!`);
  member.send("Hoş geldin sahip!");
  return;
});
//sahip gelince mesaj atma//

//hesab-kontrol
client.on('guildMemberAdd', member => {
     let kanal = db.fetch(`güvenlik.${member.guild.id}`)
     if(!kanal) return;

       let aylar = {
               "01": "Ocak",
               "02": "Şubat",
               "03": "Mart",
               "04": "Nisan",
               "05": "Mayıs",
               "06": "Haziran",
               "07": "Temmuz",
               "08": "Ağustos",
               "09": "Eylül",
               "10": "Ekim",
               "11": "Kasım",
               "12": "Aralık"
    }

  let bitiş = member.user.createdAt
      let günü = moment(new Date(bitiş).toISOString()).format('DD')
      let ayı = moment(new Date(bitiş).toISOString()).format('MM').replace("01", "Ocak").replace("02","Şubat").replace("03","Mart").replace("04", "Nisan").replace("05", "Mayıs").replace("06", "Haziran").replace("07", "Temmuz").replace("08", "Ağustos").replace("09", "Eylül").replace("10","Ekim").replace("11","Kasım").replace("12","Aralık").replace("13","CodAre")//codare
     let yılı =  moment(new Date(bitiş).toISOString()).format('YYYY')
     let saati = moment(new Date(bitiş).toISOString()).format('HH:mm')

let günay = `${günü} ${ayı} ${yılı} ${saati}`  

      let süre = member.user.createdAt
      let gün = moment(new Date(süre).toISOString()).format('DD')
      let hafta = moment(new Date(süre).toISOString()).format('WW')
      let ay = moment(new Date(süre).toISOString()).format('MM')
      let ayy = moment(new Date(süre).toISOString()).format('MM')
      let yıl =  moment(new Date(süre).toISOString()).format('YYYY')
     let yıl2 = moment(new Date().toISOString()).format('YYYY')

     let netyıl = yıl2 - yıl

     let created = ` ${netyıl} yıl  ${ay} ay ${hafta} hafta ${gün} gün önce`

     let kontrol;
     if(süre < 1296000000) kontrol = 'Bu hesap şüpheli!'
     if(süre > 1296000000) kontrol = 'Bu hesap güvenli!'

     let codare = new Discord.MessageEmbed()
     .setColor('GREEN')
     .setTitle(`${member.user.username} Katıldı`)
     .setDescription('<@'+member.id+'> Bilgileri : \n\n  Hesap oluşturulma tarihi **[' + created + ']** (`' + günay + '`) \n\n Hesap durumu : **' + kontrol + '**')//codare
     .setTimestamp()
     client.channels.cache.get(kanal).send(codare)
})
//hesab-kontrol

client.on("message", async message => {
  let golduye = db.get(`üyelikk_${message.author.id}`)
  let dakika = 60
  let saat = db.get(`goldbelirdizaman_${message.author.id}_${message.guild.id}`)
  if(golduye){
      if(saat < Date.now()){
          message.reply("<a:wumpusk:833703936728891432> **Açılın GOLD üye belirdi!**")
          db.set(`goldbelirdizaman_${message.author.id}_${message.guild.id}`, Date.now()+(dakika*60000))
      }
   }
})

// gold hg bitiş

//-------------Bot Eklenince Bir Kanala Mesaj Gönderme Komutu ---------------\\

const doruk = new Discord.MessageEmbed()
  .setThumbnail()
  .setThumbnail(
    "https://cdn.discordapp.com/attachments/819232896841678890/826505235899875358/standard.gif"
  )
  .addField(
    `<:poncik:830883397282955334> Dorsky Botu Eklediğin İçin Teşekkürler`,
    `**Selamlar, Ben Dorsky (Dorsky Bot'un Geliştiricisi: ▄︻̷̿┻̿═━一 ʜᴇᴀᴅsʜᴏᴛ#5423) Öncelikle Botumuzu Eklediğiniz ve Bize Destek Olduğunuz İçin Sizlere Teşekkür Ediyorum.**`
  )
  .addField(
    `<:hawl:830806634259021874> Cyrex | Prefix`,
    `**Dorsky Botun Prefixi(ön eki) = \`d!**`
  )
  .addField(
    `<a:nitro:830883436301778947> Dorsky Bot | Nasıl Kullanılır?`,
    `**Dorsky botun tüm özelliklerinden yararlanabilmek için sadece \`d!gold-fiyat\` yazmanız yeterlidir.**`,
	`**Dorsky botun yardım menüsüne ulaşmak için \`d!yardım\` yazmanız yeterlidir.**`,
	`**Dorsky botun gold paketinin ne işe yaradığını öğrenmek için \`d!gold-bilgi\` yazmanız yeterlidir.**`
  )
  .addField(
    `<a:at:832626077850796042> Dorsky Bot | Linkler`,
    `**Herhangi Bir Kanala \`d!davet\` Yazmanız Yeterlidir**`
  )
  .setFooter(`Dorsky | Gelişmiş Türkçe Bir Bottur | 2021`)
  .setTimestamp();

client.on("guildCreate", guild => {
  let defaultChannel = "";
  guild.channels.cache.forEach(channel => {
    if (channel.type == "text" && defaultChannel == "") {
      if (channel.permissionsFor(guild.me).has("SEND_MESSAGES")) {
        defaultChannel = channel;
      }
    }
  });

  defaultChannel.send(doruk);
});

//----------------------------------------------------------------\\

