const Discord = require('discord.js');

exports.run = async (client, message, args) => {

  if(message.guild.emojis.cache.size > 15) {

  var page = 0;

  

  let arr = [];

  let emojiarr = message.guild.emojis.cache.array();

  

  for(let i =0; Number(i + "0") < (Math.round(emojiarr.length/15)*15 +1); ++i) {

  var on = emojiarr.slice(Number(i + "0"), Number(i + "0")+15)

  arr.push(on.toString())

  }

  let embd = new Discord.MessageEmbed()

  .setColor('#eb5c0e')

  message.channel.send(embd.addField('<a:1_:818444321287176243> Sunucudaki Emojiler', arr[0].split(',').join(' ') || '<:codesty_image:844468551763230740> Emoji yok.').setFooter(`Sayfa ${page+1} / ${arr.length+1}`)).then(async msg => {

        await msg.react("⬅️");

        await msg.react("➡️");

  

        let filter = (reaction, user) => user.id !== message.client.user.id && user.id === message.author.id;

  

        var collector = msg.createReactionCollector(filter, {

          time: 120000

        });

  

        collector.on("collect", async (reaction, user) => {

          switch (reaction.emoji.name) {

            case "⬅️":

           await reaction.users.remove(user).catch(console.error);

              if (page == 0) return;

              --page

  

                embd.setFooter(`Sayfa ${page+1} / ${arr.length}`);

                embd.fields = [];

                embd.addField('Sunucudaki Emojiler', arr[page].split(',').join(' ') || 'Emoji yok.')

              msg.edit(embd)

             break;

            case "➡️":

              if (page+1 == arr.length) return;

              ++page

              await reaction.users.remove(user).catch(console.error);

                embd.setFooter(`Sayfa ${page+1} / ${arr.length}`);

                embd.fields = [];

                embd.addField('Sunucudaki Emojiler', arr[page].split(',').join(' ') || 'Emoji yok.')

              msg.edit(embd)

            break;

  

          }

        });

  

  });

} else {

  message.channel.send(new Discord.MessageEmbed()

  .setColor('GREEN')

  .setFooter(`${message.author.tag} tarafından istendi.`, message.author.avatarURL({ dynamic: true }))

  .addField('<a:1_:818444321287176243> Sunucudaki Emojiler', message.guild.emojis.cache.map(x => client.emojis.cache.get(x.id)).join(' ') || '<:codesty_image:844468551763230740> Emoji yok.'))

};

}; 

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: [],

  permLevel: 0

};

 

exports.help = {

  name: 'emoji-liste',


};