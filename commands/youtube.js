const Discord = require("discord.js");
const YouTube = require("simple-youtube-api");
const youtube = new YouTube("AIzaSyC73RqEuOUsyg7PKfYwRXIUUk_rAwl8FVw");



module.exports.run = async (client, message, args) => {

  youtube.searchVideos(args, 1)
      .then(results => {
         message.channel.send(`https://youtu.be/${results[0].id}`)
      })
      .catch(console.log);

}

module.exports.help = {
  name: "youtube"
}
