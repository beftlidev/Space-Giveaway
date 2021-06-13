const Discord = require('discord.js')

const db = require('croxydb')

    exports.run = (client, message, args) => {

        // Hata

        if(!args[0]){

            const kadirfi = new Discord.MessageEmbed()

            .setDescription(`**Lütfen Komutu Doğru Kullanın**

 <a:bytcec:818712678146113567> g.not-sil 1
 <a:bytcec:818712678146113567> g.not-sil 2
 <a:bytcec:818712678146113567> g.not-sil 3
 `)

            .setColor('RANDOM')

            return message.channel.send(kadirfi)

        }

       

        if(args[0] === "1"){

            db.delete(`codemarefinot1_${message.author.id}`)

            message.inlineReply('<:calisiyor:798582407393312808> 1. Notunuz Datadan Silindi')

        }

        if(args[0] === "2"){

            db.delete(`codemarefinot2_${message.author.id}`)

            message.inlineReply('<:calisiyor:798582407393312808> 2. Notunuz Datadan Silindi')

        }

        if(args[0] === "3"){

            db.delete(`codemarefinot3_${message.author.id}`)

            message.inlineReply('<:calisiyor:798582407393312808> 3. Notunuz Datadan Silindi')

        }

        if(args[0] > 4){

            message.inlineReply('<:kod_uyg:768786604441206794> En fazla 3 not silebilirsin.')

        }

    } 

exports.conf = {

    enabled: true,

    guildOnly: false,

    aliases: ['Not-sil','NOT-SİL','not-SİL','NOT-sil'],

    permLevel: 0

}

exports.help = {

    name: 'not-sil'

}