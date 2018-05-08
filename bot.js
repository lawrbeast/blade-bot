const Discord = require('discord.js');
const moment = require('moment');
require("moment-duration-format");
const bot = new Discord.Client();
//
bot.on('guildMemberAdd', function(member) {
    member.guild.channels.get('443495906667528223').setName(`Membrii: ${member.guild.memberCount}`);
  });
bot.on('guildMemberRemove', function(member){
    member.guild.channels.get('443495906667528223').setName(`Membrii: ${member.guild.memberCount}`);
});
bot.on("ready", async () => {
    console.log(`WolvesZone este online`);
    bot.user.setPresence({ game: { name: `Prefix: $help`, url: 'https://twitch.tv/qlau234', type: 1 } });
});
bot.on("message", message => {
  if(message.channel.type === "dm") return

    const prefix = "w!";
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let sender = message.author;
    let args = messageArray.slice(1);
	//COMMANDS
if(cmd === `${prefix}avatar`){
    let user = message.mentions.users.first() || message.author;
    const embed = new Discord.RichEmbed()
        .setColor(0xffffff) // This will set the embed sidebar color
        .setImage(user.avatarURL) // This will set the embed image     
    message.channel.send({embed});
        return;
    }
   //
  if(cmd === `${prefix}userinfo`){
	let user;
	// If the user mentions someone, display their stats. If they just run userinfo without mentions, it will show their own stats.
    if (message.mentions.users.first()) {
      user = message.mentions.users.first();
    } else {
        user = message.author;
    }
	// Define the member of a guild.
    const member = message.guild.member(user);

	//Discord rich embed
    const embed = new Discord.RichEmbed()
		.setColor('RANDOM')
		.setThumbnail(user.avatarURL)
		.setTitle(`${user.username}#${user.discriminator}`)
		.addField("ID:", `${user.id}`, true)
		.addField("Nickname:", `${member.nickname !== null ? `${member.nickname}` : 'None'}`, true)
		.addField("Creat pe", `${moment.utc(user.createdAt).format('dddd, MMMM Do YYYY, HH:mm:ss')}`, true)
		.addField("A intrat pe server:", `${moment.utc(member.joinedAt).format('dddd, MMMM Do YYYY, HH:mm:ss')}`, true)
		.addField("Bot:", `${user.bot}`, true)
		.addField("Status:", `${user.presence.status}`, true)
		.addField("Game:", `${user.presence.game ? user.presence.game.name : 'None'}`, true)
		.addField("Roles:", member.roles.map(roles => `${roles.name}`).join(', '), true)
		.setFooter(`Cerut de ${message.author.username}#${message.author.discriminator}`)
     message.channel.send({embed});
	  return;
    }
	//HEP
	if(cmd === `${prefix}help`){
		let embed = new Discord.RichEmbed()
		.setColor("#fcfdff")
		.setTitle("Legion's Commands")
		.setDescription("$userinfo - Iti arata informatiile unui membru\n$avatar [@Legion Guard] - Iti arata avatarul tau sau al unui membru\n$serverinfo - Iti arata informatiile server-ului.\n$botstats - Iti arata informatiile bot-ului.")
		.setFooter("Version 0.0.1 - PreAlpha")
		message.author.send({embed}).then(msg => {message.channel.send('Ti-am trimis comenzile in DM!')});
		return;
	}
	//SERVERINFO
if(cmd === `${prefix}serverinfo`){
   let online = message.guild.members.filter(member => member.user.presence.status !== 'offline');
   let day = message.guild.createdAt.getDate()
   let month = 1 + message.guild.createdAt.getMonth()
   let year = message.guild.createdAt.getFullYear()
   let sicon = message.guild.iconURL;
   let embed = new Discord.RichEmbed()
   .setAuthor(message.guild.name, sicon)
   .setFooter(`Server Creat • ${day}.${month}.${year}`)
   .setColor("#7289DA")
   .setThumbnail(sicon)
   .addField("ID", message.guild.id, true)
   .addField("Nume", message.guild.name, true)
   .addField("Owner", message.guild.owner.user.tag, true)
   .addField("Regiune", message.guild.region, true)
   .addField("Canale", message.guild.channels.size, true)
   .addField("Membrii", message.guild.memberCount, true)
   .addField("Umani", message.guild.memberCount - message.guild.members.filter(m => m.user.bot).size, true)
   .addField("Boti", message.guild.members.filter(m => m.user.bot).size, true)
   .addField("Online", online.size, true)
   .addField("Roluri", message.guild.roles.size, true);
   message.channel.send({embed});
return;
}
	//BOT STATS
if(cmd === `${prefix}botstats`){
	const duration = moment.duration(bot.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
  const embed = new Discord.RichEmbed()
    .setTitle("*** Stats ***")
    .setColor("RANDOM")
    .addField("• Uptime ", `${duration}`, true)
    .addField("• Users", `${bot.users.size.toLocaleString()}`, true)
    .addField("• Servers", `${bot.guilds.size.toLocaleString()}`, true)
    .addField("• Channels ", `${bot.channels.size.toLocaleString()}`, true)
    message.channel.send({embed})
	return;
}
	//ANTI INVITE LINK
	let msg = message.content.toUpperCase();
	if(message.member.hasPermission("ADMINISTRATOR")) return;
if (msg.includes(`DISCORD.GG`)){
		message.channel.send("**Fără invite link-uri!**");
		message.delete();
		return
	}
  });
  
bot.login(process.env.BOT_TOKEN);
