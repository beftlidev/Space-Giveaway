const Discord = require("discord.js") 
const bettercord = require("bettercord") 
exports.run = async (client, message, args) => {
  let avatar = message.author.displayAvatarURL({

      dynamic: false,

      format: "png",

    });

    bettercord.triggered(client, avatar, message.channel.id);

 
 }
exports.conf = {
  aliases: [] 
 } 
exports.help = {
  name: "triggered" 
 } 