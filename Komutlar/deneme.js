const Discord = require('discord.js');

exports.run = async(client, message, args) => {

var sunucu = client.guilds.cache.get("752164000418234448")

var kişi = sunucu.member.cache.get(message.author.id)

if(!kişi) return message.channel.send("<:codesty_cross:844468546930606100> Bu Komudu kullanabilmek için premium üye olmanız gerekmektedir! \n<:codesty_support:844468556430704640> Detaylı bilgi için [Destek Sunucumuz](https://discord.gg/KZfAEjrPUF)")

  else {
    message.channel.send("Slm") 
   } 
};

exports.conf = {

aliases: []

};

exports.help = {

name: "osbir"

};