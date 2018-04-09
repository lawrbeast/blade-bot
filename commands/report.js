const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
            let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
            let useEmbed = new Discord.RichEmbed()
            .setTitle ("**EROARE**")
            .setColor("#f90000")
            .addField("Te rog sa folosesti ↴", "!report @User Motiv")
            .setFooter("~Comanda Report~");
            if(!rUser) return message.channel.send(useEmbed);
            let reason = args.join(" ").slice(22);


            let reportEmbed = new Discord.RichEmbed()
            .setDescription(`New Case | REPORT |`)
            .setColor("#0d1d38")
            .setThumbnail(message.author.avatarURL)
            .addField("User Raportat:↴", `${rUser}`)
            .addField("Raportat de:↴", `${message.author}`)
            .addField("Channel:↴", message.channel)
            .addField("Motiv:↴", reason)
            .setFooter(`Raportat pe ${message.createdAt}`);

            let reportschannel = message.guild.channels.find(`name`, "complaints");
            let chEmbed = new Discord.RichEmbed()
            .setTitle("Eroare!")
            .setColor("#f90000")
            .addField("Nu gasesc channel-ul numit:", "complains");
            if(!reportschannel) return message.channel.send(chEmbed);

                message.delete().catch(O_o=>{});
                reportschannel.send(reportEmbed);

}

module.exports.help = {
    name: "report"
}
