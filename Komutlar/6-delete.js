const Discord = require("discord.js")

const ms = require("ms")

const path = require("path")

exports.run = async (client, message, args) => {

           if(!message.member.permissions.has('MANAGE_MESSAGES')) {

    const embed = new Discord.MessageEmbed()

      .setDescription(`**Ne yazık ki bu komutu kullanmaya yetkin yok. <:bakimda:798582408642560110>**`)

    message.channel.send(embed);

    return;

  }

    if (!args[0]) {

      return message.channel.send(

        new Discord.MessageEmbed()

          .setTitle("**Hata**")

          .setColor("RED")

          .setDescription(

            "<:codesty_support:844468556430704640> Lütfen silmemi istediğiniz bir çekiliş ID girin!" 

           ) 

          .setTimestamp()

      );

    }

        client.giveawaysManager.delete(args[0]).then(() => {

            message.channel.send(':tada: Tamam! Çekiliş silindi!');

        }).catch((err) => {

            message.channel.send('<:bakimda:798582408642560110> ' + args[0] + ', ID li çekiliş bulunamadı!');

        });

    }


exports.conf = {

aliases: [] 

}

exports.help = {

name: "çekiliş-sil" 

} 