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

const AutoPoster = require("topgg-autoposter");
const ap = AutoPoster("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc2NTIwNzI2ODQwODAzMzMyMiIsImJvdCI6dHJ1ZSwiaWF0IjoxNjE0MzY5NTkwfQ.WC8doV3KEhoWAInJEI4sOPMAJ-nDzWMfJgp8Tb0jqsI", client);
ap.on("posted", () => {
  console.log("✨ Top.gg bilgiler gönderildi!");
});

const BFD = require("bfd-api");
const bfd = new BFD(
  "9e997ad5125d5f2d4dfdcd1ebf9322165fb610d142c8a9da9257f5a0565ac74cb3a91a722357120b5efdd90f30915b0e71113d66d47b3dbc953e131371f3aba4"
);
const info = bfd.hasVerified("765207268408033322");
console.log(info);

const path = require("path");

const { GiveawaysManager } = require("discord-giveaways");
const manager = new GiveawaysManager(client, {
  storage: "./çekilişler.json",
  updateCountdownEvery: 10000,
  default: {
    botsCanWin: false,
    embedColor: "RANDOM",
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

client.on('messageDelete', async message => {

  if(message.author.bot || !message.content) return;
  db.push(`snipe_${message.guild.id}`, {
    author: message.author,
    authorTAG: message.author.tag,
    authorID: message.author.id,
    authorUSERNAME: message.author.username,
    authorDISCRIMINATOR: message.author.discriminator,
    messageID: message.id,
    messageCHANNEL: message.channel,
    messageCHANNELID: message.channel.id,
    messageCONTENT: message.content,
    messageCREATEDAT: message.createdTimestamp
  });
});

