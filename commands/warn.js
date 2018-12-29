const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
        let wUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        let wEmbed = new Discord.RichEmbed()
        .setTitle('Commanda: o!warn')
        .setDescription('**Descriere:** Avertizează un membru\n**Folosire:** o!warn @membru [motiv]\n**Exemplu:** o!warn @qLau motiv opțional')
        if(!wUser) return message.channel.send({embed:wEmbed})
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Nu ai permisiunile necesare.");
        if(wUser.hasPermission("ADMINISTRATOR")) return message.channel.send(":no_entry_sign: Nu poți face asta unui administrator!");
        let wReason = args.join(" ").slice(22)
        if(!wReason) wReason = "fara motiv"

        message.channel.send(`**${wUser} a fost avertizat!**`);
        wUser.send(`Ai primit warn pe **${message.guild.name}** de la **${message.author.tag}** cu motivul ${wReason}`)
}

module.exports.help = {
    name: "warn"
}
