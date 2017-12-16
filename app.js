const Commando = require('discord.js-commando');

const client = new Commando.Client({
	owner: '367910644181368833'
});

const config = require("./config.json");

client.on('ready', () => {
	console.log(`Hey, I Just Finished Starting up! You can now use me in Discord!`)
	
	client.user.setStatus('idle');
});

client.on('guildMemberAdd', member => {
       message.member.guild.defaultChannel.sendMessage(`Welcome to the server, ${member}! You are the ${client.users.size}st on the Server!`);
       console.log(`${member.user.username} has joined the Server! He/She is the ${client.users.size}st on the server!`);
});
message.channel.sendMessage

client.on("ready", () => {
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 
  client.user.setGame(`with @FreewayPvP#6468`);
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
