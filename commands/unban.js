const Discord = require("discord.js")

exports.run = (bot, message, args) => {
    bot.unbanAuth = message.author;
    const user = args[0]
    if(!message.author.hasPermission("BAN_MEMBERS")) return message.channel.send("圻 Permisiunile lispesc, nu pot face asta!");
    const modlog = bot.channels.find('name', 'logs');
    if (!modlog) return message.reply('Nu gasesc channelul **logs**!');
    if (!user) return message.reply('Exemplu: d!unban ID & USER#1234.').catch(console.error);
    message.guild.unban(user)
    let unbanEmbed = new Discord.RichEmbed()
    .setColor("#cc0000")
    .setTitle(`Membru Debanat`)
    .setDescription(`<@${user}> a fost debanat!`)
    .setThumbnail(user.displayAvatarURL)
    .setTimestamp()
    .setFooter(`${message.guild.name}`, `${message.guild.iconURL}`)
    modlog.send({embed:unbanEmbed})
    message.reply(`<@${user}> a fost debanat!`)
};

exports.help = {
  name: "unban"
}
