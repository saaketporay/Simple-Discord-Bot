require ('dotenv').config();
const {DISCORD_BOT_TOKEN} = process.env;
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('Logged in as ${client.user.tag}!');
});

client.on('message', msg => {
    if(msg.content.toLowerCase() ==='ping') {
        msg.reply('ping');
    }
    if(msg.content.toLowerCase() ==='hello'){
        msg.reply('HELLO\nhello\nhello');
    }
    if(msg.content.toLowerCase() === 'hi'){
        msg.reply('hello');
    }
    if(msg.content.toLowerCase() === 'haha'){
        msg.reply('hahahaha')
    }
});

client.login(DISCORD_BOT_TOKEN);