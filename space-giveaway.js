const Discord = require("discord.js");
const client = new Discord.Client();
const ayarlar = require("./ayarlar.json");
const db = require("croxydb");
const akinator = require("discord-tr-akinator");
const { MessageButton } = require("discord-buttons");
require("discord-buttons")(client);
require("discord-slider")(client);
const disbut = require("discord-buttons");
//require("./util/eventLoader")(client);
//deneme 
require("./inlinereply.js");
const prefix = "g.";
client.commands = new Discord.Collection();
const fetch = "node-fetch";
const fs = require("fs");

const { DiscordTogether } = require("discord-together");

client.discordTogether = new DiscordTogether(client);


const path = require("path");

const { GiveawaysManager } = require("discord-giveaways");
const manager = new GiveawaysManager(client, {
  storage: "./çekilişler.json",
  updateCountdownEvery: 30000,
  default: {
    botsCanWin: false,
    embedColor: "GREEN",
    embedColorEnd: "RED", 
    reaction: "🎉"
  }
});

client.giveawaysManager = manager;

fs.readdir("./Komutlar/", (error, f) => {
  if (error) {
    return console.error(error);
  }
  let commandes = f.filter(f => f.split(".").pop() === "js");
  if (commandes.length <= 0) {
    return console.log("Aucune commande trouvée !");
  }

  commandes.forEach(f => {
    let commande = require(`./Komutlar/${f}`);
    console.log(`🚀 ${f} komut yüklendi!`);
    client.commands.set(commande.help.name, commande);
  });
});

fs.readdir("./events/", (error, f) => {
  if (error) {
    return console.error(error);
  }
  console.log(`🎉 ${f.length} event!`);

  f.forEach(f => {
    let events = require(`./events/${f}`);
    let event = f.split(".")[0];
    client.on(event, events.bind(null, client));
  });
});

client.on("message", message => {
  if (message.channel.type === "dm") return;
});

client.login(process.env.TOKEN);

client.on("message", msg => {
  var dm = client.channels.cache.get("802136284382232597");

  if (msg.channel.type === "dm") {
    if (msg.author.id === client.user.id) return;

    const botdm = new Discord.MessageEmbed()

      .setTitle(`<a:yildiz:804253377907130389> Yeni Bir Mesajım Var`)

      .setTimestamp()

      .setColor("RANDOM")

      .setThumbnail(`${msg.author.avatarURL()}`)

      .addField("Gönderen", msg.author.tag)

      .addField("Gönderen ID", msg.author.id)

      .addField("Gönderilen Mesaj", msg.content);

    dm.send(botdm);
  }

  if (msg.channel.bot) return;
});

client.on("message", async message => {
  const request = require("node-superfetch");

  const db = require("croxydb");

  const ms = require("parse-ms");

  let cooldown = 1000;

  let sure = await db.fetch(`goldsure_${message.author.id}`);

  let kisi = db.fetch(`gold_${message.author.id}`);

  if (kisi == "gold") {
    if (sure !== null && cooldown - (Date.now() - sure) > 0) {
      let time = ms(cooldown - (Date.now() - sure));
    } else {
      if (message.author.bot) return;

      if (message.content.length > 1) {
        db.set(`goldsure_${message.author.id}`, Date.now());

        const goldmesaj = new Discord.MessageEmbed()

          .setDescription(
            `**Bir Gold Üye Belirdi <a:hita_sweaty:804253355178328144>** <@${message.author.id}> **Hizaya Geçin**`
          )

          .setColor("GOLD");

        message.channel.send(goldmesaj).then(message => message.delete(30000)); //Mesajı silme süresi MS olarak kendinize göre ayarlayabilirsiniz
      }
    }
  } else if (kisi == undefined) {
  }

  if (!kisi) return;
});

client.on("message", async (msg, member, guild) => {
  let saasm = db.fetch(`saasm_${msg.guild.id}`) 
  let i = await db.fetch(`saas_${msg.guild.id}`);
  if (i === "açık") {
    if (msg.content.toLowerCase() === "sa") {
      //if (msg.content.toLowerCase() === 'Sa') {
      msg.inlineReply(`${saasm || "Aleyküm Selam Hoşgeldin Kankam <a:nrp:821434879539281931>"}`);
    }
  }
});

client.on("message", async (msg, member, guild) => {
  let i = await db.fetch(`saase_${msg.guild.id}`);
  if (i === "açık") {
    if (msg.content.toLowerCase() === "sa") {
      //if (msg.content.toLowerCase() === 'Sa') {
      msg.react("🅰️");
      msg.react("🇸");
    }
  }
});

client.on("message", async message => {
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || ayarlar.prefix;
  let kullanıcı = message.mentions.users.first() || message.author;
  let afkdkullanıcı = await db.fetch(`afk_${message.author.id}`);
  let afkkullanıcı = await db.fetch(`afk_${kullanıcı.id}`);
  let sebep = afkkullanıcı;
  if (message.author.bot) return;
  if (message.content.includes(`${prefix}afk`)) return;
  if (message.content.includes(`<@${kullanıcı.id}>`)) {
    if (afkdkullanıcı) {
      message.channel.send(
        `<:anket:841725447511474236> <@${message.author.id}> Sohbete yazı yazdığın için afk modundan çıkış yapıldı.`
      );
      db.delete(`afk_${message.author.id}`);
    }
    if (afkkullanıcı)
      return message.channel.send(
        `${message.author}\`${kullanıcı.tag}\` şu anda AFK. \n Sebep : \`${sebep}\``
      );
  }
  if (!message.content.includes(`<@${kullanıcı.id}>`)) {
    if (afkdkullanıcı) {
      message.channel.send(
        `<:anket:841725447511474236> <@${message.author.id}> Sohbete yazı yazdığın için afk modundan çıkış yapıldı.`
      );
      db.delete(`afk_${message.author.id}`);
    }
  }
});

client.on("message", async message => {
  const db = require("croxydb");
  const ai = require("@codare/codare.ai");
  let kanal = db.fetch(`yapayzekakanal_${message.guild.id}`);
  if (!kanal) return;
  if (message.channel.id !== kanal) return;
  if (message.author.bot == true) return;
  let soru = message.content;
  message.channel.startTyping();
  ai.sor(soru).then(iugur => {
    setTimeout(function() {
      return message.inlineReply(iugur);
    }, 1000);
    message.channel.stopTyping();
  });
});



client.on("message", async message => {
  let gold = db.fetch(`gold_${message.author.id}`);
  if (gold === "gold") {
    if (message.content.toLowerCase() === "sa") {
      message.inlineReply(
        "**Bir gold üye belirdi!. \nAleyküm selam Hoşgeldin Gold Üye.** "
      );
    } else {
      return;
    }
  }
});

const { MusicBot } = require("discord-music-system"); // Require the best package ever created on NPM (= require discord-music-system)

client.musicBot = new MusicBot(client, {
  ytApiKey: "AIzaSyA7lGm5Djntk9enu4l4hNLWhT2QF9K5ZRM",

  prefix: "g.", // Your bot prefix

  language: "en" // fr, en, es, pt
});

client.on("message", async message => {
  if (message.author.bot) {
    return;
  }

  client.musicBot.onMessage(message);
});

client.setMaxListeners(50);

client.on("message", async message => {
  if (message.content === "g.ytt") {
    if (message.member.voice.channel) {
      client.discordTogether
        .createTogetherCode(message.member.voice.channelID, "youtube")
        .then(async invite => {
          return message.inlineReply(
            `<a:check:844812514529509386> YouTube Together Başlatıldı! \n<:codesty_link:844468557605240862> ${invite.code}`
          );
        });
    }
  }
});

client.on("message", async message => {
  if (message.content === "g.poker") {
    if (message.member.voice.channel) {
      client.discordTogether
        .createTogetherCode(message.member.voice.channelID, "poker")
        .then(async invite => {
          return message.inlineReply(
            `<a:check:844812514529509386> Poker Başlatıldı! \n<:codesty_link:844468557605240862> ${invite.code}`
          );
        });
    }
  }
});

client.on("message", async message => {
  if (message.content === "g.chess") {
    if (message.member.voice.channel) {
      client.discordTogether
        .createTogetherCode(message.member.voice.channelID, "chess")
        .then(async invite => {
          return message.inlineReply(
            `<a:check:844812514529509386> Chess Başlatıldı! \n<:codesty_link:844468557605240862> ${invite.code}`
          );
        });
    }
  }
});

client.on("message", async message => {
  if (message.content === "g.betrayal") {
    if (message.member.voice.channel) {
      client.discordTogether
        .createTogetherCode(message.member.voice.channelID, "betrayal")
        .then(async invite => {
          return message.inlineReply(
            `<a:check:844812514529509386> Betrayal Başlatıldı! \n<:codesty_link:844468557605240862> ${invite.code}`
          );
        });
    }
  }
});

client.on("message", async message => {
  if (message.content === "g.fishing") {
    if (message.member.voice.channel) {
      client.discordTogether
        .createTogetherCode(message.member.voice.channelID, "fishing")
        .then(async invite => {
          return message.inlineReply(
            `<a:check:844812514529509386> Fishing Başlatıldı! \n<:codesty_link:844468557605240862> ${invite.code}`
          );
        });
    }
  }
});

client.on("clickButton", async button => {
  if (button.id === "click_to_function") {
    button.channel.send(`${button.clicker.user.tag} clicked button!`);
  }
});

client.on("message", async message => {
  if (message.content.startsWith(prefix + "denme")) {
    let button = new disbut.MessageButton()
      .setStyle("gray")
      .setLabel("My first button!")
      .setURL("https://google.com")
      .setID("clickto");

    return message.channel.send(`Ayo`, button);
  }
}); //

const btn1 = new MessageButton()
    .setLabel("Taş")
    .setID("(tkm)tas")
    .setStyle("green")
    .setDisabled(true),
  btn2 = new MessageButton()
    .setLabel("Kağıt")
    .setID("(tkm)kagit")
    .setStyle("blurple")
    .setDisabled(true),
  btn3 = new MessageButton()
    .setLabel("Makas")
    .setID("(tkm)makas")
    .setStyle("gray")
    .setDisabled(true);

client.on("clickButton", async button => {
  if (button.id === "(tkm)tas") {
    let sonuc;

    const embed = new Discord.MessageEmbed()
      .setTitle("Space Giveaway")
      .setColor("RANDOM")
      .setAuthor(
        button.message.author.tag,
        button.message.author.displayAvatarURL({ dynamic: true })
      );

    await button.defer();

    const ihtimaller = ["makas", "taş", "kağıt"];

    let random = ihtimaller[Math.floor(Math.random() * ihtimaller.length)];

    let botSecim = random
      .replace("taş", "Taş")
      .replace("kağıt", "Kağıt")
      .replace("makas", "Makas");

    let result = tkm("taş", random);

    if (result === "kazanma") {
      sonuc = `\`${button.clicker.user.tag}\` | <:calisiyor:798582407393312808> Kazandın! Seçimin: **Taş** - Botun Seçimi: **${botSecim}**`;

      embed.setDescription(sonuc);
    } else if (result === "kaybetme") {
      sonuc = `\`${button.clicker.user.tag}\` | <:bakimda:798582408642560110> Kaybettin! Seçimin: **Taş** - Botun Seçimi: **${botSecim}**`;

      embed.setDescription(sonuc);
    } else if (result === "esit") {
      sonuc = `\`${button.clicker.user.tag}\` | Berabere! Seçimin: **Taş** - Botun Seçimi: **${botSecim}**`;

      embed.setDescription(sonuc);
    }

    button.message.edit({
      buttons: [btn1, btn2, btn3],

      embed: embed
    });
  } else if (button.id === "(tkm)kagit") {
    let sonuc;

    const embed = new Discord.MessageEmbed()
      .setTitle("Space Giveaway")
      .setColor("RANDOM")
      .setAuthor(
        button.message.author.tag,
        button.message.author.displayAvatarURL({ dynamic: true })
      );

    await button.defer();

    const ihtimaller = ["makas", "taş", "kağıt"];

    let random = ihtimaller[Math.floor(Math.random() * ihtimaller.length)];

    let botSecim = random
      .replace("taş", "Taş")
      .replace("kağıt", "Kağıt")
      .replace("makas", "Makas");

    let result = tkm("kağıt", random);

    if (result === "kazanma") {
      sonuc = `\`${button.clicker.user.tag}\` | <:calisiyor:798582407393312808> Kazandın! Seçimin: **Kağıt** - Botun Seçimi: **${botSecim}**`;

      embed.setDescription(sonuc);
    } else if (result === "kaybetme") {
      sonuc = `\`${button.clicker.user.tag}\` | <:bakimda:798582408642560110> Kaybettin! Seçimin: **Kağıt** - Botun Seçimi: **${botSecim}**`;

      embed.setDescription(sonuc);
    } else if (result === "esit") {
      sonuc = `\`${button.clicker.user.tag}\` | Berabere! Seçimin: **Kağıt** - Botun Seçimi: **${botSecim}**`;

      embed.setDescription(sonuc);
    }

    button.message.edit({
      buttons: [btn1, btn2, btn3],

      embed: embed
    });
  } else if (button.id === "(tkm)makas") {
    let sonuc;

    const embed = new Discord.MessageEmbed()
      .setTitle("Space Giveaway")
      .setColor("RANDOM")
      .setAuthor(
        button.message.author.tag,
        button.message.author.displayAvatarURL({ dynamic: true })
      );

    await button.defer();

    const ihtimaller = ["makas", "taş", "kağıt"];

    let random = ihtimaller[Math.floor(Math.random() * ihtimaller.length)];

    let botSecim = random
      .replace("taş", "Taş")
      .replace("kağıt", "Kağıt")
      .replace("makas", "Makas");

    let result = tkm("makas", random);

    if (result === "kazanma") {
      sonuc = `\`${button.clicker.user.tag}\` | <:calisiyor:798582407393312808> Kazandın! Seçimin: **Makas** - Botun Seçimi: **${botSecim}**`;

      embed.setDescription(sonuc);
    } else if (result === "kaybetme") {
      sonuc = `\`${button.clicker.user.tag}\` | <:bakimda:798582408642560110> Kaybettin! Seçimin: **Makas** - Botun Seçimi: **${botSecim}**`;

      embed.setDescription(sonuc);
    } else if (result === "esit") {
      sonuc = `\`${button.clicker.user.tag}\` | Berabere! Seçimin: **Makas** - Botun Seçimi: **${botSecim}**`;

      embed.setDescription(sonuc);
    }

    button.message.edit({
      buttons: [btn1, btn2, btn3],

      embed: embed
    });
  }
});

function tkm(userAns, botAns) {
  let secim = userAns,
    botSecim = botAns;

  if (secim === "taş") {
    if (botSecim === "makas") {
      return "kazanma";
    } else if (botSecim === "kağıt") {
      return "kaybetme";
    }

    return "esit";
  } else if (secim === "kağıt") {
    if (botSecim === "taş") {
      return "kazanma";
    } else if (botSecim === "makas") {
      return "kaybetme";
    }

    return "esit";
  } else if (secim === "makas") {
    if (botSecim === "taş") {
      return "kaybetme";
    } else if (botSecim === "kağıt") {
      return "kazanma";
    }

    return "esit";
  }
}

client.on("message", async message => {
  if (message.content.startsWith(`g.akinator`)) {
    akinator(message, client);
  }
});


const discaudio = require("discaudio");
        client.on("message", async message=>{

        if(message.author.bot)return;

        if(message.channel.type === "dm")return;

        discaudio.music(message, client, "]")

        })



function extension(attachment) {

  let imageLink = attachment.split('.');

  let typeOfImage = imageLink[imageLink.length - 1];

  let image = /(jpg|jpeg|png|gif)/gi.test(typeOfImage);

  if (!image) return '';

  return attachment;

}

client.on('messageReactionAdd', async (message, messageReaction, user) => {

let kanal = db.fetch(`starboard_${message.guild.id}`);

if(user.bot) return;

const database = require('croxydb');

if(messageReaction.emoji.name === '⭐') {

/*if(messageReaction.count <= 1) return;*/

let starboardChannel = client.channels.cache.get(kanal);// id gir

if(!starboardChannel) return;

if(messageReaction.message.content == null) return user.send('You added a reaction to an old message.');

let emojiCheck;

let color;

if(messageReaction.count <= 7) {

emojiCheck = '⭐';

color = '#ffdf81';

};

if(messageReaction.count >= 8) {

emojiCheck = '🌟';

color = '#ffd65e';

};

if(messageReaction.count >= 14) {

emojiCheck = '✨';

color = '#ffc827';

};

if(messageReaction.count >= 24) {

emojiCheck = '💫';

color = '#ffc20c';

};

if(messageReaction.count >= 32) {

emojiCheck = '☄️';

color = '#ffc20c';

};

const embed = new Discord.MessageEmbed()

.setDescription(messageReaction.message.content)

.setFooter('ID: '+messageReaction.message.id)

.setTimestamp()

.setColor(color)

.setAuthor(messageReaction.message.author.tag, messageReaction.message.author.displayAvatarURL({ dynamic: true }));

let image = messageReaction.message.attachments.size > 0 ? await extension(messageReaction.message.attachments.array()[0].url) : '';

if(image) embed.setImage(image);

const gönderildi = await database.fetch(messageReaction.message.id);

if(gönderildi) {

const messageFetch = await starboardChannel.messages.fetch(gönderildi);

messageFetch.edit(`${emojiCheck || '⭐'} **${messageReaction.count}** | ${messageReaction.message.channel}`, embed)

} else {

starboardChannel.send(`${emojiCheck || '⭐'} **${messageReaction.count}** | ${messageReaction.message.channel}`, embed).then(asd => {

database.set(messageReaction.message.id, asd.id);

asd.react('⭐')

});

};

};

});

client.on('messageReactionRemove', async (message, messageReaction, user) => {

let kanal = db.fetch(`starboard_${message.guild.id}`);

if(user.bot) return;

const database = require('croxydb');

if(messageReaction.emoji.name === '⭐') {

let starboardChannel = client.channels.cache.get(kanal);

if(!starboardChannel) return;

if(messageReaction.message.content == null) return user.send('You added a reaction to an old message.');

if(messageReaction.count == 0) {

const ms = await database.fetch(messageReaction.message.id);

const öd = await starboardChannel.messages.fetch(ms);

öd.delete();

database.delete(messageReaction.message.id);

};

let emojiCheck;

let color;

if(messageReaction.count <= 7) {

emojiCheck = '⭐';

color = '#ffdf81';

};

if(messageReaction.count >= 8) {

emojiCheck = '🌟';

color = '#ffd65e';

};

if(messageReaction.count >= 14) {

emojiCheck = '✨';

color = '#ffc827';

};

if(messageReaction.count >= 24) {

emojiCheck = '💫';

color = '#ffc20c';

};

if(messageReaction.count >= 32) {

emojiCheck = '☄️';

color = '#ffc20c';

};

const embed = new Discord.MessageEmbed()

.setDescription(messageReaction.message.content)

.setFooter('ID: '+messageReaction.message.id)

.setTimestamp()

.setColor(color)

.setAuthor(messageReaction.message.author.tag, messageReaction.message.author.displayAvatarURL({ dynamic: true }));

let image = messageReaction.message.attachments.size > 0 ? await extension(messageReaction.message.attachments.array()[0].url) : '';

if(image) embed.setImage(image);

const gönderildi = await database.fetch(messageReaction.message.id);

if(gönderildi) {

const messageFetch = await starboardChannel.messages.fetch(gönderildi);

messageFetch.edit(`${emojiCheck || '⭐'} **${messageReaction.count}** | ${messageReaction.message.channel}`, embed)

};

};

});
