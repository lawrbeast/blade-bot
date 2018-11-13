const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
        let wUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Nu ai permisiunile necesare.");
        if(!wUser) return message.channel.send("Nu ai menționat un membru\n**Exemplu: o!warn @user**").then(msg => {msg.delete(5000)});
        let wReason = args.join(" ").slice(22)
        if(!wReason) wReason = "fara motiv"
        if(wUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Nu poți face asta unui administrator.");

        message.channel.send(`**${wUser} a fost avertizat!**`);
        wUser.send(`Ai primit warn pe **${message.guild.name}** de la **${message.author.tag}** cu motivul ${wReason}`)
}

module.exports.help = {
    name: "warn"
}
