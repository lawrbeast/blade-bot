const Discord = require("discord.js");

module.exports.run = async (bot, message, args, func) => {
    if (message.author.id != "257491128671141888") return;
    let massdmEmbed = new Discord.RichEmbed()
    .addField("Cauți un grup bine configurat și cu staff decent?", ":black_medium_small_square: **WOLVESZONE** - predispune de un staff echilibrat, dar totuși căutăm oameni petru a se alătura nouă. Sperăm ca tu să fii acela.")
    .addField("Ce trebuie să faci că să primești Assistance?", ":black_medium_small_square: Este simplu, faci o cerere la #staff-applications respectând modelul dat, de asemenea avem niște mici cerințe. Să ai minim level 3 pe server, acela fiind dat de către Mee6 (să nu-l încurcați cu Tatsumaki), să aveți minim 12 ani. Cerem să aveți o gramatică bună și un limbaj cât mai adecvat.")
    .addField(":link:Link către grup: https://discord.gg/RqtchCY", "🐺")
    .setThumbnail(bot.user.avatarURL);
    message.guild.members.map(m => {
          m.send(massdmEmbed);
    });
}

module.exports.help = {
    name: "massdm"
}
