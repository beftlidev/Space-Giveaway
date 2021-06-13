const Discord = require('discord.js')

const db = require('croxydb')

    exports.run = (client, message, args) => {

        // Let Tanımları

        let not1 = db.fetch(`codemarefinot1_${message.author.id}`)

        let not2 = db.fetch(`codemarefinot2_${message.author.id}`)

        let not3 = db.fetch(`codemarefinot3_${message.author.id}`)

        const codemarefi = new Discord.MessageEmbed()

        .setDescription(`

            ${message.author} **Notların**

> <a:bytcec:818712678146113567> **Not 1 :** ${not1 || "<a:bulut:763614153826107393> Veri yok"}\n

> <a:bytcec:818712678146113567> **Not 2 :** ${not2 || "<a:bulut:763614153826107393> Veri Yok"}\n

> <a:bytcec:818712678146113567> **Not 3 :** ${not3 || "<a:bulut:763614153826107393> Veri Yok"}

        `)

        .setColor('RANDOM')

        message.channel.send(codemarefi)

    } 

exports.conf = {

    enabled: true,

    guildOnly: false,

    aliases: ['Notlarım','NOTLARIM'],

    permLevel: 0

}

exports.help = {

    name: 'notlarım'

}