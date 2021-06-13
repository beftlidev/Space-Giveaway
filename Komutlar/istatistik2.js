const Discord = require("discord.js");
const moment = require("moment");
const os = require('os');
require("moment-duration-format");
const ayarlar = require('../ayarlar.json');

exports.run = async (client, message) => {
  const promises = [

	client.shard.fetchClientValues('guilds.cache.size'),

	client.shard.broadcastEval('this.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0)'),

];
  Promise.all(promises)

	.then(results => {

		const totalGuilds = results[0].reduce((acc, guildCount) => acc + guildCount, 0);

		const totalMembers = results[1].reduce((acc, memberCount) => acc + memberCount, 0);

		
const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
  let embed = new Discord.MessageEmbed()

    .setColor("RANDOM") 

    .setAuthor("İstatistik") 

    .addField("<:verified:799571972727504896> Toplam sunucu", totalGuilds) 
    .addField("<:verified:799571972727504896> Toplam Kullanıcı", totalMembers) 
    .addField("<:verified:799571972727504896> Toplam Kanal Sayısı", client.channels.cache.size) 
    .addField("<:verified:799571972727504896> Toplam Sesli Kanal Sayısı", `**${client.channels.cache.filter(x => x.type === 'voice').size}**`, true)
  
    .addField("<:developer:820552634565787670> Pingim", client.ws.ping) 
.addField("<:developer:820552634565787670> Shard ID", client.shard.ids) 
    .addField("<a:enchanted_book:754672292478320683> İşletim Sistemi", `**${os.platform()}** Bit: **${os.arch()}**`, true)
    .addField("<a:enchanted_book:754672292478320683> Discord.js Sürümü", `${Discord.version}`, true)
    .addField("<a:enchanted_book:754672292478320683> CPU", `**${os.cpus().map(i => `${i.model}`)[0]}**`, true)  
    .addField("<a:enchanted_book:754672292478320683> Bellek Kullanımı", `${(process.memoryUsage().heapUsed / 2024 / 2024).toFixed(2)} MB`, true)
    .addField(`<a:enchanted_book:754672292478320683> Uptime`, `${duration}`, true)
    .addField("<a:enchanted_book:754672292478320683> Toplam Emoji Sayısı", `${client.emojis.cache.size}`, true)
    .addField(`<a:enchanted_book:754672292478320683> Bulunan Komut Sayısı`, `**${client.commands.size}**`, true)
 
  .addField("<:ses:804253369325715526> Seste Olduğum Sunucu Sayısı", client.voice.connections.size)

    .addField("<a:tac:761921815790092298> Yapımcım & Geliştirici", "<@753842258457002036>")

   
     const fetch = require("node-fetch");

    const kanal = message.channel.id;

    const mesaj = embed

    const butonmesaj = "Website"

    fetch(`https://discord.com/api/v9/channels/${kanal}/messages`, {

        method: "POST",

        body: JSON.stringify({"embed":mesaj,

            "components": 

            [

              {

                "type": 1,

                "components": [

                    {

                        "type": 2,

                        "label": butonmesaj,

                        "style": 5,

                        "url": "https://top.gg/bot/765207268408033322" 

                    },
                  
                           {

                        "type": 2,

                        "label": "Botu ekle",

                        "style": 5,

                        "url": "https://discord.com/oauth2/authorize?client_id=765207268408033322&scope=bot&permissions=805314622"

                    },

                    {

                        "type": 2,

                        "label": "Destek sunucum",

                        "style": 5,

                        "url": "https://discord.gg/KZfAEjrPUF"

                    },

                                        {

                        "type": 2,

                        "label": "Oy ver",

                        "style": 5,

                        "url": "https://top.gg/bot/765207268408033322"

                    }

                ]

            }

            ],

                             }),

        headers: {

            "Authorization": `Bot ${client.token}`,

            "Content-Type": "application/json"

        }

    })
}) 
       }
exports.conf = {

  enabled: true,

  guildOnly: true,

  aliases: ["p", "ms"],

  permLevel: 0

};

exports.help = {

  name: "i",

  description: "Botun pingini gösterir",

  usage: "ping"

};