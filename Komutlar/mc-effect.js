const Discord = require('discord.js');

const cevaplar = [

    "Hız 2!",

    "Hız 1!",

    "Acele 2!",

    "Dayanaklılık 3!",

    "Wither zehri!",

    "Zehir!",

    "Açlık!",

    "Zıplama arttırma!", 

    "Zıplama arttırma 2!", 

    "Suda nefes alma 2!", 

    "Yavaşlık 2!", 
  
     "Can arttırma 2!", 
      "Anında sağlık 2!", 
  "Şans!", 
  "Boş", 
  "Anında hasar!", 
];

exports.run = function(client, message, args) {

   

    var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)];

    message.inlineReply(cevap)

};  

exports.conf = {

  enabled: true, 

  guildOnly: true, 

  aliases: [],

  permLevel: 0 

};

exports.help = {

  name: 'mc-effect', 

  description: 'Bota soru sorarsınız',

  usage: 'sorusor <soru>'

};