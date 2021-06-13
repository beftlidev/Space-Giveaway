const Discord = require("discord.js")

exports.run = async (client, message, args) => {
  
   if(!message.member.permissions.has('MANAGE_MESSAGES')) {
    const embed = new Discord.MessageEmbed()
      .setDescription(`**Ne yazık ki bu komutu kullanmaya yetkin yok. <:bakimda:798582408642560110>**`)
    message.channel.send(embed);
    return;
  }

  const selampak = new Discord.MessageEmbed()

  .setColor("GREEN")

  .setTimestamp()

  .setAuthor("Nuke")

  .addField("Onaylamak için 👍 emojisine, Red etmek içinse 👎 emojisine tıklayabilirsiniz", "Space Giveaway")

  .setDescription("**Dikkat!** \n\nNuke işlemini onaylarsanız bu kanal kalıcı olarak **__silinecek__**,\n**geri getirilemeyecektir!**\nAncak bu kanalın **kopyası oluşturulacaktır!** \n")

  message.channel.send(selampak).then(msg => {

msg.react('👍').then(() => msg.react('👎'));

const filter = (reaction, user) => {

	return ['👍', '👎'].includes(reaction.emoji.name) && user.id === message.author.id;};

msg.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })

	.then(collected => {

		const reaction = collected.first();

		if (reaction.emoji.name === '👍') {

      message.channel.clone({position: message.channel.position});

      message.channel.delete();

		} else {

			message.reply('Nuke işlemi iptal edildi!');

      msg.delete({timeout:3000})

		}

	})

	.catch(collected => {

		message.inlineReply('Hata \nNuke işlemini yaparken bir hata ile karşılaşıldı');

	});

  

})

};

exports.conf = {

  enabled: true,

  guildOnly: true,

  aliases: [],

  permLevel: 3,

  kategori: "sunucu"

};

exports.help = { 

	name: 'nuke', 

  description: "Bot bulunduğunuz kanalı siler ve yeniden oluşturur.",

  usage: 'nuke'

}