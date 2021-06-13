const Discord = require('discord.js')

const db = require('croxydb')

 exports.run = async (client, message, args) => {

    const { Snake } = require('weky');

new Snake({

    message: message,

    embed: {

    title: 'Snake', //embed title

    color: "#gt4668", //embed color

    gameOverTitle: "Game Over", //game over embed title

    },

    emojis: {

      empty: '⬛', //zone emoji

      snakeBody: '⏺️', //snake

      food: '🍏', //food emoji

      //control

      up: '⬆️', 

      right: '⬅️',

      down: '⬇️',

      left: '➡️',

      },

    }).start()


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