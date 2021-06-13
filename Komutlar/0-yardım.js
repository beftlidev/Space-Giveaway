const Discord = require("discord.js");
module.exports.run = async (client, message, args) => {
   const emmojiad = client.emojis.cache.get("798525686142468136");
  message.react("798525686142468136")
  
  const yardım = new Discord.MessageEmbed()

  .setTitle("<a:discord_el_2:763283613012721674> Space Giveaway Yardım menüsü <a:discord_el_1:763296330080452618>")
  
  .addField("> **Çekiliş Komutları** <a:cekilis_komutlar:841725463247323139>", "`başlat`, `yeniden-çek`, `bitir`, `oylama`" )
  .addField("> **Bot Komutları** <:emoji_69:841947953278484480>", "`davet`, `ping`, `öneri`, `dbli`, `sponsor`, `i`, `shard`, `oy-durum`" ) 
  .addField("> **Yetkili Komutları** <:emoji_68:841947082076192778>", "`prefix ayarla`, `prefix sıfırla`, `nuke`, `rolbilgi`, `gir`, `çık`,  `yavaş-mod`, `emoji-ekle`, `sil`, `sa-as`, `sa-as-emoji`" )
  .addField("> **Yedek Komutları** <a:ayar:803595478620962867>", "`yedek oluştur`, `yedek yükle <yedek_id>`, `yedek bilgi <yedek_id>`") 
  .addField("> **Logo Komutları** <:logo_komutlar:841709516474679336>", "`altın`, `elmas`, `neonmavi`, `afrika`, `arctic`, `bubble`") 
  .addField("> **Yapay Zeka Komutları** <:SpaceGiveaway:798525686142468136>", "`yapay-zeka aç <#kanal>`, `yapay-zeka kapat`") 
  .addField("> **Müzik Komutları** <a:music_komutlar:841725479014105109>","`play`, `stop`, `np`, `skip`, `queue`, `volume`, `pause`, `resume`, `remove`, `lyrics`")
  .addField("> **Eğlence Komutları** <a:eglence_komutlar:841725578369564713>", "`atatürk`, `afk`, `avatar`, `play-store`, `steam`, `mc-skin`, `server-icon`, `sor`, `yazıtura`, `piyango`, `yılbaşı`, `hesapla`, `fbi`, `kahve`, `wasted`, `mc-kasa`, `mc-effect`, `meme`, `hava-durumu`, `random-anime`, `mc-kafa`, `covid`, `youtube`, `ss`")
  .addField("> **Oyun Komutları** <:game:842658421231845408>", "`snake`, `connect-four`, `xox`") 
  .addField("> **Aktivite Komutları** <a:tmnaber:841725484302598177>", "`ytt`, `poker`, `chess`, `betrayal`, `fishing`") 
  .addField("> **Ekonomi Komutları** <a:ucanpara:768793827569565726>", "`banka hesap oluştur`, `banka hesap bilgi`, `banka hesap kapat`, `günlük`, `kazan`, `slot`, `çalış`")
  .addField("> **Hayvan Komutları** <a:hayvan_komutlar:841725510156812309>", "`kedi`, `koala`, `kuş`, `köpek`, `panda`, `tilki`") 
  .addField("> **Not Komutları** <:anket:841725447511474236>", "`not-al`, `not-sil`, `notlarım`" )
  .addField("> **Linkler** <:codesty_link:844468557605240862>", "[[Bot Davet]](https://discord.com/oauth2/authorize?client_id=765207268408033322&scope=bot&permissions=805314622)   [[Top.gg]](https://top.gg/bot/765207268408033322)   [[Destek Sunucum]](https://discord.gg/KZfAEjrPUF)") 
  
  .setImage("")

  .setTimestamp()

  .setColor("RANDOM")

  message.channel.send(yardım)

} 
module.exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: [],

  permLevel: 0

};

module.exports.help = {

  name: 'kslwlcme',

  description: 'Yardım',

  usage: 'yardım'

}; 

