const Discord = require('discord.js');

const randomAnimal = require("random-animal.js")

exports.run = async (client, message, args) => {

    randomAnimal.randomBird().then(bird => {

        message.channel.send(bird)

    })}

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: [],

  permLevel: 0

};

exports.help = {

  name: 'kuş'

};