const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
        let wUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

        let warnuEmbed = new Discord.RichEmbed()
        .setTitle ("~**Comanda Warn**~")
        .setColor("#0a9678")
        .addField("Te rog sa folosesti 竊ｴ", "!warn @User Motiv")
        .setFooter("~Comanda Warn~");

        let cfu = new Discord.RichEmbed()
        .setTitle ("Eroare!")
        .setColor("#0a9678")
        .addField("User negasit", "Nu gasesc acel user!");
        if(!wUser) return message.channel.send(cfu).then(msg => {msg.delete(5000)});
        let wReason = args.join(" ").slice(22);
        if(!wReason){
                let wReason = "Fără motiv!"
        };
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Nu ai permisiunile necesare.");
        if(wUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Nu poti face asta unui administrator.");

        message.channel.send(`**${wUser} a fost avertizat!**`);
        wUser.send(`Ai primit warn pe **${message.guild.name}** de la **${message.author.tag}** cu motivul **${wReason}**`)
}

module.exports.help = {
    name: "warn"
}
