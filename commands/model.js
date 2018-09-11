const Discord = require("discord.js");

module.exports.run = (bot, message, args) => {
  let dailyembed = new Discord.RichEmbed()
  .setTitle("Daily Battle")
  .setColor('#f71d54')
  .setDescription(":black_small_square: Temă:\n:black_small_square: Stock:\n:black_small_square: Tipul lucrării:\n:black_small_square: Dimensiuni:\n:black_small_square: Text:");
  if(args[0] === "daily") {
 message.channel.send({embed:dailyembed})
}
 if(args[0] === "castigator") {
  let castigator = args[1];
   message.channel.send(`**Daily Battle** terminat!\nCastigator: ${castigator} !`);
 }
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.delete();
}
module.exports.help = {
    name: "model"
}
