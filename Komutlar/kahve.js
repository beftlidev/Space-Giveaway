const Discord = require('discord.js')

    exports.run = (client, message, args) => {

        let kullanıcı = message.mentions.members.first();

        if(!kullanıcı) return message.channel.send(`${message.author} - Kahve Ismarlayacağın Kullanıcıyı Etiketlemelisin`)

        if(kullanıcı){

            const kahve = new Discord.MessageEmbed()

            .setDescription(`${message.author}, ${kullanıcı} **Kişisine türk kahvesi ısmarladı**`)

            .setColor('RANDOM')

            .setImage('https://www.kulturportali.gov.tr/repoKulturPortali/small/PetekIcon/turkkahve_20180124152304783.jpg')

            .setFooter('Afiyet olsunq');

            message.channel.send(kahve)

        }

    }

exports.conf = {

    enabled: true,

    guildOnly: false,

    aliases: ['Kahve','kahve-ısmarla','kahveısmarla'],

    permLevel: 0

}

exports.help = {

    name: 'kahve'

}