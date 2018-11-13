const Discord = require("discord.js");

module.exports.run =  (bot, message, args) => {
        let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("Nu ai permisiunile necesare.");
        if(!kUser) return message.channel.send("Nu ai mentionat un membru\n**Exemplu: o!kick @membru**").then(msg => {msg.delete(5000)});
        if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send(":no_entry_sign: Nu poti face asta unui administrator!");
        let kReason = args.join(" ").slice(22);
        if(!kReason) kReason = "fara motiv"

        let kickEmbed = new Discord.RichEmbed()
        .setFooter(`${kUser.id}`)
        .setDescription(`Kick - Case | ${kUser}`)
        .setColor("#bc2731")
        .setTimestamp(new Date())
        .addField("Membru", kUser, true)
        .addField("Moderator", message.author, true)
        .addField("Motiv", kReason, true);
       

        let kickChannel = message.guild.channels.find(`name`, "logs");
        if(!kickChannel) return message.channel.send("Nu găsesc channel-ul `logs`.");

        message.guild.member(kUser).kick(kReason)
        kickChannel.send({embed:kickEmbed});
    }

module.exports.help = {
    name: "kick"
}
