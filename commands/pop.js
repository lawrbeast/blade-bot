const db = require('quick.db')
const Discord = require('discord.js')
exports.run = async (client, message, args, tools) => {
    let TotalBubbles;
    let bubbles = await db.fetch(`bubbles_${message.author.id}`)
    if (bubbles === null) db.set(`bubbles_${message.author.id}`, 0);
    else TotalBubbles = bubbles;
    if (TotalBubbles === undefined) TotalBubbles = 1;
    db.add(`bubbles_${message.author.id}`, 1).then(i => {
        const emb = new Discord.RichEmbed()
            .setTitle('Pop!')
            .setThumbnail('https://images-na.ssl-images-amazon.com/images/I/81hVR8PKVDL.png')
            .setColor(0x00FFBF)
            .setDescription(`Ai spart un balon!\nIn total ai spart: ${TotalBubbles + 1} baloane!`)
        message.channel.send({
            embed: emb
        })
    })

exports.help = {
    name: "pop"   
}
