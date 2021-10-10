const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = async (client, message, args) => {

try {

let member = message.mentions.members.first()
  || message.guild.members.resolve(args[0])
  || message.member
      
const embed = new Discord.MessageEmbed()
  .setImage(member.user.displayAvatarURL())
  .setColor(member.displayHexColor)
  .setFooter(
    (member.id === message.member.id)?`Tu avatar ${member.displayName}`:`Avatar de ${member.displayName}`
  );
  
message.channel.send({embed: embed});

} catch (error) {
    console.log(error)
  }

}