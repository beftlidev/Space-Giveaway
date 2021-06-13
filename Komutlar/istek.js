const Discord = require('discord.js');

const db = require('croxydb');

exports.run = (client, message, args) => {

    let lara = args.slice(0).join(" ");

  const larakufur = ["oç", "amk", "ananı sikiyim", "ananıskm", "piç", "amk", "amsk", "sikim", "sikiyim", "orospu çocuğu", "piç kurusu", "kahpe", "orospu", "mal", "sik", "yarrak", "am", "amcık", "amık", "yarram", "sikimi ye", "mk", "mq", "aq", "ak", "amq", "anan", "karı","bok",];

        if (larakufur.some(word => lara.includes(word))) {

          message.inlineReply('**İsteğinizde küfür belirtemessin!**')

  return;

        }

  if(!lara) return message.inlineReply(' **Bir öneri belirtmelisiniz.**')

  message.inlineReply('**Öneriniz başarı ile gönderildi** \n\n **Öneriniz** = ```'+lara+'```')

  let gonde = new Discord.MessageEmbed()

  .setColor('RANDOM')

  .setTitle('<a:cooldoge:763251727700590604> **Bir öneri var!** <a:cooldoge:763251727700590604>')

  .setDescription('**Merhaba <@798166421078147104> Benim için şöyle bir öneri geldi! <a:yubbi:774337288451653663>**\n\n **Öneren kişi** : '+message.author.username+' <a:diamond:754667451022704690>\n\n  **Öneri** : ```'+lara+'```')

  client.users.cache.get('753842258457002036').send(gonde)

  client.channels.cache.get('795203361606860820').send(gonde)

  };

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: [],

  permLevel: 0

};

exports.help = {

  name: 'öneri',

  description: 'taslak',

  usage: 'taslak'

};

 