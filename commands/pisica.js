const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot,message,args) => {

    let {body} = await superagent
    .get(`http://aws.random.cat/meow`);

    let catEmbed = new Discord.RichEmbed()
    .setColor("#0d1d38")
    .setTitle("O imagine la intamplare cu o pisica! :cat:")
    .setImage(body.file)
    .setFooter("🐱");

    message.channel.send(catEmbed);
}
module.exports.help = {
    name: "pisica"
}
