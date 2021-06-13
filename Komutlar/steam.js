const Discord = require('discord.js')

var steam = require('steam-provider')

var provider = new steam.SteamProvider();

exports.run = (client, message, args) => {

    let game = args[0]

    let steampng = "https://cdn.discordapp.com/attachments/458004691402489856/470344660364034049/steam.png"

    if (!game) return message.inlineReply('Lütfen Steamde Olan Bir Oyunun Adını Yazın. Örnek: `g.steam PUBG`')

    provider.search(game).then(result => {

        provider.detail(result[0].id, "turkey", "tr").then(results => {

            console.log(results)

            const embed = new Discord.MessageEmbed()

                .setAuthor('Steam Store', steampng)

                .setColor("RANDOM")

                .setTitle(result[0].name)

                .addField(`<a:kirmizi_elmas:754670608335241306>Oyunun ID'sı`, result[0].id)

                .setThumbnail(results.otherData.imageUrl)

                .addField('<a:kaaaalp:814816286147346462> Türleri', results.genres)

                .addField('<a:ucanpara:768793827569565726> Fiyati', `Nolmal Fiyat **${results.priceData.initialPrice}** TL
İndirimli Fiyat **${results.priceData.finalPrice}** TL`, true)

                .addField('<:Windows10X:815129850435338260> Platformlar', results.otherData.platforms, true)

                .addField('<a:yildizlar:768842928607985685> Metacritic Puanı', results.otherData.metacriticScore, true)

                .addField('<:709419603784368258:803719495973732382> Etiketleri', results.otherData.features, true)

                .addField('<:developer:768822320315105322> Geliştiricileri', results.otherData.developer, true)

                .addField('<:developer:768822320315105322> Yayımcıları', results.otherData.publisher)

                .setColor("RANDOM")

            message.channel.send(embed).catch(e => {

                console.log(e)

                message.reply('Hata Olustu Yada `' + game + '` Adlı Oyun Bulunamadı')

            })

        })

    })

}

exports.conf = {

  enabled: true,

  guildOnly: true,

  aliases: [],

  permLevel: 0

};

exports.help = {

  name: 'steam',

  description: 'Aradağınız oyunun steamdaki fiyatına bakmanızı sağlar',

  usage: 'steamfiyat PUBG'

};