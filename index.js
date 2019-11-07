require ('dotenv').config();
const {DISCORD_BOT_TOKEN} = process.env;
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('Logged in as ${client.user.tag}!');
});

client.on('message', msg => {
    if(msg.content ==='ping') {
        msg.reply('pong');
    }
    if(msg.content ==='hello'){
        msg.reply('HELLO\nhello\nhello')
    }
});

client.login(DISCORD_BOT_TOKEN);