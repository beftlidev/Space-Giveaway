const Discord = require("discord.js");

const { MessageButton } = require("discord-buttons");

exports.run = async (client, message, args) => {
  let btn1 = new MessageButton()
    .setLabel("Taş")
    .setID("(tkm)tas")
    .setStyle("green");

  let btn2 = new MessageButton()
    .setLabel("Kağıt")
    .setID("(tkm)kagit")
    .setStyle("blurple");

  let btn3 = new MessageButton()
    .setLabel("Makas")
    .setID("(tkm)makas")
    .setStyle("gray");

  const embed = new Discord.MessageEmbed()
    .setTitle("Space Giveaway")
    .setDescription("Aşağıdaki butonlar ile seçim yapabilir' sin.")
    .setColor("RANDOM");

  message.channel.send({
    embed: embed,

    buttons: [btn1, btn2, btn3]
  });
};

exports.conf = {
  enabled: true,

  guildOnly: false,

  aliases: [],

  permLevel: 0
};

exports.help = {
  name: "tkm",

  description: "taş kağıt makas oyunu",

  usage: "tkm"
};
