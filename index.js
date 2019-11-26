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

const commandProcessor = require("./commands/commandProcessor");

//the token and (opionally) the prefix should be provided as arguments in the terminal (node index.js [token] [optional_prefix]) 
if(process.argv.length < 3){
    console.error("Bot Token Not Provided!");
    return;
}

const token = process.argv[2]; //the client token is the 3rd argument (node index.js [token])

let prefix = (process.argv.length < 4) ? '!' : process.argv[3]; //the prefix is the fourth argument. If not specified, it takes the default prefix '!' 

bot.on("ready", () => console.log(`Logged in as ${bot.user.tag} in ${bot.guilds.size} server(s)!`));

bot.on("message", msg =>{
    //ignore message if the author of message is a bot
    if(msg.author.bot)
        return;
    //if the first letter of the message is our prefix, it is a bot command
    if(msg.content[0] == prefix){
        commandProcessor.processCommand(msg);
    }
});

//login the bot
bot.login(token);