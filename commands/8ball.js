const Discord = require("discord.js");

module.exports.run = async (bot,message,args) => {


    //!8ball <intrebare>
    if(!args[2]) return message.reply("Te rog sa pui o intrebare completa");
    let replies = ["Da.", "Nu", "Nu stiu", "Probabil", "Intreaba-ma mai tarziu", "Nu pot raspunde", "Nu imi pasa", "Taci odata"];

    let result = Math.floor((Math.random() * replies.length));
    let question = args.slice(0).join(" ");

    let ballembed = new Discord.RichEmbed()
    .setAuthor(message.author.tag)
    .setColor("#0d1d38")
    .addField("Intrebare:", question)
    .addField("Raspuns:", replies[result])
    .setTitle("🎱8Ball")
    .setFooter("~8Ball~")

    message.channel.send(ballembed);

}

module.exports.help = {
    name: "8ball"
}
