const ms = require('ms');
exports.run = (client, message, args) => {
if(!message.member.hasPermission('MANAGE_MESSAGES')){
        return message.channel.send(' Yetersiz yetki! gereken yetki; `MESAJLARI YÖNET`.');
    }

    let messageID = args[0];
    if(!messageID){
        return message.channel.send(' Bir mesaj IDsi belirtmelisin!');
    }

    try {
        client.giveawaysManager.reroll(messageID);
        message.channel.send(' Çekiliş yeniden çekildi!');
    } catch (error) {
        if(error.startsWith(` ${messageID} IDsi ile başlayan bir çekiliş bulunamadı!.`)){
            message.channel.send(" "+messageID + " IDsi ile başlayan bir çekiliş bulunamadı!");
        }
        if(error.startsWith(` ${messageID} IDsi ile başlayan çekiliş bitmemiş!.`)){
            message.channel.send('Bu çekiliş bitmemiş!');
        }
    }
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["yeniden"],
  permLevel: 0
}

exports.help = {
  name: "reroll",
  description: "reroll",
  usage: "w!reroll"
}