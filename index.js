const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
    console.log(`${bot.user.username} is online!`);
    bot.user.setGame(`(!)pe ${bot.guilds.size} servere cu ${bot.users.size} useri(!)`)
});
bot.on("ready", async () => {
//COMENZI
    let prefix = "!";
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    if(cmd === `${prefix}serverinfo`){

        let sicon = message.guild.iconURL;
        let serverembed = new Discord.RichEmbed()
        .setColor("#0d1d38")
        .setThumbnail(sicon)
        .addField("ID:", message.guild.id)
        .addField("Membrii ", `[${message.guild.memberCount}]`, true)
        .addField("Roluri:", `[${message.guild.roles.size}]`, true)
        .addField("Emojis:", `[${message.guild.emojis.size}]`)
        .addField("Canale:", `[${message.guild.channels.size}]`, true)
        .addField("Regiune:", message.guild.region, true)
        .addField("Server Owner:", `👑${message.guild.owner}👑`)
        .setFooter(`${message.guild.name}`, message.guild.iconURL)
        .setTitle(`♦${message.guild.name}♦`, message.guild.iconURL);

        return message.channel.send(serverembed);
    }

    if(cmd === `${prefix}botinfo`){

        let bicon = bot.user.displayAvatarURL
        let botembed = new Discord.RichEmbed()
        .setDescription("**⚜Informatii Bot⚜**")
        .setColor("#0d1d38")
        .setThumbnail(bicon)
        .addField("Nume bot:", bot.user.username)
        .addField(`Activ pe:`, `${bot.guilds.size} servere cu ${bot.users.size} useri`)
        .addField("Creat in:", "**node.js**", true)
        .addField("Invite link:", "In Curand", true)
        .addField("Versiune:", "Early Alpha 0.1", true)
        .setFooter(`Pe [${bot.guilds.size}] servere cu [${bot.users.size}/15000] useri!`);

        return message.channel.send(botembed);
    }

    if(cmd === `${prefix}help`){

    let helpEmbed = new Discord.RichEmbed()
    .setTitle("**Comenzi Blade**", bot.user.displayAvatarURL)
    .addField("__!kick__", "Dai kick unui user.", true)
    .addField("__!ban__", "Poti sa banezi un user.", true)
    .addField("__!report__", "Raportezi un user (BETA).", true)
    .addField("__!clear__", "Stergi un anumit numar de mesaje.", true)
    .addField("__!caine__", "Iti arata o poza aleatorie cu un caine :dog:", true)
    .addField("__!pisica__", "Iti arta o poza aleatorie cu o pisica :cat:", true)
    .addField("__!avatar__", "Iti arata avatar-ul.", true)
    .setColor("#0d1d38")
    .setThumbnail(bot.user.avatarURL)
    .setFooter(`**~Blade's Help~** facut de ⦃ ɋⱠⱥǔ ♯ Deathcore ⦄#5540`, bot.user.displayAvatarURL);

        message.channel.send(helpEmbed);
        return;
    }

    //AVATAR

    if(cmd === `${prefix}avatar`){

    let avatarEmbed = new Discord.RichEmbed()
    .setDescription(`-Avatarul Tau-`)
    .addField("Avatarul tau este acesta :point_right:", `<@${message.author.id}>`)
    .setThumbnail(message.author.avatarURL)
    .setFooter(`~Avatarul Tau~`);

        message.channel.send(avatarEmbed);
        return;
    }
});

bot.login(process.env.BOT_TOKEN);
