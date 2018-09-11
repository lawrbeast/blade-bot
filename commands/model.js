const Discord = require("discord.js");

module.exports.run = (bot, message, args) => {
  let dailyembed = new Discord.RichEmbed()
  .setTitle("Model Daily Battle")
  .setDescription("test");
let args1 = args.join(" ").slice(1);
  if(args1) === "daily" {
    message.channel.send({embed:dailyembed});
  }
  
}
module.exports.help = {
    name: "model"
}
