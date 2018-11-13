const Discord = require("discord.js");

module.exports.run = (bot, message, args) => {
  let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("Nu ai permisiunile necesare.");
  if(!bUser) return message.channel.send("Te rog sa mentionezi un user\n**Exemplu: w!ban @user.**").then(msg => {msg.delete(5000)});
  let bReason = args.join(" ").slice(22);
  if(!bReason) return message.channel.send("**Te rog sa mentionezi un motiv\nExemplu: w!ban @user Motiv.**");
  if(bUser.hasPermission("BAN_MEMBERS")) return message.channel.send("圻 Acel user este un admin/mod, nu pot face asta!");

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
