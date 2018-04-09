const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let member = message.mentions.members.first();
  let invited = member.invite.uses
  let invitedEmbed = new Discord.RichEmbed()
  .setDescription(`${message.author.id} a invitat ${invited} membrii`);

  message.channel.send(invitedEmbed)
}

module.exports.help = {
  name: "invited"
}
