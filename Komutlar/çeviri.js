const Discord = require('discord.js');

const { translate } = require('bing-translate-api');

exports.run = async (client, message, args) => {

  let dil = args[0]

  if(!dil) return message.inlineReply('<:bakimda:798582408642560110> Lütfen çevrilecek dili belirtin!')

  let engin = args.slice(1).join(' ')

  if(!engin) return message.inlineReply(`<:bakimda:798582408642560110> Lütfen ${dil} çevrilecek kelimeyi giriniz`) 

 let res = translate(engin, null, dil).catch(err => {message.inlineReply(`Dili bulamadım! \n \n ${err}`);});

 let kelime = await (await res).text
 let çeviri = await (await res).translation
 let yenidil = await (await res).language.to

 const embed = new Discord.MessageEmbed()

 .setTitle(engin + " çevirisi")

.addField("Metin", kelime) 
.addField("Çeviri", çeviri) 
.addField("Yeni Dil", yenidil) 
.setColor("RANDOM") 

 .setFooter('Space Giveaway')

 return message.channel.send(embed).catch(err => {message.inlineReply(`Kelimeyi çeviremedim \n \n ${err}`);});

 

}

exports.conf = {

  enabled: true,

  guildOnly: false,
  aliases: [],

  permLevel: 0

};

exports.help = {

  name: 'çevir'

};