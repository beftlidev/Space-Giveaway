const Discord = require('discord.js') 
exports.run = async (client, message) => {
  
     if(!message.member.permissions.has('MANAGE_MESSAGES')) {
    const embed = new Discord.MessageEmbed()
      .setDescription(`**Ne yazık ki bu komutu kullanmaya yetkin yok. <:bakimda:798582408642560110>**`)
    message.channel.send(embed);
    return;
  }

  const voiceChannel = message.member.voice.channel;

  if (!message.member.voice.channel) { return message.inlineReply("Bi ses kanalına katılmam lazım"); }

  message.member.voice.channel.leave();

  return message.inlineReply("Görüşürüz dostum kendine iyi bak ♥️");

};

exports.conf = {

  enabled: true,

  runIn: ["text"],

  aliases: ['katıl'],

  permLevel: 1,

  botPerms: [],

  requiredFuncs: [],

};

exports.help = {

  name: "çık",

  description: "Bulunduğunuz odaya giriş yapar",

  usage: "gir",

  usageDelim: "",

};