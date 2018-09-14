const request = require('request');

exports.run = (message, bot, send) => {
    let cn = request("http://api.adviceslip.com/advice", function(err, res, body) {
            let cnj = JSON.parse(body)
            message.channel.send(cnj.slip.advice)
    });
}
exports.help = {
  name: "sfat"
}
