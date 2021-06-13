const Discord = require("discord.js") 
const bettercord = require("bettercord") 
exports.run = async (client, message, args) => {
  let kullanıcı = message.mentions.users.first();

    if (!kullanıcı) return message.inlineReply("<:bakimda:798582408642560110> Birini Etiketle!");

    let avatar = kullanıcı.displayAvatarURL({ dynamic: false, format: "png" });

    bettercord.trash(client, avatar, message.channel.id);

 
 } 
exports.conf = {
  aliases: [] 
 } 
exports.help = {
  name: "trash" 
 } 