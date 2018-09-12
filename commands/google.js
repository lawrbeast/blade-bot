const Discord = require("discord.js");

module.exports.run = (client, message, args) => {
	//
        let google = args.slice(0).join('+');

        let link = `https://www.google.com/search?q=` + google;
        if(!link)return message.reply("Console error")
        let embed = new Discord.RichEmbed()
	//
        .setColor("RED")
        .setTimestamp()
	.addField("Cerut de:", `${message.author}`)
	.addField('Link:', `${link}`)
	.setFooter("Doogle", message.author.avatarURL);
	//
	message.channel.send({embed:embed});
  
}
module.exports.help = {
    name: "google"
}
