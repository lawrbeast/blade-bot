
const Discord = require("discord.js");

module.exports.run = (bot, message, args) => {
 //!clear 15
 let mspEmbed = new Discord.RichEmbed()
 .setDescription("Nu poti face asta deoarece nu ai permisiunile necesare.")
 .setColor("#bc2731")
 if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send({embed:mspEmbed});
 let clearEmbed = new Discord.RichEmbed()
 .setTitle('Comanda: o!clear')
 .setDescription('**Descriere:** Sterge un numar de mesaje\n**Folosire:** o!clear [numar mesaje]\n**Exemplu:** o!clear 15')
 if(!args[0]) return message.channel.send({embed:clearEmbed});
 message.channel.bulkDelete(args[0]);
}
module.exports.help = {
    name: "clear"
}
