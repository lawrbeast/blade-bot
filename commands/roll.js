const Discord = module.require("discord.js");
const randomnum = require("unique-random");
const rand = randomnum(1, 6);
const rand1 = randomnum(1, 6);
module.exports.run = async (bot, message, args) => {
if(!args[0]){
    await message.channel.send("Arunc zarul...:game_die: :game_die: ").then(msg => {msg.delete(2500)});
    await message.channel.send(`:game_die: Zarul a cazut pe fata cu numarul: ${rand()}`);
}
if(args[0] === "duel"){
    let userduel = args[1];
    await message.channel.send("Arunc zarurile...:game_die: :game_die: ").then(msg => {msg.delete(2500)});
    await message.channel.send(`:game_die: Zarurile au cazut pe fetele cu numarul:\nJucator 1: ${message.author}: ${rand()}\n Jucator 2: ${userduel}: ${rand1()}`);
 }
}

module.exports.help = {
    name: "roll"
}
