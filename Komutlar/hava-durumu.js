const { MessageAttachment, MessageEmbed } = require('discord.js');

  

exports.run = async function(client, message, args) {

  

   let şehir = args[0]

   if (!şehir) return message.channel.send("<:carpi:855750448711467058> Lütfen bir yer girin.")

  

   const embed = new MessageEmbed()

     .setTitle(`**${şehir.toLocaleUpperCase()} Hava durumu**`)

     .setImage(`https://ryukjs.com/api/weather_image?city=${şehir}`) 
.setColor("BLURPLE") 
    message.channel.send(embed)



};

  

exports.conf = {

  aliases: ["hava", "hava-durumu", "weather", "weathers"]

};

  

exports.help = {

  name: "hava-durumu"

};