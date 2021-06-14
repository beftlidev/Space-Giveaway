const Discord = require("discord.js")
const { MessageButton } = require("discord-buttons") 
const db = require("croxydb") 
exports.run = async (client, message, args) => {
  let yapayzeka = db.fetch(`yapayzekakanal_${message.guild.id}`) 
  let saas = db.fetch(`saas_${message.guild.id}`) 
  let saase = db.fetch(`saase_${message.guild.id}`) 
  let saasm = db.fetch(`saasm_${message.guild.id}`) 
 let ayar = new MessageButton()
    .setLabel("Yardım için (g.yardım)")
    .setID("ayar")
    .setStyle("green");
  
  const embed = new Discord.MessageEmbed() 
  .setTitle("<:709420387204857869:803719494715310100> Ayarlar Menüsü")
  .setDescription(`<:codesty_join:844468549417697350> Yapay Zeka: ${yapayzeka || "<:bakimda:798582408642560110> Kapalı!"}
<:codesty_join:844468549417697350> Sa As: ${saas || "<:bakimda:798582408642560110> Kapalı!"}
<:codesty_join:844468549417697350> Sa As Emoji: ${saase || "<:bakimda:798582408642560110> Kapalı!"}
<:codesty_join:844468549417697350> Sa As Mesaj: ${saasm || "<:bakimda:798582408642560110> Özelliştirilmemiş!"} 
`) 
  
.setColor("GREEN") 
 .setTimestamp() 
 message.channel.send({
  embed: embed, 
  buttons: [ayar]
 }) 
 } 
exports.conf = {
  aliases: [] 
 } 
exports.help = {
  name: "ayarlar" 
 } 