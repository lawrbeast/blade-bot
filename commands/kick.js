const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
        let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

        let kickuEmbed = new Discord.RichEmbed()
        .setTitle ("~**Comanda Kick**~")
        .setColor("#f90000")
        .addField("Te rog sa folosesti ↴", "!kick @User Motiv")
        .setFooter("~Comanda Kick~");

        let cfu = new Discord.RichEmbed()
        .setTitle ("Eroare!")
        .setColor("#f90000")
        .addField("User negasit", "Nu gasesc acel user!");
        if(!kUser) return message.channel.send(cfu).then(msg => {msg.delete(5000)});
        let kReason = args.join(" ").slice(22);
        if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send("🚫 Permisiunile lipsesc, nu pot face asta!");
        if(kUser.hasPermission("MANAGE_MEMBERS")) return message.channel.send("🚫 Acel user este un admin/mod, nu pot face asta!");

        let kickEmbed = new Discord.RichEmbed()
        .setDescription(`New Case | KICK |`)
        .setColor("#f90000")
        .addField("User", kUser, true)
        .addField("Moderator", message.author, true)
        .addField("Motiv", kReason, true)
        .setFooter(`ID:${message.member.id} ▪ ${message.guild.name}`);

        let kickChannel = message.guild.channels.find(`name`, "mod-logs");
        if(!kickChannel) return message.channel.send("Nu gasesc channel-ul `mod-logs`.");

        message.guild.member(kUser).kick(kReason).then(msg => ("Acel user a primit kick cu succes! ✅"))
        message.delete().catch(O_o=>{});
        kickChannel.send(kickEmbed)
}

module.exports.help = {
    name: "kick"
}
