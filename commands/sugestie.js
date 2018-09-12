const superagent = require('superagent');
module.exports.run = async (client, message, args) => {

try {
   function clean(text) {
      if (typeof(text) === 'string')
        return text.replace(/`/g, '`' + String.fromCharCode(8203)).replace(/@/g, '@' + String.fromCharCode(8203));
      else
        return text;
    }
    const bug = args.join(" ")
    if (!bug) return message.channel.send('Te rog să introduci o sugestie!')
    const content = clean(`**${message.author.username}**#${message.author.discriminator} (${message.author.id}) a propus o sugestie:\n**Sugestie:**${bug}\nServer: **${message.guild.name}**\nID: **${message.guild.id}**`);
    const id = '489483749604458497';
    new Promise((resolve, reject) => {
      superagent.post(`https://discordapp.com/api/channels/${id}/messages`)
        .set('Authorization', `Bot ${client.token}`).send({ content })
        .end((err, res) => {
          if (err) {
            reject(err);
            message.reply('Am întâmpinat o problemă în timp ce am vrut să trimit sugestia propusă de tine. Te rog sa încerci din nou!');
          } else {
            resolve(res);
            message.channel.send(`:white_check_mark: **${message.author.username}**, sugestia propusă de tine a fost trimisă echipei. Mulțumim de sugestie!.`);
          }
        });
    });
}  catch (err) {
console.log(err)
}
}
module.exports.help = {
  name: "sugestie"
  }
