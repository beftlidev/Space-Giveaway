const Discord = require('discord.js');

const randomAnimal = require("random-animal.js")

exports.run = async (client, message, args) => {

    randomAnimal.randomDog().then(dog => {

        message.channel.send(dog)

    })}

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: [],

  permLevel: 0

};

exports.help = {

  name: 'köpek'

};