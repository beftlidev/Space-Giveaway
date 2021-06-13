const Discord = require("discord.js") 
const bettercord = require("bettercord") 
exports.run = async (client, message, args) => {
  let kullanıcı = message.mentions.users.first();

    if (!kullanıcı) return message.inlineReply("<:bakimda:798582408642560110> Birini Etiketle!");

    let avatar2 = kullanıcı.displayAvatarURL({ dynamic: false, format: "png" });

    let avatar1 = message.author.displayAvatarURL({

      dynamic: false,

      format: "png",

    });

    bettercord.batslap(client, avatar1, avatar2, message.channel.id);

 
 } 
exports.conf = {
  aliases: [] 
 } 
exports.help = {
  name: "batslap" 
 } 