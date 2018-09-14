const Discord = module.require("discord.js");
const randomnum = require("unique-random");
const rand = randomnum(1, 6);
module.exports.run = async (bot, message, args) => {


    await message.channel.send("Arunc zarul...:game_die: :game_die: ").msg.delete(2500)
        .then(message => message.channel.send(`:game_die: Zarul a cazut pe fata cu numarul: ${rand()}`));



}

module.exports.help = {
    name: "roll"
}
