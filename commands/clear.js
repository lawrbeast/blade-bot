const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
 //!clear 15
 let mspEmbed = new Discord.RichEmbed()
 .setTitle("Erroare!")
 .addField("Nu ai permisiunea:", "MANAGE MESSAGES!")
 .setColor("#f90000")
 .setFooter(`Blade's Clear`, bot.user.displayAvatarURL);
 if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(mspEmbed);
 let clearEmbed = new Discord.RichEmbed()
 .setTitle("Eroare!")
 .setColor("#f90000")
 .addField("Te rog sa folosesti:", "!clear <nr.mesaje(100max.)>");
 if(!args[0]) return message.channel.send(clearEmbed);
 message.channel.bulkDelete(args[0]).then(() => {
     message.channel.send(`:white_check_mark:`).then(msg => msg.delete(10000));
 });
}
module.exports.help = {
    name: "clear"
}
