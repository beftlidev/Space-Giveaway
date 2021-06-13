const Discord = require('discord.js');

exports.run = async (client, message, args) => {

if(client.emojis.cache.size <= 0) return;

var i = [`<a:bytcec:818712678146113567> Sadece hareketsiz emojiler arasından rastgele emoji gönderebilirim. Örnek: \`g.emoji-rastgele ${[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25][Math.floor(Math.random() * 24)]} hareketsiz\``, `<a:bytcec:818712678146113567> Sadece hareketli emoji göndermemi sağlayabilirsin! Örnek: \`g.emoji-rastgele ${[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25][Math.floor(Math.random() * 24)]} hareketli\``, `<a:bytcec:818712678146113567> Tek seferde çok sayıda rastgele emoji gönderebilirim. Örnek: \`g.emoji-rastgele ${[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25][Math.floor(Math.random() * 24)]}\``]

if(!args[0]) {

message.inlineReply(`<a:bytcec:818712678146113567> **İpucu** — ${i[Math.floor(Math.random() * i.length)]}`);

const emojis = [];

for(var i = 0; i < [1, 2, 3][Math.floor(Math.random() * 2)]; i++) {

  emojis.push(client.emojis.cache.random().id);

};

return message.inlineReply(emojis.map(x => client.emojis.cache.get(x)).join(''));

} else {

if(args[0] > 25) return message.inlineReply("Tek seferde en fazla 25 rastgele emoji gönderebilirim.");

if(!args[1]) {

const emojis = [];

for(var i = 0; i < args[0]; i++) {

  emojis.push(client.emojis.cache.random().id);

};

return message.channel.send(emojis.map(x => client.emojis.cache.get(x)).join(''));

} else {

if(!['+h', '-h', 'hareketsiz', 'hareketli'].includes(args[1])) {

message.inlineReply(`<:codesty_image:844468551763230740> Emojileri hareketli mi hareketsiz mi istediğinizi anlayamadığım için istediğiniz sayıda karışık şekilde gönderiyorum.

Örnek kullanım: ${i.filter(a => !a.endsWith('-'))[Math.floor(Math.random() * i.length)].split('Örnek: ')[1]}`)

const emojis = [];

for(var i = 0; i < args[0]; i++) {

  emojis.push(client.emojis.cache.random().id);

};

return message.channel.send(emojis.map(x => client.emojis.cache.get(x)).join(''));

};

if(args[1] === '+h' || args[1] === 'hareketli') {

const emojis = [];

for(var i = 0; i < args[0]; i++) {

  emojis.push(client.emojis.cache.filter(a => a.animated).random().id);

};

return message.inlineReply(emojis.map(x => client.emojis.cache.get(x)).join(''));

};

if(args[1] === '-h' || args[1] === 'hareketsiz') {

const emojis = [];

for(var i = 0; i < args[0]; i++) {

  emojis.push(client.emojis.cache.filter(a => !a.animated).random().id);

};

return message.inlineReply(emojis.map(x => client.emojis.cache.get(x)).join(''));

};

};

};

}; 

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: [],

  permLevel: 0

};

 

exports.help = {

  name: 'emoji-rastgele',


};