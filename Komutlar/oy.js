const Discord = require("discord.js");
const { MessageButton } = require("discord-buttons") 
const db = require("croxydb");

exports.run = async (client, message, args) => {

    const DBL = require('dblapi.js')

    let kullanıcı = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author
const dbl = new 

DBL("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc2NTIwNzI2ODQwODAzMzMyMiIsImJvdCI6dHJ1ZSwiaWF0IjoxNjE0MzY5NTkwfQ.WC8doV3KEhoWAInJEI4sOPMAJ-nDzWMfJgp8Tb0jqsI", client) 

dbl.hasVoted(kullanıcı.id).then(async voted => {

  let west;

  if(!voted) message.inlineReply("<:bakimda:798582408642560110> 12 Saat içinde Space Giveaway' a Oy vermemiş!") 
  else message.inlineReply("<a:check:844812514529509386> 12 Saat içinde Space Giveaway' a Oy Vermiş!") 

})

};

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: [],

  permLevel: 0

};

exports.help = {

  name: "oy-durum",

  usage: "oy-durum"

}; 