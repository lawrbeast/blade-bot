const Discord = require("discord.js");

module.exports.run = (bot, message, args) => {

var today = new Date()
let Day = today.toString().split(" ")[0].concat("day");
let Month = today.toString().split(" ")[1]
let Year = today.toString().split(" ")[3]
if(Day === "Thu"){
    let Day = "Joi"
};
message.channel.send(`\`${Day}\` \`${Month}\` \`${Year}\`\n\`Ora zilei:\` \`${today.toString().split(" ")[4]}\``)
}
module.exports.help = {
    name: "data"
}
