const Discord = require('discord.js');

const db = require("croxydb")

exports.run = async(client, message, args) => {

let pingmesaj;

let pingdurum;

let mesaj;

  let mesajdurum;

if(Date.now() - message.createdAt < 100){

mesaj = "<:dnd:799570784397950988>"

mesajdurum = "#ff0000"

}

if(Date.now() - message.createdAt < 60){

mesaj = "<:bosta:802459625331884032>"

mesajdurum = "#ffff00"

}

if(Date.now() - message.createdAt < 30){

mesaj = "<:online:799541183453855754>"

mesajdurum = "#66ff00"

}

if(Date.now() - message.createdAt > 100){

mesaj = "<:dnd:799570784397950988>"

mesajdurum = "#ff0000"

}

if(Date.now() - message.createdAt > 60){

mesaj = "<:bosta:802459625331884032>"

mesajdurum = "#ffff00"

}//ottamancode

if(Date.now() - message.createdAt > 150){

mesaj = "<:dnd:799570784397950988>"

mesajdurum = "#ff0000"

}

if(Date.now() - message.createdAt > 250){

mesaj = "<:dnd:799570784397950988>"

mesajdurum = "#ff0000"

}

if(Date.now() - message.createdAt > 500){

mesaj = "<:offline:802459975182974996>"

mesajdurum = "#66ff00"

}

if(Date.now() - message.createdAt > 1000){

mesaj = "<:offline:802459975182974996>"

mesajdurum = "#66ff00"

}

if(client.ws.ping < 100){

pingmesaj = "<:dnd:799570784397950988>"

pingdurum = "#ff0000"

}

if(client.ws.ping < 60){

pingmesaj = "<:online:799541183453855754>"

pingdurum = "#ffff00"

}

if(client.ws.ping < 30){

pingmesaj = "<:online:799541183453855754>"

pingdurum = "#66ff00"

}

if(client.ws.ping > 100){

pingmesaj = "<:dnd:799570784397950988>"

pingdurum = "#ff0000"

}

if(client.ws.ping > 60){

pingmesaj = "<:bosta:802459625331884032>"

pingdurum = "#ffff00"

}

if(client.ws.ping > 150){

pingmesaj = "<:dnd:799570784397950988>"

pingdurum = "#ff0000"

}

if(client.ws.ping > 250){

pingmesaj = "<:dnd:799570784397950988>"

pingdurum = "#ff0000"

}

if(client.ws.ping > 500){

pingmesaj = "<:offline:802459975182974996>"

pingdurum = "#66ff00"

}

if(client.ws.ping > 1000){

pingmesaj = "<:offline:802459975182974996>"

pingdurum = "#66ff00"

}

const ottamanembed = new Discord.MessageEmbed()

.setTitle('Ping')

.setDescription(`Gecikme: ${client.ws.ping+ "ms"} ${pingmesaj}\n\nMesaj Gecikmesi: ${(Date.now() - message.createdAt)+ "ms"} ${mesaj}`)

.setImage('https://s2.gifyu.com/images/standard14.gif')

.setColor(pingdurum)

.setFooter(`${message.author.username}`)

message.channel.send(ottamanembed)

}
  

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: ['botping','bot-ping'],

  permLevel: 0

};

exports.help = {

  name: 'ping',

};