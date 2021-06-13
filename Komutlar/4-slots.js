const db = require('croxydb');

const ms = require('parse-ms');
const talked = require("ms") 
const { MessageEmbed } = require('discord.js');

const settings = require("../Settings/economy.json");

const { parseZone } = require('moment');

exports.run = async (client, message, args) => {

 
let banka = await db.get(`hesapdurumu_${message.author.id}`)

if (!banka) return message.channel.send(new MessageEmbed().setDescription(`${message.author} Bilgilerini Kaydetmem İçin Bir Banka Hesabı Oluşturmalısın!`))

  

let bakiye = await db.get(`money_${message.author.id}`);

if(bakiye < 3000) return message.channel.send(new MessageEmbed().setDescription(`<:bakimda:798582408642560110> Kazanmak İçin En Az **3000 ${settings.para.parabirimi || "Coin"}** Sahip Olmalısın.`))

if(!args[0]) return message.channel.send(new MessageEmbed().setDescription(`<:bakimda:798582408642560110> Ortaya Bir **${settings.para.parabirimi || "Coin"}** Koymalısın!`))

if(isNaN(args[0])) return message.channel.send(new MessageEmbed().setDescription(`<:bakimda:798582408642560110> Lütfen Rakamsal Değer Yazınız.`))

if(args[0] > bakiye) return message.channel.send(new MessageEmbed().setDescription(`<:bakimda:798582408642560110> Girdiğin Miktar Çok Fazla Bankanda Okadar Para Bulunmuyor`))

  if(bakiye < 50000) return message.channel.send("En fazla 50000 TL Koymalısın")
  
const slots = ['🍌', '🥥', '🍎', '🍒', '🍋'];

var ramo1 = slots[Math.floor(Math.random() * slots.length)];

var ramo2 = slots[Math.floor(Math.random() * slots.length)];

var ramo3 = slots[Math.floor(Math.random() * slots.length)];

if (ramo1 === ramo2 && ramo1 === ramo3) {

    message.channel.send(`<a:bytcec:818712678146113567> ${message.author} **${args[0]} ${settings.para.parabirimi || "Coin"}** Ortaya Koydu Meyveler Dönüyor Ve Sonuç...`).then(z => {

        setTimeout(function(){

            z.edit(`<a:hita_sweaty:804253355178328144> ${message.author} Heyt!, Kazandın ${ramo1} : ${ramo2} : ${ramo3} Bu Yüzden Banka Hesabına **${args[0] * 2} ${settings.para.parabirimi || "Coin"}** Yatırdım.`)

        },3000)

        db.add(`money_${message.author.id}`, +args[0] * 2)

    })

} else {

    message.channel.send(`<a:bytcec:818712678146113567> ${message.author} **${args[0]} ${settings.para.parabirimi || "Coin"}** Ortaya Koydu Meyveler Dönüyor Ve Sonuç...`).then(z => {

        setTimeout(function(){

            z.edit(`<:dnd:799570784397950988> ${message.author} Maalesef!, Kaybettin ${ramo1} : ${ramo2} : ${ramo3} Bu Yüzden Banka Hesabından **${args[0]} ${settings.para.parabirimi || "Coin"}** Kestim.`)

        },3000)

        db.add(`money_${message.author.id}`, -args[0])

    })

}

} 

exports.conf = {

enabled: true, 

guildOnly: true, 

aliases: ['slots',"slot"],

permLevel: 0 

};

exports.help = {

name: 'slot'

};