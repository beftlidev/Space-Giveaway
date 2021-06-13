const { tictactoe } = require('reconlx') 

exports.run = (client, message) => {

        const member = message.mentions.members.first()

            if(!member)  return  message.inlineReply('<:bakimda:798582408642560110> Bir kişi etiketlemelisin.')

        new tictactoe({

            player_two: member,

            message: message

        })

    
  
};

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: [""],

  permLevel: 0

};

exports.help = {

  name: "xox",

  description: "Komut Açıklama",

  usage: "Kullanımı"

};

