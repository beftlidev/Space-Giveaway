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
      
             if(cmd.conf.uyelık === true) {

        let iugur = message.author.id

        let sorgulama = client.roles.cache.get("853649931448483840").members.cache.get(iugur)

        if(!sorgulama) return message.inlineReply('<:bakimda:798582408642560110> Bu Komudu kullanabilmek için premium üye olmanız lazım! \n<:codesty_support:844468556430704640> Destek için [Destek sunucum](https://discord.gg/KZfAEjrPUF)')

        }
     
    talkedRecently.add(message.author.id);

      setTimeout(() => {

      talkedRecently.delete(message.author.id);

    }, 5000);

    cmd.run(client, message, params)

  }

};