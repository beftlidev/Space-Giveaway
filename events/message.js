const ayarlar = require("../ayarlar.json");
const talkedRecently = new Set();
const Discord = require("discord.js") 
const client = new Discord.Client() 

const db = require("croxydb") 

module.exports = async (client, message) => {

  

  let prefix;

  

  if (db.has(`prefix_${message.guild.id}`) === true) {

    prefix = db.fetch(`prefix_${message.guild.id}`)

  }

  if (db.has(`prefix_${message.guild.id}`) === false) {

    prefix = ayarlar.prefix

  }


    if (message.author.bot) return;

  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0].slice(prefix.length);

  let params = message.content.split(" ").slice(1);

  let cmd;
  
    if (client.commands.has(command)) {

    cmd = client.commands.get(command);

  } else if (client.aliases.has(command)) {

    cmd = client.commands.get(client.aliases.get(command));

  }
     

    if (talkedRecently.has(message.author.id)) {

    return message.inlineReply(`<:bakimda:798582408642560110> **|** Lütfen komutları **5 saniye** aralıkla kullan!`);

  }
    if (cmd) {
      
      
      if (db.get(`user_${message.author.id}.şartlar`) != 'kabul edilmiş') {
     const warningEmbed = new Discord.MessageEmbed()
    
     .setColor('RED')
      .setDescription(`<:codesty_bell:844468553980706816> **Hey! Bu botu kullanabilmek için şartları onaylamanız gerekmektedir.**\n\n<:codesty_support:844468556430704640> **<:rules:799571949286064159>** butonuna basarak botun kurallarına bakabilirsin.`)
      const termsOfService = new Discord.MessageEmbed()
      .setColor('RED')
      .setDescription(`
<:codesty_join:844468549417697350> **Bir bug vs bulur iseniz lütfen [Destek Sunucumuz](https://discord.gg/KZfAEjrPUF)' da bildirin.**
<:codesty_join:844468549417697350> **Lütfen bota zarar verecek spam vs gibi şeyler yapmayın.**
<:codesty_join:844468549417697350> **Botu başka botlar ile lütfen buga sokmayın.**
<:codesty_join:844468549417697350> **Botta bir hata olur ise lütfen onu botu bozmak vs için kullanmayın.**
<:codesty_join:844468549417697350> **Lütfen bottaki tüm komutları yavaş kullanın.**
<:codesty_support:844468556430704640> **Kuralları kabul etmek için <:codesty_check:844468545877442560> basabilir' sin.**
> <:codesty_link:844468557605240862> [Destek Sunucum](https://discord.gg/KZfAEjrPUF) **|** [Davet et](https://discord.com/oauth2/authorize?client_id=765207268408033322&scope=bot&permissions=805314622) **|** [Oy ver](https://top.gg/bot/765207268408033322) 
      `)
      .setTitle(`${client.user.username} **|** Kurallar`);
            return message.channel.send(warningEmbed).then(async rifleman => {
        await rifleman.react('<:rules:799571949286064159>');
        await rifleman.awaitReactions((youth, anasia) => youth.emoji.id == '799571949286064159' && anasia.id == message.author.id, { max: 1 })
        .then(async () => {
          await rifleman.reactions.removeAll();
          await rifleman.edit(termsOfService).then(async leavemealone => {
            await leavemealone.react('<:codesty_check:844468545877442560>');
            await leavemealone.awaitReactions((youth, anasia) => youth.emoji.id == '844468545877442560' && anasia.id == message.author.id, { max: 1 })
            .then(async () => {
              await leavemealone.reactions.removeAll();
              await rifleman.edit(termsOfService.setDescription('<:codesty_check:844468545877442560> **Kuralları kabul ettiniz. Artık botu kullanabilirsin!**'));
              await db.set(`user_${message.author.id}.şartlar`, 'kabul edilmiş');
            });
          });
        });
      })
    };

    talkedRecently.add(message.author.id);

      setTimeout(() => {

      talkedRecently.delete(message.author.id);

    }, 5000);

    cmd.run(client, message, params)

  }

};