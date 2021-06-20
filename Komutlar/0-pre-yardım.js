const Discord = require("discord.js") 
const disbutpages = require("discord-embeds-pages-buttons")

const disbut = require("discord-buttons") 

exports.run = async (client, message, args) => {

const e1 = new Discord.MessageEmbed() 

.setColor("BLURPLE")

.setAuthor(`Merhaba, ${message.author.username}!`, message.author.avatarURL())

.setTitle("Space Giveaway")

.setURL("https://top.gg/bot/765207268408033322")

.setDescription(`<:emoji_83:847801988656791563> Alttaki butonlara basarak komutları görüntüleyebilirsin!`)

.addField(`<:blurple_tada:841709529217105941> Çekiliş komutlar`, "Galiba sunucuda güzel şeyler olacak sabırsızlıkla bekliyorum!", true)

.addField(`<:emoji_68:841947082076192778> Yetkili komutları`, "Yetkili Komutları ile sunucunuzu daha güzel yapabilir siniz.", true)

.addField("<:emoji_84:847799091886161970> Müzik Komutları", "Biraz müzik dinleyelim 🎶") 

.addField("<:tembel:802431611848228904> Eğlence Komutları", "Biraz eğlenmek herkesin hakkı ;D") 

.addField(`<:game:842658421231845408> Oyun Komutları`, "Oyun komutlarım bence bir harika!!", true)

const e2 = new Discord.MessageEmbed() 

.setColor("GREEN")

.setAuthor(`Merhaba, ${message.author.username}!`, message.author.avatarURL())

.setTitle("<:blurple_tada:841709529217105941> Çekiliş Komutları")

.setURL("https://top.gg/bot/765207268408033322")

.setDescription(`> **g.pre-çekiliş-başlat** - Çekiliş Başlatırsınız. 
> **g.pre-çekiliş-oluştur** - Çekiliş oluşturursunuz. ( soru ile ) 
> **g.pre-çekiliş-yeniden-çek** - Çekiliş yeniden çekersiniz. 
> **g.pre-çekiliş-bitir** - Çekiliş bitirirsiniz.
`) 

const e3 = new Discord.MessageEmbed() 

.setColor("GREEN") 

.setAuthor(`Merhaba, ${message.author.username}!`, message.author.avatarURL())

.setTitle("<:emoji_68:841947082076192778> Yetkili Komutları")

.setURL("https://top.gg/bot/765207268408033322")

.setDescription(`> **g.yapay-zeka aç** - Yapay zeka açarsınız. 

> **g.yapay-zeka kapat** - Yapay zeka kapatırsınız.

`) 

const e4 = new Discord.MessageEmbed() 

.setColor("GREEN") 

.setAuthor(`Merhaba, ${message.author.username}!`, message.author.avatarURL())

.setTitle("<:emoji_84:847799091886161970> Müzik Komutları")

.setURL("https://top.gg/bot/765207268408033322")

.setDescription(`Yakında!

`) 

const e5 = new Discord.MessageEmbed() 

.setColor("GREEN") 

.setAuthor(`Merhaba, ${message.author.username}!`, message.author.avatarURL())

.setTitle("<:tembel:802431611848228904> Eğlence Komutları")

.setURL("https://top.gg/bot/765207268408033322")

.setDescription(`Yakında! 

`) 

const e6 = new Discord.MessageEmbed() 

.setColor("GREEN") 

.setAuthor(`Merhaba, ${message.author.username}!`, message.author.avatarURL())

.setTitle("<:game:842658421231845408> Oyun Komutları")

.setURL("https://top.gg/bot/765207268408033322")

.setDescription(`Yakında!

`) 

var pages = [e1, e2, e3, e4, e5, e6]

disbutpages.pages(client, message, pages, 300000, disbut, "red", "844468549417697350", "844468548079321089", "844468546930606100")

} 

exports.conf = {

aliases: [] 

}

exports.help = {

name: "pre-yardım" 

}  