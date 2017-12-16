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

client.on('message', message => {
	db.updateValue(message.author.id + message.guild.id, 1).then(i => {

		let messages;
		if (i.value == 25) messages = 25; // Level 1
		if (i.value == 50) messages = 50; // Level 2
		if (i.value == 75) messages = 75; // Level 3
		if (i.value == 100) messages = 100; // Level 4
		if (i.value == 125) messages = 125; // Level 5
		if (i.value == 150) messages = 150; // Level 6
		if (i.value == 175) messages = 175; // Level 7
		if (i.value == 200) messages = 200; // Level 8
		if (i.value == 225) messages = 225; // Level 9
		if (i.value == 250) messages = 250; // Level 10

		if (!isNaN(messages)) {
			db.updateValue(`userLevel_${message.author + message.guild.id}`, 1).then(o => {
				message.channel.send(`You Leveled Up!, You are now Level ${o.value}`)
			})

		}

	})

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
