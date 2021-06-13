const { MessageEmbed } = require("discord.js");

const { Spawn } = require("pokecord");

 

module.exports.run = async (client, message, args) => {

 

    const pokemon = await Spawn().catch(e => {});

    if (!pokemon) return message.inlineReply("Opps! Bir şeyler ters gitti.");

    const filter = m => m.author.id === message.author.id;

 

    const embed = new MessageEmbed()

        .setAuthor("Guess the pokemon")

        .setColor("#FFFF00")

        .setImage(pokemon.imageURL);

    

    await message.inlineReply(embed);

 

    message.channel.awaitMessages(filter, {

        max: 1,

        error: ["time"],

        time: 15000

    })

    .then(collected => {

        const m = collected.first();

        if (!m.content || m.content.toLowerCase() !== pokemon.name.toLowerCase()) return message.inlineReply(`<:bakimda:798582408642560110> | Yanlış tahmin! Cevap şuydu: **${pokemon.name}**.`);

        return message.channel.send(`<:calisiyor:798582407393312808> | Doğru Tahmin! `);

    })

    .catch(() => {

        message.inlineReply(`<:bakimda:798582408642560110> | Zamanında cevap vermedin. Doğru cevap **${pokemon.name}**!`);

    });

 

};

 

module.exports.help = {

    name: "pokemon",

    aliases: ["guessthepokemon"]

};