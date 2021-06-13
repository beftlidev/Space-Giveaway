const Discord = require('discord.js');

const randomAnimal = require("random-animal.js")

exports.run = async (client, message, args) => {

    randomAnimal.randomKoala().then(koala => {

        message.channel.send(koala)

    })}

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: [],

  permLevel: 0

};

exports.help = {

  name: 'koala'

};