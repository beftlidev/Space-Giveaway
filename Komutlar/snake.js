const Discord = require('discord.js')

const GameCord = require('gamecord-fork').djs

const db = require('croxydb')

 exports.run = async (client, message, args) => {

    

    new GameCord.SnakeGame(message)

        .setTitle('Yılan Oyunu')

        .setColor('#7298da')

        .setTime(60000) // Always better to set max time because the default one is just 5s

                .run()

}

exports.conf = {

    enabled: true,

    guildOnly: false,

    aliases: ['snake', 'yılan', 'yılan-oyunu', 'play-snake', 'yılan-oyna'],

    permLevel: 0

  };

   

  exports.help = {

    name: "snake",

    description: "Bot i",

    usage: "istatistik"

  };