const Discord = require('discord.js');
const db = require("quick.db")

exports.run = async(client, message, args) => {


let pingmesaj;
let pingdurum;

let mesaj;
  let mesajdurum;
if(Date.now() - message.createdAt < 100){
mesaj = "<a:dnd:833683277805387776>"
mesajdurum = "#ff0000"
}
if(Date.now() - message.createdAt < 60){
mesaj = "<a:idle:833683963461107793>"
mesajdurum = "#ffff00"
}
if(Date.now() - message.createdAt < 30){
mesaj = "<:online:832639768525144124> "
mesajdurum = "#66ff00"
}
if(Date.now() - message.createdAt > 100){
mesaj = "<a:dnd:833683277805387776>"
mesajdurum = "#ff0000"
}

if(Date.now() - message.createdAt > 60){
mesaj = "<a:idle:833683963461107793>"
mesajdurum = "#ffff00"
}
if(Date.now() - message.createdAt > 150){
mesaj = "<a:3359_dnd:808663428751294506>"
mesajdurum = "#ff0000"
}
if(Date.now() - message.createdAt > 250){
mesaj = "<a:dnd:833683277805387776>"
mesajdurum = "#ff0000"
}
if(Date.now() - message.createdAt > 500){
mesaj = ":white_circle: "
mesajdurum = "#66ff00"
}
if(Date.now() - message.createdAt > 1000){
mesaj = ":white_circle: "
mesajdurum = "#66ff00"
}
if(client.ws.ping < 100){
pingmesaj = "<a:dnd:833683277805387776>"
pingdurum = "#ff0000"
}
if(client.ws.ping < 60){
pingmesaj = "<a:idle:833683963461107793>"
pingdurum = "#ffff00"
}
if(client.ws.ping < 30){
pingmesaj = "<:online:832639768525144124>"
pingdurum = "#66ff00"
}
if(client.ws.ping > 100){
pingmesaj = "<:online:832639768525144124>"
pingdurum = "#ff0000"
}

if(client.ws.ping > 60){
pingmesaj = "<a:idle:833683963461107793>"
pingdurum = "#ffff00"
}
if(client.ws.ping > 150){
pingmesaj = "<a:dnd:833683277805387776>"
pingdurum = "#ff0000"
}
if(client.ws.ping > 250){
pingmesaj = "<a:dnd:833683277805387776>"
pingdurum = "#ff0000"
}
if(client.ws.ping > 500){
pingmesaj = ":white_circle: "
pingdurum = "#66ff00"
}
if(client.ws.ping > 1000){
pingmesaj = ":white_circle: "
pingdurum = "#66ff00"
}
const doruk = new Discord.MessageEmbed()
.setDescription(`<a:yr_discord:810222783640502323> Gecikme: **${client.ws.ping+ "ms"}** ${pingmesaj}\n\n<a:kedi:833018824772026389> Mesaj Gecikmesi: **${(Date.now() - message.createdAt)+ "ms"}** ${mesaj}`)
.setColor(pingdurum)
   .setFooter(
      `${message.author.tag} Tarafından İstendi.`,
      message.author.displayAvatarURL({ dynamic: true })
    );
message.channel.send(doruk)

}


  

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["Ping"],
      kategori: "Bot",
  permLevel: 0
};

exports.help = {
  name: 'ping',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};