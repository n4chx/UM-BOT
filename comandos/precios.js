const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = async (client, message, args, config) => {

  try {
    message.channel.send({embed: {
      color: 3447003,
      author: {
          name: client.user.username,
          icon_url: client.user.avatarURL()
      },
      title: "Comandos del León",
      url: "https://discord.com/oauth2/authorize?client_id=753707954783518791&permissions=8&scope=bot",
      description: "Comandos para calcular el porcentaje de los precios",
      fields: [{
          name: "-calc10 <precio>",
          value: "Calcula el total con un incremento del 10%"
        },
        {
          name: "-calc20 <precio>",
          value: "Calcula el total con un incremento del 20%"
        },
        {
          name: "-calc30 <precio>",
          value: "Calcula el total con un incremento del 30%"
        },
      
      ],
      timestamp: new Date(),
      footer: {
        icon_url: client.user.avatarURL(),
        text: "Taller S2"
      }
    }
});
  } catch (error) {
    console.log(error)
  }
}