const Discord = require('discord.js');

const fetch = require('node-fetch')

exports.run = async (client, message, args) => {

    const { file } = await fetch('https://aws.random.cat/meow').then(response => response.json());

       message.channel.send(file);

}

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: [],

  permLevel: 0

};

exports.help = {

  name: 'kedi'

};