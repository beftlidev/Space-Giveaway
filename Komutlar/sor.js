const Discord = require('discord.js');

const cevaplar = [

    "Evet",

    "Hayır",

    "Belki",

    "Olabilir",

    "Daha sonra tekrar sor",

    "İmkansız",

    "Neden olmasın?",

    "Hmm", 

    "Cevap yok", 

    "Bana soru sorma!", 

    "Miyav", 
  
     "Asla", 
     "Uzak dur benden", 
  "Sal olum beni", 
  "Ben bir botum", 
  "Seni seviyorum", 
  "Seni Uğura şikayet edecem bekle sen", 
  "Uğur help me pls", 
  "Bekle sen Uğur gelecek", 
  "Selam tatlım görüşelimmi", 
  "Sen bir robotsun dünyayı istila etme pls", 
  "Sen sen olamaz...", 
  "Abi lütfen sal zaten milyon tane çekiliş taşıyorum", 
  "UwU", 
  ":3", 
  "OwO",
  "Muck muck",

];

exports.run = function(client, message, args) {

    var soru = args.join(' ');

    var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)];

    if(!soru) return message.inlineReply('Bir soru belirt! **Doğru Kullanım**: g+sor <soru>')

    else message.inlineReply(cevap)

};  

exports.conf = {

  enabled: true, 

  guildOnly: true, 

  aliases: [],

  permLevel: 0 

};

exports.help = {

  name: 'sor', 

  description: 'Bota soru sorarsınız',

  usage: 'sorusor <soru>'

};