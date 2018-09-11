const Discord = require("discord.js");

module.exports.run = (bot, message, args) => {
  let dailyembed = new Discord.RichEmbed()
  .setTitle("Model Daily Battle")
  .setDescription(":black_small_square: Temă:\n:black_small_square: Stock:\n:black_small_square: Tipul lucrării:\n:black_small_square: Dimensiuni:\n:black_small_square: Text:");
let args1 = args.join(" ").slice(1);
  if(args1 === "daily") return message.channel.send({embed:dailyembed});
  if(args1 === "battle") return message.channel.send("Test Model Battle!!!!");
  if(!args1) return message.channel.send.("Te rog sa introduci numele modelului!")
}
module.exports.help = {
    name: "model"
}
