const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  let berrEmbed = new Discord.RichEmbed()
  .setTitle ("EROARE!")
  .setColor("#f90000")
  .addField("Te rog sa folosesti:", "!ban @User Motiv");
  if(!bUser) return message.channel.send(berrEmbed).then(msg => {msg.delete(5000)});
  let bReason = args.join(" ").slice(22);
  if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("🚫 Permisiunile lispesc, nu pot face asta!");
  if(bUser.hasPermission("BAN_MEMBERS")) return message.channel.send("🚫 Acel user este un admin/mod, nu pot face asta!");

  let banEmbed = new Discord.RichEmbed()
  .setDescription(`New Case | REPORT |`)
  .setColor("#f90000")
  .addField("User", bUser, true)
  .addField("Moderator", message.author, true)
  .addField("Motiv", bReason, true)
  .setFooter(`ID:${message.member.id} ▪ ${message.guild.name}`);

  let incidentchannel = message.guild.channels.find(`name`, "mod-logs");
  if(!incidentchannel) return message.channel.send("Nu gasesc channel-ul `mod-logs`");

  message.guild.member(bUser).ban(bReason);
  incidentchannel.send(banEmbed);
}

module.exports.help = {
  name: "ban"
}
