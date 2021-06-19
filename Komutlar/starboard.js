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

db.set(`starboard_${message.guild.id}`, engin.id)

return message.inlineReply('<:calisiyor:798582407393312808> StarBoard sistemi açıldı!')

};

if(args[0] == "kapat") {

let engin = db.fetch(`starboard_${message.guild.id}`)

if(!engin) return message.channel.send('StarBoard sistemi aktif değil!')

db.delete(`starboard_${message.guild.id}`)

return message.inlineReply('<:calisiyor:798582407393312808> StarBoard sistemi kapatıldı!')

};

};

exports.conf = {

    aliases: [],

  };

  exports.help = {

    name: 'starboard' 

  }