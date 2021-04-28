const Discord = require('discord.js');
const data = require('quick.db');


exports.run = async (client, message, args) => {
if(message.author.id !== message.guild.owner.user.id) return message.channel.send(new Discord.MessageEmbed().setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://cdn.glitch.com/8e70d198-9ddc-40aa-b0c6-ccb4573f14a4%2F6499d2f1c46b106eed1e25892568aa55.png').setImage('https://cdn.glitch.com/0c8ef551-5187-48a8-9daf-f2cc35630f21%2Fyoneticigif.gif').setTitle('Bir hata oldu!').setDescription(`• \`${client.ayarlar.prefix}sunucu-kur\` **kullanmak için,** \`Sunucu Sahibi\` **olmanız gerekiyor.**`).addField('Sunucu Sahibi', message.guild.owner.user.tag).setImage('https://cdn.glitch.com/6f5bb25b-c11b-4003-8a39-69490341df18%2FScreenshot_1.png'));

message.channel.send(new Discord.MessageEmbed()
.setTitle('Youtube Altyapı İçin Çok İyi')
.setThumbnail('https://cdn.discordapp.com/attachments/819232896841678890/826505235899875358/standard.gif')
.setFooter(`Ping: ${client.ws.ping.toFixed(0)}`, client.user.avatarURL({dynamic: true}))
.setDescription(`${message.author} **Sunucunun** kurulmasını onaylıyor musun? 😇

**Dipnot:** Bazı kanllar silinmemiş gibi görünebilir. Discord dan çıkıp girin düzelir.`)).then(resulter => {
resulter.react('✅').then(() => resulter.react('❌'));

const yesFilter = (reaction, user) => { return reaction.emoji.name === '✅' && user.id === message.guild.owner.user.id; };
const yes = resulter.createReactionCollector(yesFilter, { time: 0 });
const noFilter = (reaction, user) => { return reaction.emoji.name === '❌' && user.id === message.guild.owner.user.id; };
const no = resulter.createReactionCollector(noFilter, { time: 0 });

yes.on('collect', async reaction => {
message.guild.roles.cache.filter(a => !a.managed && a.name !== '@everyone' && a.position < message.guild.members.cache.get(client.user.id).roles.highest.position).forEach(role => role.delete('ok boomer') && console.log(role.name+' silindi sqrt'));
message.guild.channels.cache.forEach(a => a.delete());

message.guild.roles.create({ data: { name: '🍁・HERKEZ Olmuş Kodır Xd' }, reason: 'ayn' }).then(role => {
role.setPermissions(['ADMINISTRATOR']);
role.setColor('#070719');
});
message.guild.roles.create({ data: { name: '📁・Project' }, reason: 'ayn' }).then(role => {
role.setPermissions(['ADMINISTRATOR']);
role.setColor('#3b0b0b');
});
message.guild.roles.create({ data: { name: '👑・Kurucu' }, reason: 'ayn' }).then(role => {
role.setPermissions(['ADMINISTRATOR']);
role.setColor('#3b0b0b');
});
message.guild.roles.create({ data: { name: '・・・・・・・・' }, reason: 'ayn' }).then(s => s.setColor('#ffffff'))
message.guild.roles.create({ data: { name: '🔱・Admin' }, reason: 'ayn' }).then(s => s.setColor('#2efef7'))
message.guild.roles.create({ data: { name: '⚡・Yönetim' }, reason: 'ayn' }).then(s => s.setColor('#f4fa58'))
message.guild.roles.create({ data: { name: '⚜️・Moderatör' }, reason: 'ayn' }).then(s => s.setColor('#955aab'))
message.guild.roles.create({ data: { name: '👽・Destek Ekibi' }, reason: 'ayn' }).then(s => s.setColor('#2e9afe'))
message.guild.roles.create({ data: { name: '🎬・Youtuber' }, reason: 'ayn' }).then(s => s.setColor('#00ff40'))
message.guild.roles.create({ data: { name: '💧・Üye' }, reason: 'ayn' }).then(s => s.setColor('#e77e2e'))
message.guild.roles.create({ data: { name: '🔔・Abone' }, reason: 'ayn' }).then(s => s.setColor('#955aab'))
  message.guild.roles.create({ data: { name: '・・・・・・・・' }, reason: 'ayn' }).then(s => s.setColor('#ffffff'))
message.guild.roles.create({ data: { name: '☔・Özel Üye' }, reason: 'ayn' }).then(s => s.setColor('#ffff00'))
message.guild.roles.create({ data: { name: '🤖・Bot' }, reason: 'ayn' }).then(s => s.setColor('#58fa58'))
message.guild.roles.create({ data: { name: '🎉・Booster' }, reason: 'ayn' }).then(s => s.setColor('#2e9afe'))
message.guild.roles.create({ data: { name: '📛・Cezalı' }, reason: 'ayn' }).then(s => s.setColor('#8000ff'))
message.guild.roles.create({ data: { name: '・・・・・・・・' }, reason: 'ayn' }).then(s => s.setColor('#ffffff'))

message.guild.channels.create('🔥・owner', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('rules', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('moderator-only', {type: 'text'}).then(c => c.setParent(parent.id));    

message.guild.channels.create('🌐・Bilgilendirme', {type: 'category'}).then(parent => {
message.guild.channels.create('📚・kurallar', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('🍭・boost', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('🍂・abone-rol', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('🔒・altyapılar', {type: 'text'}).then(c => c.setParent(parent.id)); 
});

message.guild.channels.create('💬・Genel Sohbet', {type: 'category'}).then(parent => {
message.guild.channels.create('💬・sohbet', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('🤖・bot-komut', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('📸・galeri', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('💰・owo-chat', {type: 'text'}).then(c => c.setParent(parent.id));  
});

message.guild.channels.create('📘・Genel Ses', {type: 'category'}).then(parent => {
message.guild.channels.create('🎉・Booster', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(20));
message.guild.channels.create('🔊・Sohbet', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(10));
message.guild.channels.create('🎶・Müzik', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(10));
message.guild.channels.create('💤・Afk', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(20));    
});

message.guild.channels.create('Sunucu Log', {type: 'category'}).then(parent => {
message.guild.channels.create('✅・botlist-kural', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('📥・giriş-çıkış', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('📮・sayaç', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('📬・davet-log', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('📊・level-log', {type: 'text'}).then(c => c.setParent(parent.id));  
});
  
message.guild.channels.create('🔭・Yetkili', {type: 'category'}).then(parent => {
message.guild.channels.create('📣・yetkili-duyuru', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('🗨・yetkili-chat', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('⚙・yetkili-komut', {type: 'text'}).then(c => c.setParent(parent.id));      
});

});

no.on('collect', async reaction => {
resulter.delete();
});

})


};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['sunucu-kur3'],
  permLevel: 0
}

exports.help = {
  name: 'sunucu-kur3'
};