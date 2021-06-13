const Discord = require('discord.js')

const GameCord = require('gamecord-fork').djs

const db = require('croxydb')

 exports.run = async (client, message, args) => {

        new GameCord.Quiz(message)

        .setTitle('Quiz')

      

        .setColor('RANDOM')

      

        .setTime(20000) // Set time

      

        .on('start', game => console.log(game.item.answers)) 

      

        .run()

      

    

 }

      

exports.conf = {

    enabled: true,

    guildOnly: false,

    aliases: ['quizk'],

    permLevel: 0

  

    

  };

   

  exports.help = {

    name: "quiz",

    description: "sorusor",

    usage: "soru"

  };