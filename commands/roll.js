const Discord = module.require("discord.js");
const randomnum = require("unique-random");
const rand = randomnum(1, 6);
module.exports.run = async (bot, message, args) => {


    await message.channel.send("Arunc zarul...:game_die: :game_die: ").then(msg => {msg.delete(2500)});
    await message.channel.send(`:game_die: Zarul a cazut pe fata cu numarul: ${rand()}`);



}

module.exports.help = {
    name: "roll"
}
