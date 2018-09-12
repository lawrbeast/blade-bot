const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;
    let string = '';
    bot.guilds.forEach(guild => {
    string += ">>" guild.name + '\n';})
    let bt = bot.user.username;
    let botembed = new Discord.RichEmbed()
        .setColor("#f71d54")
        .addField("Lista Servere", string)
        .setTimestamp()
        .setFooter("Cerut de: " + message.author.username, message.author.avatarURL);
    message.channel.send({embed:botembed});
}

module.exports.help = {
    name: "serverlist"
}
