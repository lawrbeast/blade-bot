const Discord = require("discord.js");

module.exports.run =  (bot, message, args) => {
        let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if(!kUser) return message.channel.send("Nu ai mentionat un membru.").then(msg => {msg.delete(5000)});
        let kReason = args.join(" ").slice(22);
		if(!kReason) return message.channel.send({embed:kickuEmbed})
        if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(":no_entry_sign: Nu aveți permisiunea pentru a face asta!");
        if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send(":no_entry_sign: Nu puteți să dați afară un moderator sau un administrator!");

        let kickEmbed = new Discord.RichEmbed()
        .setFooter(`${message.guild.name}`, `${message.guild.iconURL}`)
        .setDescription(`Kick - Case | ${kUser}`)
        .setColor("#bc2731")
        .addField("Membru", kUser, true)
        .addField("Moderator", message.author, true)
        .addField("Motiv", kReason, true)
       
      

        let kickChannel = message.guild.channels.find(`name`, "mod-logs");
        if(!kickChannel) return message.channel.send("Nu găsesc channel-ul `mod-logs`.");

        message.guild.member(kUser).kick(kReason)
        kickChannel.send({embed:kickEmbed});
    }

module.exports.help = {
    name: "kick"
}
