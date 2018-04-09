const botconfig = require("./botconfig.json");
const tokenfile = require("./token.json")
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();

fs.readdir("./commands", (err, files) => {

    if(err) console.log(err)

    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if(jsfile.length <= 0){
        console.log("Couldn't find commands.");
        return;
    }

    jsfile.forEach((f, i) => {
        let props = require(`./commands/${f}`)
        console.log(`${f} loaded!`);
        bot.commands.set(props.help.name, props);
    });

});

bot.on("ready", async () => {
    console.log(`${bot.user.username} is online!`);
    bot.user.setGame(`(!)pe ${bot.guilds.size} servere cu ${bot.users.size} useri(!)`)
});

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return

    let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));

    if(!prefixes[message.guild.id]){
        prefixes[message.guild.id] = {
            prefixes: botconfig.prefix
        };
    }

    // let xpAdd = Math.floor(Math.random() * 7)+ 8;
    //
    // if(!xp[message.author.id]){
    //   xp[message.author.id] = {
    //     xp: 0,
    //     level: 1
    //   };
    // }
    //
    //
    // let curxp = xp[message.author.id].xp;
    // let curlvl = xp [message.author.id].level
    // xp[message.author.id].xp = curxp +xpAdd;
    // let nxtLvl = xp[message.author.id].level * 300;
    //
    // if(nxtLvl <= xp[message.author.id].xp){
    //   xp[message.author.id].level = curlvl + 1;
    //   let lvlup = new Discord.RichEmbed()
    //   .setTitle("Felicitari! 🆙")
    //   .setColor("#0d1d38")
    //   .addField(`<@${message.author.username}> | Ai avansat la nivel:`, curlvl + 1)
    //
    //   message.channel.send(lvlup).then(msg => {msg.delete(15000)});
    // }
    // fs.writeFile("./xp.json", JSON.stringify(xp), (err) => {
    //   if(err) console.log(err)
    // });

    let prefix = prefixes[message.guild.id].prefixes;

    //let prefix = botconfig.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    let commandfile = bot.commands.get(cmd.slice(prefix.length));
    if(commandfile) commandfile.run(bot, message, args);

//     if(cmd === `${prefix}report`){

//         //!report @Blade Motiv

//         let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
//         if(!rUser) return message.channel.send("Te rog sa introduci numele si motivul! ex:**(!report @Blade Motiv)**");
//         let reason = args.join(" ").slice(22);


//         let reportEmbed = new Discord.RichEmbed()
//         .setDescription("Raporturi")
//         .setColor("#0d1d38")
//         .addField("User Raportat", `${rUser} cu ID: ${rUser.id}`)
//         .addField("Raportat de", `${message.author} cu ID ${message.author.id}`)
//         .addField("Channel", message.channel)
//         .addField("Data raportarii", message.createdAt)
//         .addField("Motiv", reason);

//         let reportschannel = message.guild.channels.find(`name`, `modstuff`);
//         if(!reportschannel) return message.channel.send("Nu gasesc channel-ul pentru report-uri!");


//             message.delete().catch(O_o=>{});
//             reportschannel.send(reportEmbed)

//         return;
//     }

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

    //KICK COMMAND
    if(cmd === `${prefix}kick`){

    //     //!kick @daeshan askin for it

    //     let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    //     if(!kUser) return message.channel.send("Nu pot gasii acel user! :thinking: __(Te rog sa folosesti !kick @User Motiv!__)");
    //     let kReason = args.join(" ").slice(22);
    //     if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Nu pot face asta! :frowning:");
    //     if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Acel user nu poate fi aruncat! :confused:");

    //     let kickEmbed = new Discord.RichEmbed()
    //     .setDescription("__**~Blade's Kick~**__")
    //     .setColor("#0d1d38")
    //     .addField("User aruncat", `${kUser} with ID ${kUser.id}`)
    //     .addField("Aruncat de", `<@${message.author.id}> cu ID ${message.author.id}`)
    //     .addField("Aruncat in", message.channel)
    //     .addField("Data", message.createdAt)
    //     .addField("Motiv", kReason)
    //     .setFooter("**~Blade's Kick~** facut de qLau");

    //     let kickChannel = message.guild.channels.find(`name`, "modstuff");
    //     if(!kickChannel) return message.channel.send("Nu pot gasii channel-ul modstuff.");

    //     message.guild.member(kUser).kick(kReason);
    //     kickChannel.send(kickEmbed);

    //     return;
    }

    //BAN COMMAND
    if(cmd === `${prefix}ban`){

        // let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        // if(!bUser) return message.channel.send("Nu pot gasii acel user! :thinking: __(Te rog sa folosesti !ban @User Motiv!__)");
        // let bReason = args.join(" ").slice(22);
        // if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send("Nu pot face asta :frowning:");
        // if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Acel user nu poate fi aruncat! :confused:");

        // let banEmbed = new Discord.RichEmbed()
        // .setDescription("~Ban~")
        // .setColor("#bc0000")
        // .addField("User banat", `${bUser} with ID ${bUser.id}`)
        // .addField("Banat de", `<@${message.author.id}> with ID ${message.author.id}`)
        // .addField("Banned In", message.channel)
        // .addField("Data", message.createdAt)
        // .addField("Motiv", bReason)
        // .setFooter("**~Blade's Ban~** facut de qLau");

        // let incidentchannel = message.guild.channels.find(`name`, "incidents");
        // if(!incidentchannel) return message.channel.send("Can't find incidents channel.");

        // message.guild.member(bUser).ban(bReason);
        // incidentchannel.send(banEmbed);
    }

    //HELP COMMAND

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

    //USERID

    if(cmd === `${prefix}myid`){

        message.channel.send(`:id: <@${message.author.id}> ID-ul tau este acesta: ${message.author.id} :id:`);

    return;
}

});

bot.login(process.env.tokenfile);
