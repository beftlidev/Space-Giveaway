const Discord = require("discord.js");

const ayarlar = require("../ayarlar.json")

const axios = require('axios');

exports.run = async (client, message, args) => {

if (!args.length) {

            axios.get('https://corona.lmao.ninja/v2/all')

                .then((response) => {

                    const exampleEmbed = new Discord.MessageEmbed()

                        .setColor("BLUE")

                        .setTitle('Dünya Geneli COVID-19 Bilgileri')

                        .setDescription('Tanı konulan vakalar, ölümler ve dünya çapında gelişmeler \nÜlkeler hakkında bilgi almak için ' + ` \`${ayarlar.prefix}covid turkey\` `)

                        .addField(`:microbe: Tanı Konulan Hasta Sayısı`,response.data.cases)

            .addField(`:warning: Toplam Ölüm`,response.data.deaths)

            .addField(`:syringe: Toplam İyileşen`,response.data.recovered)

                        .setTimestamp();

                    message.channel.send(exampleEmbed);

                })

                .catch((error) => {

                    console.log(error);

                });

        }

        else {

            axios.get(`https://corona.lmao.ninja/v2/countries/${args[0]}`)

                .then((response) => {

                    const exampleEmbed = new Discord.MessageEmbed()

.setAuthor( response.data.country,response.data.countryInfo.flag)

                        .setColor('RED')

                        .setTitle(`${args[0]} - COVID19 Bilgileri`)

            .addField(`:test_tube: Toplam Test`,"`"+`[ ${response.data.tests} ]` + "`",true)

            .addField(`:microbe: Toplam Vaka`,"`"+`[ ${response.data.cases} ]` + "`",true)

            .addField(`:syringe: Toplam İyileşen`,"`"+`[ ${response.data.recovered} ]` +"`" ,true)

            .addField(`:dna: Toplam Enfekte`, "`"+`[ ${response.data.critical} ]` + "`",true)

            .addField(`:skull_crossbones: Toplam Ölümler`,"`"+`[ ${response.data.deaths} ]` + "`" ,true)

            .addField(`:mask: Bugünkü Vaka`,"`"+`[ ${response.data.todayCases} ]` + "`",true)

            .addField(`:warning: Bugünkü Ölüm`,"`" + `[ ${response.data.todayDeaths} ]` + "`",true)

            .addField(`:globe_with_meridians: Ülke`,"`" + `[ ${response.data.country} ]` + "`",true)

            .addField(`:calendar: Tarih`,"`" + `[ ${response.data.date} ]` + "`",true)

  .setFooter(`${message.author.tag} tarafından istendi`, message.author.avatarURL({dynamic:true}))

  .setTimestamp()

            .setThumbnail("https://media.discordapp.net/attachments/652639850788290621/764574821043535892/2760147.png")

          console.log(response)

                    message.channel.send(exampleEmbed);

                })

                .catch((error) => {

          message.channel.send('<:bakimda:798582408642560110> Hata \n Lütfen ülke girerken global olarak giriniz. Örnek: Turkey şeklinde girebilirsiniz.')

                });

        }

}

    

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: ["corona", "covid", "covid19", "covıd", "virüs", "coronavirüs"],

  permLevel: 0

};

exports.help = {

  name: 'covid',

  description: 'Ülkelerdeki COVID-19 vakalarını inceyelebilirsiniz',

  usage: 'korona <ülke>'

};