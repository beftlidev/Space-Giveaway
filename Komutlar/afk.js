const Discord = require('discord.js');

const db = require('croxydb')

exports.run = async (client, message, args) => {


  let user = message.author

  let sebep = args.join(" ")

 let member = message.mentions.members.first()

  let isim = args.slice(1).join(" ")

  if (!sebep) return message.channel.send(`<:bakimda:798582408642560110> <@${user.id}> Afk olmak için bir sebep yazmalısın.`)

  

  db.set(`afk_${user.id}`, sebep)
 
   return message.channel.send(`<@${user.id}> Başarıyla afk moduna geçiş yaptın! <a:blobsipfast:816948014631485451> \n<:hediye:816947298247770154> Sebep: **__${sebep}__**`)


    
  
};

exports.conf = {

  enabled: true,

  guildOnly: true,

  aliases: [],

  permLevel: 0

}

exports.help = {

  name: 'afk',

  description: "AFK olmanızı sağlar.",

  usage: 'afk <sebep>'

} ///Cagin.