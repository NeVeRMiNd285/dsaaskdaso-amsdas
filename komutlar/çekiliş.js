const ms = require('ms');
const Discord = require("discord.js")
exports.run = async (client, message, args) => {

    if(!message.member.hasPermission('MANAGE_MESSAGES') && !message.member.roles.cache.some((r) => r.name === "Giveaways")){
        return message.channel.send(' Çekiliş başlatman için yeterli yetkin yok! gereken yetki; `Mesajları Yönet`.');
    }

    let giveawayChannel = message.mentions.channels.first();
    if(!giveawayChannel){
        return message.channel.send(' **Kanal seç!**');
    }

    let giveawayDuration = args[1];
    if(!giveawayDuration || isNaN(ms(giveawayDuration))){
        return message.channel.send(' **Süre belirt!**');
    }

    let giveawayNumberWinners = args[2];
    if(isNaN(giveawayNumberWinners)){
        return message.channel.send(' **Kaç kişi kazanıcak?**');
    }
  
  if(giveawayNumberWinners > 20){
    return message.channel.send(" **Çekiliş kazanan sayısı 20'den üstün olamaz!**")
  }
     let giveaway = 
    client.giveawaysManager.giveaways.find((g) => g.prize === args.join(' ')) ||
    client.giveawaysManager.giveaways.find((g) => g.messageID === args[0]);
  

    let giveawayPrize = args.slice(3).join(' ');
    if(!giveawayPrize){
        return message.channel.send(' **Ödülü ne olucak?**');
    }

 client.giveawaysManager.start(giveawayChannel, {
      time: ms(giveawayDuration),
			prize: giveawayPrize,
			winnerCount: giveawayNumberWinners,
			hostedBy: message.author,
			messages: {
				giveaway:"<a:cekilis:833705055776538675> **Çekiliş başladı.** <a:cekilis:833705055776538675>",
				giveawayEnded: "<a:cekilis:833705055776538675> **Çekiliş bitti.** <a:cekilis:833705055776538675>",
				timeRemaining: "Kalan süre: **{duration}**!",
				inviteToParticipate: "Çekilişe katılmak için <a:cekilis:833705055776538675> emojisine tıklayın!",
				winMessage: ` Tebrikler {winners}!, **{prize}** adlı çekilişi kazandın!`,
				embedFooter: "Çekiliş",
				noWinner: " Çekiliş iptal edildi. Yeterli katılım yok.",
				hostedBy: "{user} tarafından",
				winners: "kazanan",
				endedAt: "Bittiği zaman",
				units: {
					seconds: "saniye",
					minutes: "dakika",
					hours: "saat",
					days: "gün",
					pluralS: false
				}
			}
		});

    message.channel.send(new Discord.MessageEmbed().addField("Başarılı", ` Çekiliş ${giveawayChannel} adlı kanalda başlatıldı!`).setColor("RANDOM"));

};

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: [],
	permLevel: 0
}

exports.help = {
	name: 'çekiliş',
	description: 'Bota istediğiniz bir şeyi yazdırırsınız.',
	usage: 'çekiliş'
}