const Discord = require('discord.js');
const client = new Discord.Client();
const fileName = './config/sonidos.json';
const file = require(fileName);


exports.run = async (client, message, args, config) => {
  
  try {

    var keys = [];
   for(var k in file) keys.push(" "+k);

   message.channel.send("Sonidos disponibles del BOT UM: ``"+keys+"`` ");

  


  } catch (error) {
    console.log(error)
  }
};