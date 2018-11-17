const ytdl = require('ytdl-core');
const ffmpeg = require('ffmpeg-binaries')
const fs = require ('fs')
const Discord = require("discord.js");

exports.run = async (client, message, args, ops) => {
    let connection = await message.member.voiceChannel.join();
    if(args[0] === `disconnect`){
      await connection.disconnect()
      await message.react("👍")
      return
    }
    if (!message.member.voiceChannel) return message.channel.send('Te rog sa te conectezi la un canal vocal.');
    if (!args[0]) return message.channel.send('Te rog sa introduci un link valid.');

    let validate = await ytdl.validateURL(args[0]);
    if (!validate) return message.channel.send('Sorry, please input a **valid** url following the command.');

    let info = await ytdl.getInfo(args[0]);
    let audioFormats = ytdl.filterFormats(info.formats, 'audioonly');
    let dispatcher = await connection.playStream(ytdl(args[0], {
        filter: 'audioonly'
    }));
    message.channel.send(`🎵 Now playing: ${info.title}\n⏲ Length: ${audioFormats.length} minutes`);
};

exports.help = {
  name:"play"
}
