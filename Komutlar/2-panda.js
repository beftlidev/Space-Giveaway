const Discord = require('discord.js');

const randomAnimal = require("random-animal.js")

exports.run = async (client, message, args) => {

    randomAnimal.randomPanda().then(panda => {

        message.channel.send(panda)

    })}

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: [],

  permLevel: 0

};

exports.help = {

  name: 'panda'

};