require ('dotenv').config();
const {DISCORD_BOT_TOKEN} = process.env;
const Discord = require('discord.js');
const client = new Discord.Client();

var counter = 0;
var num1;
var num2;

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
    if(msg.content === 'number'){
        msg.reply(counter)
    }
    if(msg.content === 'add'){
        counter++;
        msg.reply(counter)
    }
    if(msg.content === 'sumCalc'){
        add(num1,num2);
    }
    
    function add(p1,p2)
    {
        msg.reply(p1+p2)
    }

    switch(msg.content)
    {
        case 1: 
            num1 = 1;
            break;
        case 2:
            num2 = 2;
            break;
        default:
            num1=0;
            num2=0;
            break;

    }

});

client.login(DISCORD_BOT_TOKEN);