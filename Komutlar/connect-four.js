const Discord = require('discord.js')

const GameCord = require('gamecord-fork').djs

const db = require('croxydb')

 exports.run = async (client, message, args) => {

    
    new GameCord.ConnectFour(message)

         .run()

}

exports.conf = {

    enabled: true,

    guildOnly: false,

    aliases: ['connectfour', 'connect-four', 'dördünü-birleştir', 'dordunubirlestir', 'dördünübirleştir', 'dordunu-birlestir'],

    permLevel: 0

  };

   

  exports.help = {

    name: "connect-four",

    description: "Bot i",

    usage: "istatistik"

  };