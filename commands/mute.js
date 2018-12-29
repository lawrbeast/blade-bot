const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {


    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Nu ai permisiunile necesare.");
    let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    let mmEmbed = new Discord.RichEmbed()
    .setTitle("Comanda: o!mute")
    .setDescription('**Descriere:** Interzice accesul de a scrie al unui membru\n**Folosire:** o!mute @membru [timp(s,m,d,h)] [motiv]\n**Exemplu:** o!mute @qLau 15m motiv opțional')
    if (!tomute) return message.channel.send({embed:mmEmbed});
    if (tomute.hasPermission("ADMINISTRATOR")) return message.channel.send(":no_entry_sign: Nu poți face asta unui administrator!");
    let reason = args.slice(2).join(" ");
    if (!reason) reason = "fara motiv"

    let muterole = message.guild.roles.find(`name`, "muted");
    //start of create role
    if (!muterole) {
        try {
            muterole = await message.guild.createRole({
                name: "muted",
                color: "#000000",
                permissions: []
            })
            message.guild.channels.forEach(async (channel, id) => {
                await channel.overwritePermissions(muterole, {
                    SEND_MESSAGES: false,
                    ADD_REACTIONS: false
                });
            });
        } catch (e) {
            console.log(e.stack);
        }
    }
    //end of create role
    let mutetime = args[1];
    if (!mutetime) return message.reply("Nu ai precizat timpul.");

    message.delete().catch(O_o => {});

    let muteEmbed = new Discord.RichEmbed()
	.setFooter(`${message.guild.name}`, `${message.guild.iconURL}`)
    .setDescription(`MUTE INFO`)
    .setColor("#bc2731")
    .addField("Membru", tomute, true)
    .addField("Moderator", message.author, true)
    .addField("Durata", mutetime, true)

    let incidentschannel = message.guild.channels.find(`name`, "logs");
    if (!incidentschannel) return message.reply("Nu ai creat canalul, logs.");
    incidentschannel.send({embed:muteEmbed});
    await (tomute.addRole(muterole.id));

    setTimeout(function() {
        tomute.removeRole(muterole.id);
        let unmuteEmbed = new Discord.RichEmbed()
        .setFooter(`${message.guild.name}`, `${message.guild.iconURL}`)
       .setDescription(`UNMUTE INFO`)
       .setColor("#bc2731")
       .addField("Membru", tomute, true)
       .addField("Moderator", message.author, true)
       .addField("Motiv", "Auto", true)
        incidentschannel.send({embed:unmuteEmbed});
    }, ms(mutetime));
}
exports.help = {
  name: "mute"
}
