const discord = require("discord.js");
const ping = require("./ping/ping.js");
/**
 * 
 * @param {discord.Message} msg The message identified as a command
 */
function processCommand(msg){
    let message = msg.content.split(' ');
    let command = message[0];
    command = command.slice(1);
    switch(command){
        case "ping" : 
            ping.ping(msg);
            break;
    }
} 

module.exports.processCommand = processCommand;