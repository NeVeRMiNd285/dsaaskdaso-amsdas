const db = require('quick.db')
const fs = require('fs')
const Discord = require('discord.js')
const client = new Discord.Client();
exports.run = async (client, message, args) => {
  if(message.author.id !== "718528038916063242") return message.channel.send("Bu Sahibimin Komutu!");
  
  let user = client.users.cache.get(args.slice(0).join(' '));
  let nesne = args[0]
  if (!nesne) return message.channel.send('ID belirt!')
  
  db.set(`üyelikk_${nesne}`, 'üyelik')
  
  message.channel.send(`<a:alkis:830883331113353236> <@${nesne}> **adlı kişinin gold üyeliğini başarıyla aktif ettim!**`)
if (client.users.cache.get(''+nesne+'').send(`<a:alkis:830883331113353236> \`Gold üyeliğiniz aktif edildi.\` <a:elmas:830806713447350302> `)){
 
} else return
  
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['goldekle'],
  permLevel: 0
};
exports.help = {
  name: 'goldüyeekle',
  description: 'Gold üye ekler',
  usage: 'gold-üye-ekle'
};