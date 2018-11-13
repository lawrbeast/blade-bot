const ms = require('ms');

exports.run = (client, message, args, tools) => {
    if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send('Nu permisiunile necesare!')
        .then(msg => msg.delete({
            timeout: 10000
        }));
    if (!client.lockit) client.lockit = [];
    let time = args.join(' ');
    let validUnlocks = ['release', 'unlock'];
    if (!time) return message.channel.send('Te rog mentioneaza un timp\nExemplu: o!lockdown 1s(secunda),1m(minut),1h(ora)');

    if (validUnlocks.includes(time)) {
        message.channel.overwritePermissions(message.guild.id, {
                SEND_MESSAGES: null
            })
            .then(() => {
                message.channel.send('Chat deblocat.');
                clearTimeout(client.lockit[message.channel.id]);
                delete client.lockit[message.channel.id];
            })
            .catch(error => {
                console.log(error);
            });
    } else {
        message.channel.overwritePermissions(message.guild.id, {
                SEND_MESSAGES: false
            })
            .then(() => {
                message.channel.send(`Chat blocat pentru ${ms(ms(time), { long:true })}`)
                    .then(() => {

                        client.lockit[message.channel.id] = setTimeout(() => {
                            message.channel.overwritePermissions(message.guild.id, {
                                    SEND_MESSAGES: null
                                })
                                .then(message.channel.send('Chat deblocat.'))
                                .catch(console.error);
                            delete client.lockit[message.channel.id];
                        }, ms(time));
                    })
                    .catch(error => {
                        console.log(error);
                    });
            });
    }
}

exports.help = {
  name: "lockdown"
}
