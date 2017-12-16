const Commando = require('discord.js-commando');
const db = require('quick.db');
const prefix = ('!')

const client = new Commando.Client({
	owner: '367910644181368833'
});

client.on('ready', () => {
	console.log(`Hey, I Just Finished Starting up! You can now use me in Discord!`)
	
	client.user.setStatus('idle');
});

bot.on('message', message => {

	// Message Leveling System - Make sure you require quick.db
    db.updateValue(message.author.id + message.guild.id, 1).then(i => { // You pass it the key, which is authorID + guildID, then pass it an increase which is 1 in this instance.
        // It also returns the new updated object, which is what we will use.

        let messages; // Create an empty variable - These IF statements will run if the new amount of messages sent is the same as the number.
        if (i.value == 25) messages = 25; // Level 1
        else if (i.value == 50) messages = 50; // Level 2
        else if (i.value == 100) messages = 100; // Level 3 - You can set these to any number, and any amount of them.

        if (!isNaN(messages)) { // If messages IS STILL empty, run this.
            db.updateValue(`userLevel_${message.author.id + message.guild.id}`, 1).then(o => { // This returns the updated object of userLevel_ID. 
                message.channel.send(`You sent ${messages} messages, so you leveled up! You are now level ${o.value}`) // Send their updated level to the channel.
            })
        }

    })

});

client.on('guildMemberAdd', member => {
   member.send("Welcome to our Server! I hope you Have FUN Getting Alts!\n|\nV\nV\nCommands:\n|\nV\n``!getMinecraft``\n``!getNetflix``\n``!getSpotify``");
});

client.on("ready", () => {
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 
	client.user.setGame(`with @FreewayPvP#6468`);
	client.user.setGame(`with @FreewayPvP#6468`,`https://twitch.tv/thomaspvp5`);
});

const path = require('path');

client.registry
  .registerGroups([
		['cool', 'Cool commands'],
		['fancy', 'fancy Commands'],
		['games', 'Game Commands'],
		['alts', 'alt Commands'],
		['fun', 'Fun Commands']
	])

	.registerDefaults()
	.registerCommandsIn(path.join(__dirname, 'commands'));

client.login('MzkxNjQ3OTk2NzY2NTg0ODMy.DRbuKQ.DlcvmEyEeaY6duKcToFxl_tDS0I');
