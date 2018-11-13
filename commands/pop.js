const db = require('quick.db')
const Discord = require('discord.js')
exports.run = async (client, message, args, tools) => {
    let TotalBubbles;
    let bubbles = await db.fetch(`bubbles_${message.author.id}`)
    if (bubbles === null) db.set(`bubbles_${message.author.id}`, 0);
    else TotalBubbles = bubbles;
    if (TotalBubbles === undefined) TotalBubbles = 1;
    if(TotalBubbles === "10") message.channel.send("**Realizare** Felicitari ai spart 10 baloane!")
    db.add(`bubbles_${message.author.id}`, 1)
        const emb = new Discord.RichEmbed()
            .setTitle('Pop!')
            .setThumbnail('https://www.logolynx.com/images/logolynx/c6/c62affc16a6d5d199dd36c6723b513c8.png')
            .setColor(0x00FFBF)
            .setDescription(`Ai spart un balon!\nIn total ai spart: ${TotalBubbles + 1} baloane!`)
        message.channel.send({embed:emb});
    }

exports.help = {
    name: "pop"   
}
