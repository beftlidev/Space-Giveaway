const Discord = require("discord.js")

const Levels = require("discord-xp") 

exports.run = async (client, message, args) => {

const rawLeaderboard = await Levels.fetchLeaderboard(message.guild.id, 10); // We grab top 10 users with most xp in the current server.

if (rawLeaderboard.length < 1) return message.inlineReply("<:carpi:855750448711467058> Henüz kimse tabloda değil!");

const leaderboard = await Levels.computeLeaderboard(client, rawLeaderboard, true); // We process the leaderboard.

const lb = leaderboard.map(e => `${e.position}. ${e.username}#${e.discriminator}\n<:rank:856145161888989215> Level: ${e.level}\n<:level:856145180117172224> XP: ${e.xp.toLocaleString()}`); // We map the outputs.

const embed = new Discord.MessageEmbed() 

.setDescription(`**Leaderboard**:\n\n${lb.join("\n\n")}`);

message.channel.send(embed) 

} 

exports.conf = {

aliases: [] 

}

exports.help = {

name: "leader-board" 

} 