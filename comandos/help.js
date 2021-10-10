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
      description: "Comandos y ayudas para el uso del botardo",
      fields: [{
          name: "-sonidos",
          value: "Muestra los sonidos disponibles listos para usar"
        },
        {
          name: "-p",
          value: "Comando -p + sonido a utilizar, lo reproduce en el chat de voz"
        },
        {
          name: "-pp",
          value: "Comando -pp + nombre o link de youtube, lo reproduce en el chat de voz"
        },
        {
          name: "-leave",
          value: "Desconecta al BOT de el chat de voz"
        }
      
      ],
      timestamp: new Date(),
      footer: {
        icon_url: client.user.avatarURL(),
        text: "nashe"
      }
    }
});
  } catch (error) {
    console.log(error)
  }
}