const commando = require('discord.js-commando');

class GetAltCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'getminecraft',
            group: 'fancy',
            memberName: 'getminecraft',
            description: 'Every 15Min 1 Free ALT!',
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
        message.author.send("zerogman493@comcast.net:galaxies1")
        }
    if (fagg == 2) {
        message.author.send("Niclas.burow@web.de:Lynn2009")
        }
    if (fagg == 3) {
        message.author.send("vaneffenc@yahoo.com:pucepar7")
        }
    if (fagg == 4) {
        message.author.send("rcates777@yahoo.com:Tolkien123")
        }
    if (fagg == 5) {
        message.author.send("sonnyw@live.co.uk:voxon10vox")
        }
    if (fagg == 6) {
        message.author.send("Cruiseyboo@gmail.com:Cruise99")
        }
    if (fagg == 7) {
        message.author.send("wouter.colla@gmail.com:meertje1")
        }
    return message.channel.sendMessage("Check your DM's!").then(message => message.delete(10000))
}}

module.exports = GetAltCommand;