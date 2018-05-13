const Discord = require("discord.js");

module.exports.run = (bot, message, args) => {
 //!clear 15
 let mspEmbed = new Discord.RichEmbed()
 .setFooter(`${message.guild.name}`, `${message.guild.iconURL}`)
 if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(":no_entry_sign: Nu aveți permisiunea pentru a face asta!");
 let clearEmbed = new Discord.RichEmbed()
 .setFooter(`${message.guild.name}`, `${message.guild.iconURL}`)
 .setColor("#bc2731")
 .addField("Folosește ", "w!clear număr mesaje");
 if(!args[0]) return message.channel.send(clearEmbed);
 message.channel.bulkDelete(args[0]).then(() => {
     message.channel.send.then(msg => msg.delete(10000));
 });
}
module.exports.help = {
    name: "clear"
}
