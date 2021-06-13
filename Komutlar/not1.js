const Discord = require('discord.js')

const db = require('croxydb')

    exports.run = (client, message, args) => {

        // Hata

        if(!args[0]){

            const kadirfi = new Discord.MessageEmbed()

            .setDescription(`**Lütfen Komutu Doğru Kullanın.**
            
 <a:bytcec:818712678146113567> g.not-al 1 <Not>
 <a:bytcec:818712678146113567> g.not-al 2 <Not>
 <a:bytcec:818712678146113567> g.not-al 3 <Not>
 `)

            .setColor('RANDOM')

            return message.channel.send(kadirfi)

        }

        let zaman = new Date()

        let kadirfi = zaman.getFullYear() + "/" + (zaman.getMonth() +1) + "/" + zaman.getDate() + " | " + zaman.getHours() + ":" + zaman.getMinutes() + ":" + zaman.getSeconds();

        

        if(args[0] === "1"){

            // Let Mesajları

            let mesaj = args.slice(1).join(' ')

            // Data İşlemleri & Mesaj

            db.set(`codemarefinot1_${message.author.id}`, [mesaj + "  \n`" + kadirfi + "`"])

            message.inlineReply('<a:bulut:763614153826107393> 1. Notunuz Data\'ya Kayıt Edildi... \n<:kod_uyg:768786604441206794> `g.notlarım`')

        }

        if(args[0] === "2"){

            // Let Mesajları

            let mesaj2 = args.slice(1).join(' ')

            // Data İşlemleri & Mesaj

            db.set(`codemarefinot2_${message.author.id}`, [mesaj2 + "  \n`" + kadirfi + "`"])

            message.inlineReply('<a:bulut:763614153826107393> 2. Notunuz Data\'ya Kayıt Edildi... \n<:kod_uyg:768786604441206794> `g.notlarım`')

        }

        if(args[0] === "3"){

            // Let Mesajları

            let mesaj3 = args.slice(1).join(' ')

            // Data İşlemleri & Mesaj

            db.set(`codemarefinot3_${message.author.id}`, [mesaj3 + "  \n`" + kadirfi + "`"])

            message.inlineReply('<a:bulut:763614153826107393> 3. Notunuz Data\'ya Kayıt Edildi... \n<:kod_uyg:768786604441206794> `g.notlarım`')

        }

        if(args[0] > 3){

            message.inlineReply('<:kod_uyg:768786604441206794> En fazla 3 not alabilirsin.')

        }

    } 

exports.conf = {

    enabled: true,

    guildOnly: false,

    aliases: ['Not-al','NOT-AL','not-AL','NOT-al'],

    permLevel: 0

}

exports.help = {

    name: 'not-al'

}