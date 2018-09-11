const Discord = require("discord.js");

module.exports.run = (bot, message, args) => {
let args1 = args.join(" ").slice(1)
if args1 = "daily"{
  let dailyembed = new Discord.RichEmbed()
  .setTitle("Model Daily Battle")
  .setDescription("test");
  message.channel.send({embed:dailyebmed});
 }
}
module.exports.help = {
    name: "model"
}
