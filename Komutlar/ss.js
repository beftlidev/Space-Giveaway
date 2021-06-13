const Discord = require('discord.js');

const request = require('request');

const fs = require('fs');

exports.run = (client, message, args) => {

  const embedyardim = new Discord.MessageEmbed()

  .setDescription("<:bakimda:798582408642560110> Lütfen bir site url'si giriniz. \nÖrnek: https://google.com.tr")

if(!args[0]) return message.channel.send(embedyardim);

  if (args[0]) {

request({

    url: "https://api.apiflash.com/v1/urltoimage",

    encoding: "binary",

    qs: {

        access_key: "aa511e7d9ed54525bf61f918f70373de",

        url: args[0]

        }

}, (error, response, body) => {

    if (error) {

        console.log(error);

    } else {

        fs.writeFile("screenshot.jpeg", body, "binary", error => {

          const veri = new Discord.MessageEmbed()

          .setTitle(`${args[0]}`)

          .setImage("attachment://screenshot.jpeg")

          .setFooter(`Space Giveaway`, client.user.avatarURL())

         message.channel.send({ embed: veri, files: ["./screenshot.jpeg"]}) 

        });

      };

    });

  };

};

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: ['h', 'halp', 'help', 'y'],

  permLevel: 0

};

exports.help = {

  name: 'ss',

  description: 'Belirttiğiniz web sitesinin ekran görüntüsünü alır.',

  usage: 'ekranresmi [web site url]'

};