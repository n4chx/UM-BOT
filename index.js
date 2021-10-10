const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

// ================= START BOT CODE ===================

const Discord = require("discord.js");
const fs = require("fs");
const client = new Discord.Client();
const YouTube = require("discord-youtube-api");
const ytdl = require('ytdl-core');
const youtube = new YouTube(process.env.YTB_API);

const prefix = process.env.BOT_PREFIX;

const queue = new Map();


const Enmap = require("enmap");


fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
});


client.commands = new Enmap();

fs.readdir("./comandos/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => { 
    if  (!file.endsWith(".js")) return;
    let props = require(`./comandos/${file}`);
    let commandName = file.split(".")[0];
    console.log(`Intentando cargar el comando "${commandName}"`);
    client.commands.set(commandName, props);
  });
}); 

client.on("ready", () => {
  
  console.log("Activo bb.");

  client.user.setActivity(`${prefix}help | Estoy en ${client.guilds.cache.size} servidores.`, { type: 'PLAYING' })
})

// Deteccion de mensajes
client.on("message", async (message) => {
  // ****************
  // detecta palabras
  // ****************
  // startswith     
  if (message.content.startsWith("eve")) {
    message.channel.send("Full bigotuda la Eve. Na mentira, Eve la genia de las genias, la mejor del mundo mundial");
  }
  if ((message.content.startsWith("coba")) || (message.content.startsWith("Coba"))) {
    message.channel.send("El coba? full cobani");
  }
  if ((message.content.startsWith("pitu")) || (message.content.startsWith("Pitu")) || (message.content.startsWith("pito"))) {
    message.channel.send("Cuñada mia pitu (only nach)");
  }  
  if (message.content.startsWith("valorant")) {
    message.channel.send("Valorant? cs con poderes");
  }
  if (message.content.startsWith("lol")) {
    message.channel.send("Lolcito? Juego de hombre pa");
  }
  if (message.content.startsWith("among")) {
    message.channel.send("Among? Madura pelotudito");
  }
  if (message.content.startsWith("tati")) {
    message.channel.send("Le re cuesta al tati");
  }  
  if (message.content.startsWith("move")) {
    message.channel.send("Para que queres jugar al move si sos un manco");
  }
  if (message.content.startsWith("gabi")) {
    message.channel.send("Fua pobre gabi que tiene que aguantar a la loca de pitu y sus gritos");
  }
  if (message.content.startsWith("dbd")) {
    message.channel.send("Sale dbd pa? Puede ser pa? anashei");
  }
  if (message.content.startsWith("cs")) {
    message.channel.send("Como vas a jugar al cs. Querete un poco");
  } 
  if (message.content.startsWith("pato")) {
    message.channel.send("El Pato má ladrón. El que rolea hace años papá");
  }
  if (message.content.startsWith("kira")) {
    message.channel.send("KIRA?!!!! Es el rey de reyes!!!!!");
  }
  if (message.content.startsWith("hola")) {
    message.channel.send("Tu nariz contra mis bolas");
  }
  if (message.content.startsWith("tonga")) {
    message.channel.send("Tonga? Ahi viene, va a pasear a zeus, darle de comer, ir a comprar, bañarse, barrer, lavar los platos y vuelve.");
  }
  //if ((message.content.startsWith("pipa")) || (message.content.startsWith("Pipa"))) {
    //message.channel.send("Pipa corneta");
  //}
  if ((message.content.startsWith("newells")) || (message.content.startsWith("ñubel"))) {
    message.channel.send("Este server es 100% rojinegro ❤🖤");
  }
  if((message.content.startsWith("clavi")) || (message.content.startsWith("nemames")) || (message.content.startsWith("lucho")) || (message.content.startsWith("tukida"))) {
    message.channel.send("Realmente eres el rey de reyes");
  }
  // endswith
  if (message.content.endsWith("contes")) {
    message.channel.send("No me la constancia de alumno regular");
  }
  if (message.content.endsWith("rojos")) {
    message.channel.send("Los rojos? Full cagones");
  }

  if(message.content.substring(0, 1) == process.env.BOT_PREFIX){
    const args = message.content.slice(process.env.BOT_PREFIX.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
    // ***********************
    // Mensajes con el prefijo
    // ***********************
    if(command === 'kick'){
      let user = message.mentions.users.first();
      let razon = args.slice(1).join(' ');
      if (message.mentions.users.size < 1) 
        return message.reply('Debe mencionar un gil.').catch(console.error);
      if (!razon) 
        return message.channel.send('Escriba una razón, `-kick @username [razón]`');
      message.guild.member(user).voice.kick();
      message.channel.send(`**${user.username}**, Te fuiste kickeado gil, razón: ${razon}.`);
    }
    // kickdiscord
    if(command === 'kickdiscord'){
      let user  = message.mentions.users.first();
      let razon = args.slice(1).join(' ');
      if(message.mentions.users.size < 1) 
        return message.reply('Debe mencionar un gil.').catch(console.error);
      if(!razon) 
        return message.channel.send('Escriba una razón, `-kickdiscord @username [razón]`');
      if(!message.guild.member(user).kickable)
        return message.reply('No puedo sacar al gil del discord.');     
      message.guild.member(user).kick();
      message.channel.send(`**${user.username}**, Te fuiste kickeado del discord gil, razón: ${razon}.`);
    }
    // Amor
    if(command === 'amor'){
      let ran = Math.floor(Math.random() * 100)
      if(message.mentions.users.size != 2) 
        return message.reply('Tenes que mencionar a dos cornetas.').catch(console.error);
      let userArray =  message.mentions.users.array();
      let user  = userArray[0];
      let user2 = userArray[1];
      message.channel.send('**' + user.username + '**' + ' y ' + '**' + user2.username + '** tienen un ' + ran + '% de compatibilidad.');
    }

    // Nefast@
    if((command === 'el') || (command === 'la')){
      let ran = Math.floor(Math.random() * 2)
      if(ran === 1)
        if(command === 'el')
          message.channel.send(args + '? un groso')
        else
          message.channel.send(args + '? una grosa')
      else
        if(command === 'el')
          message.channel.send(args + '? un nefasto')
        else
          message.channel.send(args + '? una nefasta')
    }
    // Calculo total con 10%
    if(command === 'calc10') {    
      if (isNaN(args))
        message.channel.send('Ingresa un numero valido corneta');
      else
        message.channel.send('Precio = $' + calculoTotal(args, 1.1)); // 10% de aumento;
    }
    // Calculo total con 20%
    if(command === 'calc20') {    
      if (isNaN(args))
        message.channel.send('Ingresa un numero valido corneta');
      else
        message.channel.send('Precio = $' + calculoTotal(args, 1.2)); // 20% de aumento;
    }
    // Calculo total con 30%
    if(command === 'calc30') {    
      if (isNaN(args))
        message.channel.send('Ingresa un numero valido corneta');
      else
        message.channel.send('Precio = $' + calculoTotal(args, 1.3)); // 30% de aumento;
    }
    // funcion que calcula el total
    function calculoTotal(valor, porc) {
      return(args * porc);
    }

    // Instagram del gil
    if(command === 'ig') {
      message.channel.send("Seguime en instagram perri: juanirodriguez7");
    }
    if(command === 'leonw') {
      message.channel.send("$m") || message.channel.send("$w") || message.channel.send("$h");
    }
    // *************************
    // To-Do MUSICA (deprecated)
    // *************************
    if (command === "skip") {
      const serverQueue = queue.get(message.guild.id);
      skip(message, serverQueue);
    }
    if (command === "stop") {
      const serverQueue = queue.get(message.guild.id);
      stop(message, serverQueue);
    }
    if (command === "clear") {
      const serverQueue = queue.get(message.guild.id);
      clear(message, serverQueue);
    }
    if (command === "pp") {
      const serverQueue = queue.get(message.guild.id);
      let busqueda = args.join(" ")
      if(!busqueda) 
        return message.reply("¡Debes ingresar el nombre o el link de la música!")
      const voiceChannel = message.member.voice.channel;
      if (!voiceChannel) {
          return message.reply('tienes que estar en un canal de voz!');
      }
      const permissions = voiceChannel.permissionsFor(message.client.user);
      if (!permissions.has("CONNECT") || !permissions.has("SPEAK")) {
        return message.channel.send("¡No tengo permisos para hablar o conectarme al canal de voz!");
      }        
      const nameaso = await searchYouTubeAsync(busqueda);
      const urlaso = await searchYouTube1(busqueda);  
      const song = {
        title: urlaso,
        url: nameaso
      };      
      if (!serverQueue) {
        const queueContruct = {
          textChannel: message.channel,
          voiceChannel: voiceChannel,
          connection: null,
          songs: [],
          volume: 5,
          playing: true
        };      
        queue.set(message.guild.id, queueContruct);      
        queueContruct.songs.push(song);      
        try {
          var connection = await voiceChannel.join();
          queueContruct.connection = connection;
          play(message.guild, queueContruct.songs[0]);            
        } catch (err) {
          console.log(err);
          queue.delete(message.guild.id);
          message.channel.send(err);
        }
      } 
      else{
        serverQueue.songs.push(song);
        message.channel.send(`**${song.title}** ha sido añadida a la lista!`);
      }        
    }

    // funciones del reproductor
    function skip(message, serverQueue) {
      if (!message.member.voice.channel)
        return message.channel.send("¡Tienes que estar en un canal de voz!");
      if (!serverQueue)
        return message.channel.send("¡No hay ninguna canción para saltar!");
      serverQueue.connection.dispatcher.destroy();
      serverQueue.songs.shift();
      play(message.guild, serverQueue.songs[0])
    }
    function stop (message, serverQueue)  {
      if (!message.member.voice.channel)
        return message.channel.send("¡Tienes que estar en un canal de voz!");
      serverQueue.songs = [];
      serverQueue.connection.dispatcher.destroy();
    }
    function clear (message, serverQueue) {
      if (!message.member.voice.channel)
        return message.channel.send("¡Tienes que estar en un canal de voz!");
      serverQueue.songs = [];
      queue.delete(message.guild.id);
      serverQueue.connection.dispatcher.destroy();
    }
    function play(guild, song) {
      const serverQueue = queue.get(guild.id);
      if (!song) {
        serverQueue.voiceChannel.leave();
        queue.delete(guild.id);
        return;
      }
      const dispatcher = serverQueue.connection
        .play(ytdl(song.url))
        .on("finish", () => {
          serverQueue.songs.shift();
          play(guild, serverQueue.songs[0]);
        })
        .on("error", error => console.error(error));
        dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
        serverQueue.textChannel.send("Emitiendo: **"+song.title+"**\n\n"+song.url);
    }
    async function searchYouTubeAsync(busqueda) {
      var video = await youtube.searchVideos(busqueda.toString().replace(/,/g,' '));
      return video.url;
    }  
    async function searchYouTube1(busqueda) {
      var video = await youtube.searchVideos(busqueda.toString().replace(/,/g,' '));
      console.log(video.title)
      return video.title;
    }
  }     
});

client.on("messageDelete", (message) => {
    let canal = client.channels.cache.get('755208264584528006');
    canal.send(`**${message.author.username}** elimino un mensaje con el contenido: ${message}`);   
});

client.login(process.env.BOT_TOKEN);