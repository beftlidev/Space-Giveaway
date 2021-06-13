const Discord = require("discord.js")

exports.run = async (client, message, args) => {

  

  const fbi = new Discord.MessageEmbed()

  .setColor("RANDOM")

  .setImage("https://media1.giphy.com/media/QUY2pzDAKVpX3QacCg/200.gif")

  .setTitle("Sa FBİ geldi")

  message.channel.send(fbi)

}

exports.conf = {

  enabled: true, 

  guildOnly: false, 

   aliases: ['fbi-gif'],

  permLevel: `Yetki gerekmiyor.` 

};

exports.help = {

  name: "fbi",

  description: "FBi gif atar",

  usage:"!fbi"

}