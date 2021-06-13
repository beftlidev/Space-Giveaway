const Discord = require('discord.js');

const ccd = require('parse-ms');

exports.run = async(client, message, args) => {

  let iugur = new Date('2022-01-01:00:00')

    let ab = ccd(iugur - Date.now())

    message.inlineReply(`**Yılbaşına **\`\`\`${ab.days} gün ${ab.hours} saat ${ab.minutes} dakika\`\`\` **kaldı!**`)

}

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: [],

  permLevel: 0

}; 

exports.help = {

  name: 'yılbaşı',

  description: 'Yılbaşına ne kadar kaldığını gösterir'

};

