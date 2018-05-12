const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
        let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

        if(!kUser) return message.channel.send("**Te rog sa introduci un user, exemplu: @user.**").then(msg => {msg.delete(5000)});
        let kReason = args.join(" ").slice(22);
        if(!kReason) return message.channel.send("**Te rog sa introduci un motiv, exemplu: @user MOTIV.**").then(msg => {msg.delete(5000)});
        if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("圻 Permisiunile lipsesc, nu pot face asta!");
        if(kUser.hasPermission("KICK_MEMBERS")) return message.channel.send("圻 Acel user este un admin/mod, nu pot face asta!");

        let embed = new Discord.RichEmbed()
        .setDescription(`Kick Info`)
        .setColor("#f90000")
        .addField("User", kUser, true)
        .addField("Moderator", message.author, true)
        .addField("Motiv", kReason, true)
        .setFooter(`ID:${message.member.id}`)
        .setTimestamp(new Date());

        let kickChannel = message.guild.channels.find(`name`, "mod-logs");
        if(!kickChannel) return message.channel.send("Nu gasesc channel-ul `mod-logs`.");

        message.guild.member(kUser).kick(kReason);
        kickChannel.send({embed})
}

module.exports.help = {
    name: "kick"
}
