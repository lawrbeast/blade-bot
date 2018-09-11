const Discord = require("discord.js");

module.exports.run = (bot, message, args) => {
 let args = args.join(" ").slice(1)
if args = "daily"{
  let dailyembed = new Discord.RichEmbed()
  .setTitle("Model Daily Battle")
  .setDescription("test");
  message.channel.send({embed:dailyebmed});
 }
}
module.exports.help = {
    name: "model"
}
