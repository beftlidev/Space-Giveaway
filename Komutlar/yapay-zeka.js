const discord = require('discord.js');

const db = require("croxydb");

exports.run = async(client, message, args) => {

     if(!message.member.permissions.has('MANAGE_MESSAGES')) {

    const embed = new discord.MessageEmbed()

      .setDescription(`**Ne yazık ki bu komutu kullanmaya yetkin yok. <:bakimda:798582408642560110>**`)

    message.channel.send(embed);

    return;

  }
  
if(args[0] == "aç") {

let engin = message.mentions.channels.first()

if(!engin) return message.inlineReply('<:bakimda:798582408642560110> Lütfen yapay zeka kanalını belirt!')

db.set(`yapayzekakanal_${message.guild.id}`, engin.id)

db.set(`yapayzeka_${message.guild.id}`, 'aktif')

return message.inlineReply('<:calisiyor:798582407393312808> Yapay zeka sistemi açıldı!')

};

if(args[0] == "kapat") {

let engin = db.fetch(`yapayzeka_${message.guild.id}`)

if(!engin) return message.channel.send('Yapay zeka sistemi aktif değil!')

db.delete(`yapayzekakanal_${message.guild.id}`)

db.delete(`yapayzeka_${message.guild.id}`)

return message.inlineReply('<:calisiyor:798582407393312808> Yapay zeka sistemi kapatıldı!')

};

};

exports.conf = {

    enabled: true,

    guildOnly: false,

    aliases: [],

    permLevel: 0

  };

  

  exports.help = {

    name: 'yapay-zeka' 

  }