const Discord = require("discord.js");

module.exports.run = (bot, message, args) => {
  let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  let bEmbed = new Discord.RichEmbed()
  .setTitle('Comanda: o!ban')
  .setDescription('**Descriere:** Banează un membru\n**Folosire:** o!ban @membru [motiv]\n**Exemplu:** o!ban @qLau motiv opțional')
  if(!bUser) return message.channel.send({embed:bEmbed})
  if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("Nu ai permisiunile necesare.");
  if(bUser.hasPermission("BAN_MEMBERS")) return message.channel.send(":no_entry_sign: Nu poți face asta unui administrator!");
  let bReason = args.join(" ").slice(22);
  if(!bReason) bReason = "fara motiv"

  let banEmbed = new Discord.RichEmbed()
  .setDescription(`Ban Info | Case 筐｢ ${bUser}`)
  .setColor("#cc0000")
  .addField("User", bUser, true)
  .addField("Moderator", message.author.username, true)
  .addField("Motiv", bReason, true)
  .setFooter(`ID:${bUser.id}`)
  .setTimestamp(new Date());

  let banchannel = message.guild.channels.find(`name`, "logs");

  message.guild.member(bUser).ban(bReason);
  banchannel.send({embed:banEmbed});
}

module.exports.help = {
  name: "ban"
}
