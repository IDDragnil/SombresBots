const Discord = require('discord.js')
const { prefix } = require('../config.json');

module.exports.run = async (bot, message, args) => {
    const { commands } = message.client;
    const data = new Discord.MessageEmbed().setColor(0x03a9f4).setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }));
    
    if (!args.length) {
            data.setTitle('Voila la liste des commande implementé')
            data.setDescription(commands.map(command => '`' + command.help.name + '`' + ' - ' + command.help.short).join("\n") + `\nTu peux envoyer \`${prefix}help [Commande]\` Pour avoir plus d'information sur la commande!`)

            return message.channel.send(data);
    }

    const name = args[0].toLowerCase();
    const command = commands.get(name);

    if (!command) {
        return message.reply("That's not a valid command!");
    }

    data.setDescription(`**Name:** ${command.help.name}`);
    
    if (command.help.description) data.setDescription(data.description + `\n**Description:** ${command.help.description}`);
    if (command.help.usage) data.setDescription(data.description + `\n**Utilisation:** ${prefix}${command.help.name} ${command.help.usage}`);

    return message.channel.send(data);
}

module.exports.help = {
    name: 'help',
    short: "permet d'obtenir de l'aide",
    description: "List all of my commands or info about a specific command.help.",
    usage: "[command name]"
}