const DiceRoller = require('rpg-dice-roller');
const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
    const data = new Discord.MessageEmbed().setTitle('Résultat du jet').setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }));
    let dice = new DiceRoller.DiceRoller(); // create a new instance of the DiceRoller

    let input = args[0] ? args[0] : '1d6';

    dice.roll(input); // roll the dice
    console.log(input)
    let result = dice.roll(input); // get the latest dice rolls from the log
    data.setDescription(`Lancement d'un ${result.toString()}`)

    return message.channel.send(data).catch(console.error);
};

module.exports.help = {
	name: 'roll',
	aliases: ['r'],
    short: 'permet de lancer les dé de son choix',
	description: "Commande qui permet de lancer autant de dé qu'on veux (limité a 100 max svp)\n x est le nombres de dé lancé\nY le nombre de face que le dé aura. .",
	usage: '[XdY]',
	args: false,
}