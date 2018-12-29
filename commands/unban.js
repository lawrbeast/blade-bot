const Discord = require("discord.js")

exports.run = (bot, message, args) => {
    bot.unbanAuth = message.author;
    const user = args[0]
    let sicon = message.guild.iconURL;
    const modlog = bot.channels.find('name', 'logs');
    if (!modlog) return message.reply('Nu gasesc channelul **logs**!');
    let uEmbed = new Discord.RichEmbed()
    .setTitle('Comanda: o!unban')
    .setDescription('**Descriere:** Debanează un membru\n**Folosire:** o!unban 257491128671141888\n**Important**: Funcționează DOAR cu ID.')
    if (!user) return message.channel.send({embed:uEmbed}).catch(console.error);
    message.guild.unban(user)
    let unbanEmbed = new Discord.RichEmbed()
    .setColor("#cc0000")
    .setTitle(`Membru Debanat`)
    .setDescription(`<@${user}> a fost debanat!`)
    .setAuthor(message.guild.name, sicon)
    .setTimestamp()
    .setFooter(`ID: ${user}`)
    modlog.send({embed:unbanEmbed})
    message.channel.send(`<@${user}> a fost debanat!`)
};

exports.help = {
  name: "unban"
}
