const Discord = require('discord.js');

const math = require('math-expression-evaluator')

const stripIndents = require('common-tags').stripIndents

exports.run = function(client, message, args) {

    var soru = args.join(' ');

    

    if(!soru) return message.inlineReply('Bir işlem belirtin. Doğru Kullanım: g.hesapla ')

    else { let cevap;

        try {

            cevap = math.eval(soru)

        } catch(err) {

            message.inlineReply('Hatalı işlem: **' + err)

        }

        const embed = new Discord.MessageEmbed()

        .addField('<a:WindowsBusy:798582405627773069> Soru', soru)

        .addField('<a:sag:804253379785916446> Cevap', cevap)

        message.channel.send(embed)

    }

};  

exports.conf = {

  enabled: true, 

  guildOnly: true, 

  aliases: [],

  permLevel: 0 

};

exports.help = {

  name: 'hesapla', 

  description: 'Belirtilen işlemi yapar.',

  usage: 'hesapla '

};