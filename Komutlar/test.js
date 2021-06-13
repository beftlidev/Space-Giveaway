const Discord = require("discord.js");

module.exports.run = async (Octopus, message, args) => {

  let msg = await message.channel.send("Test Ediliyor. <a:bytcec:818712678146113567>");

  let msg1 = await message.channel.send("Test Ediliyor.. <a:bytcec:818712678146113567>");

  let msg2 = await message.channel.send("Test Ediliyor... <a:bytcec:818712678146113567>");

  let cmf = new Discord.MessageEmbed()

  .setColor("0xe2ff00")

  .setDescription("Test Başarılı. Bot Çevrimiçi. <a:nrp:821434879539281931>")

  message.channel.send(cmf);

};

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: [],

  permLevel: 0

};

exports.help = {

  name: 'test'

};