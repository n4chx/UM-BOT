const Discord = require('discord.js');
const client = new Discord.Client();
const fileName = './config/sonidos.json';
const file = require(fileName);
const ytdl = require("ytdl-core");
const fs = require("fs");



exports.run = async (client, message, args, config) => {
  
  try {

  

  

    var nombre = args.join(" ")

    if (!nombre) return message.channel.send("Ingresa bien el nombre del sonido perri")

    if (!file[nombre]) return message.reply("Ingresa bien el nombre del sonido perri")



    const voiceChannel = message.member.voice.channel;

    if (!voiceChannel) {
        return message.reply('Tenes que estar en un canal de voz rey');
    }



    voiceChannel.join().then(connection => {



        const stream = ytdl(file[nombre], { filter: 'audioonly'}, { volume: 5 }); 
			const dispatcher = connection.play(stream);

			dispatcher.on('finish', () => voiceChannel.leave());

    })

     




  } catch (error) {
    console.log(error)
  }
};