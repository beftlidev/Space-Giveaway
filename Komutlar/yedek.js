const Discord = require("discord.js");
const backup = require("discord-backup");
const ayarlar = require("../ayarlar.json") 
exports.run = async(client, message, args) => {
    if(!message.member.hasPermission("ADMINISTRATOR")){
           return message.inlineReply("<:bakimda:798582408642560110> Yedek komutlarını kullanabilmek için Yönetici iznine sahip olman gerekiyor!");
        }
        if (args[0] === "oluştur") {
             message.inlineReply('<a:WindowsBusy:798582405627773069> Yedek oluşturuluyor. Lütfen birkaç dakika bekleyiniz!').then(msg => msg.delete({ timeout: 5000 }))
        backup.create(message.guild, {
            jsonBeautify: true
        }).then((backupData) => {
            // And send informations to the backup owner
            message.author.send("<:verified:799571972727504896> Yedek oluşturuldu! Yedeği yüklemek için: \n<a:bytcec:818712678146113567> `"+ayarlar.prefix+"yedek yükle "+backupData.id+"`");
            message.inlineReply("<:verified:799571972727504896> Yedek başarıyla oluşturuldu. DM kutunuzu kontrol ediniz!");
       });
       } else if (args[0] === "yükle") {
           let backupID = args[1];
        if(!backupID){
            return message.inlineReply("<:bakimda:798582408642560110> Yedek yüklemek için önceden oluşturduğunuz yedeği bir id' si lazımdır.");
        }
        backup.fetch(backupID).then(async () => {
            message.inlineReply("<a:ayar:803595478620962867> Yedek yüklendiğinde, tüm kanallar, roller vb. Değiştirilecektir.! \n<a:bytcec:818712678146113567> `g.onayla` yazarak onaylayabilirsiniz.");
                await message.channel.awaitMessages(m => (m.author.id === message.author.id) && (m.content === "g.onayla"), {
                   max: 1,
                    time: 20000,
                    errors: ["time"]
                }).catch((err) => {
                    return message.inlineReply("<:bakimda:798582408642560110> Zaman doldu, yanıt verilmediği için işlem iptal edildi.");
                });
                message.author.send("<:verified:799571972727504896> Yedek yüklenmeye başladı...");
                backup.load(backupID, message.guild).then(() => {
                   backup.remove(backupID);
               }).catch((err) => {
                    return message.author.send("<:bakimda:798582408642560110> Bir hata oluştu... Hata sebepleri: \n<a:bytcec:818712678146113567> Bota tam yetki vermelisiniz \n<a:bytcec:818712678146113567> Botun rolünü en üste almalısınız \nNot Eğer ikisini yapmış iseniz destek Sunucumuza geliniz.");
                });
        }).catch((err) => {
            console.log(err);
            return message.inlineReply("<:bakimda:798582408642560110> `"+backupID+"` Id' ye sahip bir yedek bulamadım.");
        });
        } else if (args[0] === "bilgi") {
           let backupID = args[1];
       if(!backupID){
            return message.inlineReply("<:bakimda:798582408642560110> Bilgisi verilmesi gereken bir yedek ID'si girmen gerekiyor!");
        }
        backup.fetch(backupID).then((backupInfos) => {
            const date = new Date(backupInfos.data.createdTimestamp);
            const yyyy = date.getFullYear().toString(), mm = (date.getMonth()+1).toString(), dd = date.getDate().toString();
            const formatedDate = `${yyyy}/${(mm[1]?mm:"0"+mm[0])}/${(dd[1]?dd:"0"+dd[0])}`;
            let embed = new Discord.MessageEmbed()
               .setAuthor("Yedekleme Bilgisi")
                .addField("<:rozetamaisminibilemedmsj:841725455447228416> Yedekleme ID", backupInfos.id, false)
               .addField("<:rozetamaisminibilemedmsj:841725455447228416> Sunucu ID", backupInfos.data.guildID, false)
                .addField("<:dosya:768792973734576138> Boyut", `${backupInfos.size} kb`, false)
                .addField("<:yt_v:841725470697193533> Oluşturulma tarihi", formatedDate, false)
               .setColor("GREEN");
           message.channel.send(embed);
        }).catch((err) => {
            return message.inlineReply("<:bakimda:798582408642560110> `"+backupID+"` Id' ye sahip bir yedek bulamadım.");
       });
        }
} 
exports.conf = {
    aliases: ["backup"]
}
exports.help = {
    name: 'yedek',
    description: 'Sunucunuzu yedekler.',
    usage: 'yedekleme oluştur/yükle/bilgi'
}