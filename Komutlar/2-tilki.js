const Discord = require('discord.js');

const randomAnimal = require("random-animal.js")

exports.run = async (client, message, args) => {

    randomAnimal.randomFox().then(fox => {

        message.channel.send(fox)

    })}

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: [],

  permLevel: 0

};

exports.help = {

  name: 'tilki'

};