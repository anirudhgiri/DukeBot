const discord = require("discord.js");

/**
 * 
 * @param {discord.Message} msg The message of the ping command
 */
function ping(msg){
    msg.reply(`Pong! \`${Date.now() - msg.createdTimestamp}ms\``);
}

module.exports.ping = ping;