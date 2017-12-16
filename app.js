const Commando = require('discord.js-commando');

const client = new Commando.Client({
	owner: '367910644181368833'
});

const config = require("./config.json");

client.on('ready', () => {
  console.log(`Hey, I Just Finished Starting up! You can now use me in Discord!`);
});

client.on("ready", () => {
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 
	client.user.setGame(`with @FreewayPvP#6468`);
	client.user.setGame(`with @FreewayPvP#6468`,`https://twitch.tv/thomaspvp5`);
});

client.on('message', message => {
	db.updateValue(message.author.id + message.guild.id, 1).then(i => {

		let messages
		if (i.value == 25) messages = 25; // Level 1
		else if (i.value == 50) messages = 50; // Level 2
		else if (i.value == 75) messages = 75; // Level 3
		else if (i.value == 100) messages = 100; // Level 4
		else if (i.value == 125) messages = 125; // Level 5
		else if (i.value == 150) messages = 150; // Level 6
		else if (i.value == 175) messages = 175; // Level 7
		else if (i.value == 200) messages = 200; // Level 8
		else if (i.value == 225) messages = 225; // Level 9
		else if (i.value == 250) messages = 250; // Level 10

		if (!isNaN(messages)) {
			db.updateValue(`userLevel_${message.author + message.guild.id}`, 1).then(o => {
				message.channel.send(`You Leveled Up!, You are now Level ${o.value}`)
			})
		}

	});
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

client.login('MzkxMzM5Mzg1MTA4NTYxOTIw.DRXOtw.Sqzl1NjIOLUqL9tRE1_oW-iwCJI');
