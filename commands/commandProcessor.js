const discord = require("discord.js");
const ping = require("./ping/ping.js");
/**
 * 
 * @param {discord.Message} msg The message identified as a command
 * @param {string} prefix The prefix for commands
 */
function processCommand(msg, prefix){
    let message = msg.content.split(' ');
    let command = message[0];
    command = command.slice(prefix.length);
    switch(command){
        case "ping" : 
            ping.ping(msg);
            break;
    }
} 

module.exports.processCommand = processCommand;