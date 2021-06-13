const Discord = require('discord.js');

exports.run = function(client, message) {

    const embed = new Discord.MessageEmbed()

        .setDescription("**SUNUCU ICONU**")

        .setImage(message.guild.iconURL())
    
    message.channel.send(embed);

};

exports.conf = {

  enabled: true, 

  guildOnly: true, 

  aliases: [],

  permLevel: 0 

};

exports.help = {

  name: 'server-icon', 

  description: 'Serverin iconunu gösterir',

  usage: 'servericon'

};