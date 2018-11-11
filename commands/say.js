const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
      if(!message.member.hasPermission("ADMINISTRATOR")) return;
      const sayMessage = args.join(" ");
      message.delete().catch();
      let messageembed = new Discord.RichEmbed()
      .setDescription(sayMessage)
      .setColor("#a30000")
      message.channel.send({embed: messageembed});
}

module.exports.help = {
  name: "say"
}
