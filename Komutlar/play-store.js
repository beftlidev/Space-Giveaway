const Discord = require("discord.js");

const ayarlar = require('../ayarlar.json')

const gplay = require('google-play-scraper')

exports.run = function(client, message, args) {

  var prefix = ayarlar.prefix

 

  const  uyg = args.join(' ')

 

        if (!uyg) return message.inlineReply("Bir Uygulama İsmi Girmelisin")

        if (uyg) {

         

                gplay.search({

                lang: 'tr',

                term: uyg,

                country: 'tr',

                fullDetail: true

                 

           

                 

            }).then((x) => {      

                const game = x[0]

               

                var bymayfe = game.editorsChoice

               

                if(bymayfe === true) {

                bymayfe = "Editörün Seçimi"

                } else {

                  bymayfe = "Değil"                  

                }

               

                const gameEmbed = new Discord.MessageEmbed()

                    .setTitle(game.title)

                    .setDescription(game.summary + `\n\n[Ziyaret İçin Tıkla](${game.url})`)

                    .addField("<a:yildizlar:768842928607985685> Puan: ", game.scoreText, true)

                    .addField("<a:ucanpara:768793827569565726> Fiyat: ", game.priceText, true)

                    .addField("<a:uptime:807499337159802930> İndirilme: ", game.installs, true)

                    .addField("<:developer:768822320315105322> Geliştirici: ", game.developer, true)

                    .addField("<a:dj:768787034877198356> Boyut: ", game.size, true)

                    .addField("<a:loading_win:767995333284200459> Editörün Seçimi mi ?: ", bymayfe, true)

                    .setThumbnail(game.icon)

                    .setTimestamp(Date())

                    .setColor(0x008000)

                return message.channel.send(gameEmbed)

            })

        }

}

       

 

 

 

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: ["playstore"],

  permLevel: 0

};

 

exports.help = {

  name: "play-store",

  description: "Google Play'den Arama Yapar",

  usage: "byg!playstore (GuardMayFe yi Eklemeyi Unutmayın Sizin İçin Yazdık O kadar be)"

};