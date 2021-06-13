const Discord = require('discord.js');

const database = require('croxydb');

exports.run = async (client, message, args) => {

if(!database.fetch(`s.${message.author.id}`)) {
const embed = new Discord.MessageEmbed() 
.setColor("RED") 
.setDescription(`**__Dikkat!__**
> Emoji ara komutumuz epilepsi hastası iseniz kullanmamanız rica edilir! 
> Kabul ediyor iseniz ( **__kabul__** ) yazınız. `)
message.inlineReply(embed) 
  const filter = response => {

    return response.author.id === message.author.id;

  };

  message.channel.awaitMessages(filter, { max: 1, time: 0, errors: ['time'] }).then(collected => {  

    if(collected.first().content === 'kabul') {

      database.set(`s.${message.author.id}`, true);

      return client.commands.get('ara').run(client, message, args);

    } else return;

  });

} else {

  

if(!args[0]) return;

if(!client.emojis.cache.find(x => x.name === args[0]) && !client.emojis.cache.find(x => x.name.startsWith(args[0]))) return message.channel.send('<:bakimda:798582408642560110> Aradığınız isime tam olarak veya benzerine sahip olan bir emoji bulamadım.');

if(client.emojis.cache.find(x => x.name.startsWith(args[0])) && !client.emojis.cache.find(x => x.name === args[0])) {

   message.inlineReply(`<:bakimda:798582408642560110> Aradığınız isime sahip bir emoji bulamadım, onun yerine benzer sonuçlar buldum.`);

   return message.inlineReply(client.emojis.cache.filter(x => x.name.startsWith(args[0])).map(a => client.emojis.cache.get(a.id)).slice(0, 30).join(' '));

} else if(client.emojis.cache.find(x => x.name === args[0])) {

   return message.inlineReply(client.emojis.cache.filter(x => x.name === args[0]).map(a => client.emojis.cache.get(a.id)).slice(0, 30).join(' '))

}

};

}; 

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: [],

  permLevel: 0

};

 

exports.help = {

  name: 'emoji-ara',


};