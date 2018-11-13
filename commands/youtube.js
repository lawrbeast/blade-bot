const Discord = require("discord.js");
const YouTube = require("simple-youtube-api");
const youtube = new YouTube("AIzaSyC73RqEuOUsyg7PKfYwRXIUUk_rAwl8FVw");



module.exports.run = async (client, message, args) => {

  youtube.searchVideos(args, 1)
      .then(results => {

        const ytEmbed = new Discord.RichEmbed()
          .setAuthor(`YouTube rezultate gasite pentru ${args}`.split(',').join(' '))
          .setThumbnail(results[0].thumbnails.high.url)
          .setColor('#cc0000') //I personally use bubblegum pink!
          .addField('Titlu', results[0].title, true)
          .addField('Channel', results[0].channel.title, true)
          .addField('Descriere', results[0].description)
          message.channel.send(`https://youtu.be/${results[0].id}`)
          message.channel.send({embed:ytEmbed});
      })
      .catch(console.log);

}

module.exports.help = {
  name: "youtube"
}
