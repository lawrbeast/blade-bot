const Discord = require("discord.js");

module.exports.run = (bot, message, args) => {
  let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("Nu ai permisiunile necesare.");
  if(bUser.hasPermission("BAN_MEMBERS")) return message.channel.send(":no_entry_sign: Nu poti face asta unui administrator!");
  if(!bUser) return message.channel.send("Nu ai mentionat un membru\n**Exemplu: w!ban @membru.**").then(msg => {msg.delete(5000)});
  let bReason = args.join(" ").slice(22);
  if(!bReason) bReason = "fara motiv"

  let banEmbed = new Discord.RichEmbed()
  .setDescription(`Ban Info | Case 筐｢ ${bUser}`)
  .setColor("#0a9678")
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
