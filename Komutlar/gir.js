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

  const permissions = message.member.voice.channel.permissionsFor(message.guild.me);

  if (permissions.has("CONNECT") === false) { return message.inlineReply("Odaya girmek için **Bağlan** yetkimin olması lazım"); }

  message.member.voice.channel.join();

  return message.inlineReply("Hey dost versene borç. O kadar yol geldim dostum :D");

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

  name: "gir",

  description: "Bulunduğunuz odaya giriş yapar",

  usage: "gir",

  usageDelim: "",

};