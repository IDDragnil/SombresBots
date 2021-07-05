const mat = require('mathjs');
const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    if (!args[0]) return message.channel.send('bite');

    let calcul;

    try {
        calcul = mat.evaluate(args.join(' '));
    } catch (e) {
        return message.channel.send("BITE")
    }
    message.channel.send(calcul)
}

module.exports.help = {
    name: 'math',
    short: 'permet de ne pas ce sentir seul',
    description: "Commande pour ne plus etre seul.",
    usage: " "
}