const Discord = require("discord.js") 
exports.run = async (client, message, args) => {
  const { FastType } = require('weky');

const game = new FastType({

    message: message,

    winMessage: "GG kazandın!", //message sent when user types perfectly

    sentence: 'some string', //sentence-to-be-typed

    loseMessage: 'Kaybettin ;(', //message sent when user misspell it

    time: 50000, //time that user has in ms

    startMessage: 'İyi şanslar!' //message sent when user starts playing

});

game.start();
 } 
exports.conf = {
  aliases: [] 
 } 
exports.help = {
  name: "type-fast" 
 } 