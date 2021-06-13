const blackjack = require("discord-blackjack")

const Discord = require("discord.js") 
exports.run = async (client, message, args) => {
  let result = await blackjack(message, client)

    switch (result) {

      case 'Win':

        // do win stuff here

        break

      case 'Tie':

        // do tie stuff here

        break

      case 'Lose':

        // do lose stuff here

        break

      case 'Double Win':

        // do double win stuff here

        break

      case 'ERROR':

        // do whatever you want

        break
  

}
 } 
exports.conf = {
  aliases: [] 
 } 
exports.help = {
  name: "blackjack" 
 } 