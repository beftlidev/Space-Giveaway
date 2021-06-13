const exec = require('child_process').exec;

const Discord = require('discord.js');



module.exports.run = async(bot, message, args, level) => {//renata#0001

    if(message.author.id !== "753842258457002036") return   message.inlineReply(":no_entry: Bu Komutu Sadece iUgur Kullanabilir.");

    exec(`${args.join(' ')}`, (error, stdout) => {

      const response = (error || stdout);

      let embed = new Discord.MessageEmbed()

      .setTitle(`Exec`)

      .addField("<a:WindowsBusy:798582405627773069> Giriş", `\`\`\`asciidoc\n${args.join(" ")}\n\`\`\``)

      .addField("\<:online:799541183453855754> Çıkış", `\`\`\`js\n${response}\n\`\`\``)

      .setColor('GOLD');

    

  

         

      message.inlineReply({embed});

         } );

}

exports.help = {

name: "exec" 

}

exports.config = {

  aliases: ['ex'],

  name: "exec"

}