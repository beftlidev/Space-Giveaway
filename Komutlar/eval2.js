const Discord = require('discord.js');

const client = new Discord.Client();

const fs = require('fs');

const moment = require('moment');


const express = require('express');

const app = express();

const db = require('croxydb');

const os = require('os');

exports.run = async (client, message, args) => {

 

  let clear = '844468546930606100' // Embedi silecek emoji id.

  let hide = '844468551763230740' // Yazıları gizleyecek emoji id.

  let back = '844468548079321089' // Gizlenen yazıları geri getirecek emoji id.

  let errorEmoji = '799570784397950988' // Hata emojisi id.

 

  let nopermission = new Discord.MessageEmbed()

  .setColor('#000001')

  .setDescription(`Bu komutu kullanabilmek için yeterli yetkiye sahip değilsin.`)

  if (message.author.id !== '753842258457002036') return message.channel.send(nopermission).then(message.react(errorEmoji)).then(msg => msg.delete({timeout: 10000}));



  try {



    let code = args.join(' ')

    let evaled = eval(code)

    let tip = typeof(evaled)



    evaled = require('util').inspect(evaled)



    if (!code) return message.react(errorEmoji)

    if (code.length > 1000) message.react(errorEmoji)



    let embed = new Discord.MessageEmbed()

    .setColor('#000001')

    .addField('GİRİŞ', `\`\`\`js\n${code}\`\`\``)

    .addField('SONUÇ', `\`\`\`js\n${evaled.length > 1000 ? `${evaled.slice(0, 1000)}...` : `${clean(evaled)}` }\`\`\``)

    .addField('Tür', `\`${tip}\``, true)

    .addField('Uzunluk', `\`${evaled.length}\``, true)

    .addField('Gecikme', `\`${client.ws.ping} MS\``, true)

    message.channel.send(embed).then(message.delete({timeout: 500})).then(async function(evalMessage) {



      await evalMessage.react(clear)

      await evalMessage.react(hide)

      await evalMessage.react(back)



      evalMessage.createReactionCollector((reaction, user) => user.id == message.author.id).on('collect', async function(react) {



        if (react.emoji.id == clear) {



          evalMessage.delete()



        } else if (react.emoji.id == hide) {



          evalMessage.edit(new Discord.MessageEmbed()

          .setColor('#000001')

          .addField('GİRİŞ', `\`\`\`fix\nBu yazı ${message.author.tag} tarafından gizlendi.\`\`\``)

          .addField('SONUÇ', `\`\`\`fix\nBu yazı ${message.author.tag} tarafından gizlendi.\`\`\``)

          .addField('Tür', `\`Gizlendi\``, true)

          .addField('Uzunluk', `\`Gizlendi\``, true)

          .addField('Gecikme', ` \`Gizlendi\` `, true))



          await react.users.remove(message.author.id)



        } else if (react.emoji.id == back) {



          evalMessage.edit(embed)



          await react.users.remove(message.author.id)

        };

      });

    });



  } catch (err) {



    let embed = new Discord.MessageEmbed()

    .setColor('#000001')

    .addField('HATA', `\`\`\`js\n${clean(err).length > 1000 ? `${clean(err).slice(0, 1000)}...` : `${clean(err)}`}\n\`\`\``)

    message.channel.send(embed).then(message.delete({timeout: 500})).then(async function(errorMessage) {



      await errorMessage.react(clear)



      errorMessage.createReactionCollector((reaction, user) => user.id == message.author.id).on('collect', async function(react) {



        if (react.emoji.id == clear) {



          errorMessage.delete()

        };

      });

    });

  };

 

  function clean(text) {



    if (typeof(text) == 'string') return text.replace(/`/g, '`' + String.fromCharCode(8203)).replace(/@/g, '@' + String.fromCharCode(8203))

    else

    return text

  };

};

exports.help = {

name: "eval2" 

} 


