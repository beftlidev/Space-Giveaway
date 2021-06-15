const Discord = require("discord.js")

exports.run = async (client, message, args) => {

const { sudo } = require('weky');

if (!args[0]) {

      return message.channel.send(

        new Discord.MessageEmbed()

          .setTitle("**Hata**")

          .setColor("RANDOM")

          .setDescription(

            "Birini etiketlemelisin"

          )

          .setTimestamp()

      );

    }

    if (!args[1]) {

      return message.channel.send(

        new Discord.MessageEmbed()

          .setTitle("**Hata**")

          .setColor("RANDOM")

          .setDescription(

            "Bir yazı yazman lazım"

          )

          .setTimestamp()

      );

    }
const user = message.mentions.members.first();
const msg = args.slice(1).join(" ");
if msg.includes('@everyone') || yazı.includes('@here')) return message.reply('Amacın ne aq cocu')
const xd = new sudo({

    message: message,

    text: msg,

    member: user,

});

xd.start();

} 

exports.conf = {

aliases: [] 

}

exports.help = {

name: "fake-mesaj" 

}

