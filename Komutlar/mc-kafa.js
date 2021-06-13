const Discord = require(`discord.js`);

 

exports.run = (client, message, args) => {

 let oyuncu = args.slice(0).join(' ');

 let member = message.mentions.members.first();

 let body = 'https://www.mc-heads.net/head/' + oyuncu

 if (oyuncu.length < 1) return message.inlineReply('<:bakimda:798582408642560110> Bir oyuncu adı belirtmelisin.');

 if (oyuncu == member) {

    message.inlineReply('<:bakimda:798582408642560110> Kullanıcı değil, bir oyuncu adı belirtmelisin')

 } else {

 const mcbody = new Discord.MessageEmbed()

   .setColor('#ffa200')

   .setTitle('<a:bytcec:818712678146113567> Oyuncu: ' + oyuncu)

 .setDescription(`Oyuncunun Mc Kafası`)

   .setImage(body)

 message.channel.send(mcbody);

 }

};

 

exports.conf = {

 enabled: true,

 guildOnly: false,

 aliases: ['mcskin'],

 permLevel: 0

};

 

exports.help = {

 name: 'mc-kafa',

 description: 'Oyuncunun SİKİNİ Gösterir',

 usage: 'mcbody <oyuncu>'

};