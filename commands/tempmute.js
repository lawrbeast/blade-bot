const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {
    let member = message.mentions.members.first();
    if(!member) return message.reply("Te rog sa specifici membrul.");
    let muteRole = message.guild.roles.find("name", "Muted");
    if(!muteRole) return message.reply("Te rog sa creezi rol-ul de Muted");
    let params = message.content.split(" ").slice(1);
    let time = params[1];
    if(!time) return message.reply("Nu ai specificat timp-ul. (1s,1m,1d,1y)");
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("🚫 Permisiunile lipsesc, nu pot face asta!");
    if(member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("🚫 Acel user este un admin/mod, nu pot face asta!");

    member.addRole(muteRole.id);
    let muteEmbed = new Discord.RichEmbed()
    .setDescription(`MUTE INFO`)
    .setColor("#f90000")
    .addField("Membru", member, true)
    .addField("Moderator", message.author, true)
    .addField("Durata", time, true)
    .setFooter(`ID:${message.member.id} ▪ ${message.guild.name}`);
    let muteChannel = message.guild.channels.find(`name`, "mod-logs");
      muteChannel.send(muteEmbed)

    setTimeout(function() {
      member.removeRole(muteRole.id)
      let unmuteEmbed = new Discord.RichEmbed()
      .setDescription(`UNMUTE INFO`)
      .setColor("#f90000")
      .addField("Membru", member, true)
      .addField("Moderator", message.author, true)
      .addField("Motiv", "Auto", true)
      .setFooter(`ID:${message.member.id} ▪ ${message.guild.name}`);
      let unmuteChannel = message.guild.channels.find(`name`, "mod-logs");
        unmuteChannel.send(unmuteEmbed)
    }, ms(time));

}

module.exports.help = {
    name: "mute"
}
