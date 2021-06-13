const Discord = require("discord.js")

exports.run = async (client, message, args) => {

  

  const fbi = new Discord.MessageEmbed()

  .setColor("RANDOM")

  .setImage("https://th.bing.com/th/id/R740dee2c6cfdc36d5f0799aa159218b4?rik=15uZvS396jmWZw&riu=http%3a%2f%2fstatic.skaip.org%2fimg%2femoticons%2f180x180%2ff6fcff%2fsmoke.gif&ehk=2NwJXdOxvVE3R%2btyTX1xPiTtokzx0N4i34uZJFrHYsE%3d&risl=&pid=ImgRaw")

  .setTitle("Sigara içtin")
  .addField("Not:", "Sigara sağlığa zararlıdır bu eğlence amacı ile yapıldı") 

  message.channel.send(fbi)

}

exports.conf = {

  enabled: true, 

  guildOnly: false, 

   aliases: ['fbi-gif'],

  permLevel: `Yetki gerekmiyor.` 

};

exports.help = {

  name: "sigara",

  description: "FBi gif atar",

  usage:"!fbi"

}