const Discord = require('discord.js');

const client = new Discord.Client();

exports.run = (client, message) => {

   message.inlineReply(' Acaba Kazanabilecek Mi? ').then(message => {

      var espriler = ['**Tebrikler! Piyangoyu Kazandınız!** <a:yey:807498477130350593>','**Üzgünüm, Kaybettin.** <:bakimda:798582408642560110>'];

      var espri = espriler[Math.floor(Math.random() * espriler.length)];

            message.edit(`${espri}`);

 });

  }

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: [],

  permLevel: 0

};

exports.help = {

  name: 'piyango',

  description: 'Acaba Kazanabilecek Misin?',

  usage: 'piyango'

};

