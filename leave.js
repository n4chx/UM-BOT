const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message, args, ops) => {

  try {


  const voiceChannel = message.member.voice.channel;


if (!voiceChannel) return message.reply("Tienes que estar en un canal de voz")



 

voiceChannel.leave();

  message.channel.send('nos juimos...');


 



  } catch (error) {
    console.log(error)
  }


}