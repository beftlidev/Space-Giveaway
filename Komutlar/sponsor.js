const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

  const yardım = new Discord.MessageEmbed()

  .setTitle("<:partner:793055693506347038> Sponsor <:partner:793055693506347038>")
  
  .setDescription(`sa`)

  
  .setImage("https://s2.gifyu.com/images/standard14.gif")
  .setTimestamp()
  .setColor("RANDOM")

  message.channel.send(yardım)

}

module.exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: ["help"],

  permLevel: 0

};

module.exports.help = {

  name: 'sponsor',

  description: 'Yardım',

  usage: 'yardım'

}; 