const discord = require("discord.js");

/**
 * 
 * @param {discord.Message} msg The message of the ping command
 */
function ping(msg){
    msg.reply("pong!");
}

module.exports.ping = ping;