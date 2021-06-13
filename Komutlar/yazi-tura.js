const Discord = require('discord.js');

var hd = [

    "Tura",

    "Yazı", 
  "Para düz durdu!", 

];

module.exports.run = async (bot, message, args) => {

  message.inlineReply(message.author.toString() + " Para Döndü: " + (hd[Math.floor(Math.random() * hd.length)]));

}

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: ["yazıtura"],

  permLevel: 0

};

exports.help = {

  name: 'yazıtura',

  description: 'Yazı Tura Oynamanıza Yarar.',

  usage: 'yazıtura'

};