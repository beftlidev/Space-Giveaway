const Discord = require('discord.js');

const database = require('croxydb');

const ayarlar = require("../ayarlar.json");

exports.run = async (client, message, args) => {

if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("<:bakimda:798582408642560110> Bu komutu kullanmak için `Mesajları Yönet` yetkisine sahip olmalısın.")

  function createEmbed(desc, color) {

    return message.channel.send(new Discord.MessageEmbed()

    .setDescription(desc)

    .setColor(color)

    .setAuthor(message.author.username, message.author.displayAvatarURL));

  }

  if(!database.fetch(`snipe_${message.guild.id}`) || database.fetch(`snipe_${message.guild.id}`).length <= 0) return createEmbed('Daha önce hiç mesaj silinmemiş.', 'RED');

  if(!args[0]) args[0] = 1;

  if(isNaN(args[0])) args[0] = 1;

  if(args[0] > database.fetch(`snipe_${message.guild.id}`).length) args[0] = database.fetch(`snipe_${message.guild.id}`).length;

  var silinenler = database.fetch(`snipe_${message.guild.id}`).slice(database.fetch(`snipe_${message.guild.id}`).length-args[0])

const generateEmbed = start => {

  const current = silinenler.sort((a, b) => b.messageCREATEDAT - a.messageCREATEDAT).slice(start, start + 10).reverse()

  // you can of course customise this embed however you want

  const embed = new Discord.MessageEmbed()

    .setTitle(`Silinen Mesajlar`)

    .setColor("BLURPLE")

    .setFooter(`Sayfa ${Math.ceil((start+current.length)/10)}/${Math.ceil(silinenler.length/10)}`)

    .setDescription(`${current.map(x => `**${x.authorTAG}**: ${x.messageCONTENT}`).join("\n")}`)

  return embed

}

// ${start + 1}-${start + current.length}

// edit: you can store the message author like this:

const author = message.author

// send the embed with the first 10 guilds

message.channel.send(generateEmbed(0)).then(message => {

  // exit if there is only one page of guilds (no need for all of this)

  if (silinenler.length <= 10) return

  // react with the right arrow (so that the user can click it) (left arrow isn't needed because it is the start)

  message.react('➡️')

  const collector = message.createReactionCollector(

    // only collect left and right arrow reactions from the message author

    (reaction, user) => ['⬅️', '➡️'].includes(reaction.emoji.name) && user.id === author.id,

    // time out after a minute

    {time: 60000}

  )

  let currentIndex = 0

  collector.on('collect', reaction => {

    // remove the existing reactions

    message.reactions.removeAll().then(async () => {

      // increase/decrease index

      reaction.emoji.name === '⬅️' ? currentIndex -= 10 : currentIndex += 10

      // edit message with new embed

      message.edit(generateEmbed(currentIndex))

      // react with left arrow if it isn't the start (await is used so that the right arrow always goes after the left)

      if (currentIndex !== 0) await message.react('⬅️')

      // react with right arrow if it isn't the end

      if (currentIndex + 10 < silinenler.length) message.react('➡️')

    })

  })

})

/*

  const embed = new Discord.MessageEmbed()

  .setColor(ayarlar.temarenk)

  .setDescription(silinenler.sort((a, b) => a.messageCREATEDAT - b.messageCREATEDAT).map(x => `**${x.authorTAG}**: ${x.messageCONTENT}`).slice(0, 50).join('\n'))

  .setTitle('Silinen mesajlar');

  if(embed.description.length > 2048) return createEmbed('Silinen mesajların arasında çok uzun bir mesaj bulunduğu için bunu gösteremiyorum.', 'RED');

  return message.channel.send(embed);

  */

};

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: [],

  permLevel: 0

};

 

exports.help = {

  name: 'snipe'

};