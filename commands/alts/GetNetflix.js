const commando = require('discord.js-commando');

class GetAltCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'getnetflix',
            group: 'fancy',
            memberName: 'getnetflix',
            description: 'Every 1Min 1 Free ALT!',
            throttling: {
                usages: 1,
                duration: 60
            }
        });
    }

async run(message, args) {
    var fagg = Math.floor(Math.random() * 7) +1
    message.delete(10000)
    if (fagg == 1) {
        message.author.send("none")
        }
    if (fagg == 2) {
        message.author.send("none")
        }
    if (fagg == 3) {
        message.author.send("none")
        }
    if (fagg == 4) {
        message.author.send("none")
        }
    if (fagg == 5) {
        message.author.send("none")
        }
    if (fagg == 6) {
        message.author.send("none")
        }
    if (fagg == 7) {
        message.author.send("none")
        }
    return message.channel.sendMessage("Check your DM's!").then(message => message.delete(10000))
}}

module.exports = GetAltCommand;