/**
 * @author Anirudh Giri <anirudhgiri@protonmail.com>
 */
 /*
DukeBot, A General Purpose Discord Bot
26th November 2019
*/

//importing discord.js and creating a discord client
const discord = require("discord.js");
const bot = new discord.Client();

require("dotenv").config();

const commandProcessor = require("./commands/commandProcessor");

const token = process.env.CLIENT_TOKEN;

let prefix =  '!';

bot.on("ready", () => console.log(`Logged in as ${bot.user.tag} in ${bot.guilds.size} server(s)!`));

bot.on("message", msg =>{
    //ignore message if the author of message is a bot
    if(msg.author.bot)
        return;
    //if the first letter of the message is our prefix, it is a bot command
    if(msg.content.substring(0,prefix.length) == prefix){
        commandProcessor.processCommand(msg,prefix);
    }
});

//login the bot
bot.login(token);