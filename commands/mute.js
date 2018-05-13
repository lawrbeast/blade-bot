const Discord = require("discord.js");
const ms = require("ms");

module.exports.run =  (bot, message, args) => {
    let member = message.mentions.members.first();
    if(!member) return message.reply("Nu ai specificat membrul.");
    let muteRole = message.guild.roles.find("name", "Muted");
    if(!muteRole) return message.reply("Nu ai creat role-ul Muted.");
    let params = message.content.split(" ").slice(1);
    let time = params[1];
    if(!time) return message.reply("Nu ai specificat timpul.");
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(":no_entry_sign: Nu aveți permisiunea pentru a face asta!");
    if(member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(":no_entry_sign: Acest membru este un moderator sau un administrator!");

    member.addRole(muteRole.id);
    let muteEmbed = new Discord.RichEmbed()
	.setFooter(`${message.guild.name}`, `${message.guild.iconURL}`)
    .setDescription(`MUTE INFO`)
    .setColor("#bc2731")
    .addField("Membru", member, true)
    .addField("Moderator", message.author, true)
    .addField("Durata", time, true)
    let muteChannel = message.guild.channels.find(`name`, "mod-logs");
      muteChannel.send({embed:muteEmbed})

    setTimeout(function() {
      member.removeRole(muteRole.id)
      let unmuteEmbed = new Discord.RichEmbed()
	  .setFooter(`${message.guild.name}`, `${message.guild.iconURL}`)
      .setDescription(`UNMUTE INFO`)
      .setColor("#bc2731")
      .addField("Membru", member, true)
      .addField("Moderator", message.author, true)
      .addField("Motiv", "Auto", true)
      let unmuteChannel = message.guild.channels.find(`name`, "mod-logs");
        unmuteChannel.send({embed:unmuteEmbed})
    }, ms(time));

}

module.exports.help = {
    name: "mute"
}
