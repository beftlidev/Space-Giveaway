const Discord = require('discord.js');

const weather = require('weather-js');

exports.run = (client, message, args) => {

  weather.find({search: args.join(" "), degreeType: 'C'}, function(err, result) {

      if (err) message.channel.send(err);

      if (result === undefined || result.length === 0) {

          message.channel.send('Lütfen bir yer gir.')

          return;

      }

      var current = result[0].current;

      var location = result[0].location;

      const embed = new Discord.MessageEmbed()

          .setDescription(`**__${current.skytext}__**`)

          .setAuthor(`${current.observationpoint} için hava durumu`)

          .setThumbnail(current.imageUrl)

          .setColor("RANDOM")

          .addField('<a:zaman:830317388834275398> Zaman Dilimi',`UTC${location.timezone}`, true)

          .addField('<a:bytcec:818712678146113567> Derece Türü',location.degreetype, true)

          .addField('<a:bytcec:818712678146113567> Sıcaklık',`${current.temperature} Derece`, true)

          .addField('<a:bytcec:818712678146113567> Hava', `${current.feelslike}`, true)

          .addField('<a:bytcec:818712678146113567> Rüzgar',current.winddisplay, true)

          .addField('<a:bytcec:818712678146113567> Nem', `%${current.humidity}`, true)

          message.channel.send({embed});

  })

}

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: ['havadurum', 'hava'],

  permLevel: "0"

};

exports.help = {

  name: "hava-durumu",

  description: "hava durumunu gösterir",

  usage: "havadurumu"

};