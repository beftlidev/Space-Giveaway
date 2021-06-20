const Discord = require('discord.js');
const data = require('croxydb')
  exports.run = async (client, message, args) => {
  let açıkmı = await data.fetch(`pre_${message.author.id}`)
  if(açıkmı) {
  
const embed = new Discord.MessageEmbed()
.setDescription("**Premium üye sin!**")
.setTimestamp()
message.channel.send(embed)   
} else { return message.channel.send(new Discord.MessageEmbed()
 .setDescription(`Bu komut premiumlulara özel!
Premium almak için [Destek sunucumuzu](https://discord.gg/KZfAEjrPUF) ziyaret et!`)
.setTimestamp()
)
} 
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["test"],
  permLevel: 0
}
exports.help = {
  name: 'premiumtest'
};