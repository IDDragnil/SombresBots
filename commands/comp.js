const Discord = require('discord.js')
const DiceRoller = require('../node_modules/rpg-dice-roller/dice-roller.js');

module.exports.run = async (bot, message, args) => {
    let dice = new DiceRoller.DiceRoller();
    const data = new Discord.MessageEmbed().setTitle('Résultat du jet').setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }));

    if (!args.length) {
        data.setDescription("Erreur, vous n'avais pas renseigner la base du jet")
        data.setColor(0x961126)
        return message.channel.send(data);
    }
    const Num = parseInt(args[0], 10);
    Num1 = dice.roll('1d6')
    if (Num > 5 && Num < 8)
        Num1 = dice.roll('1d8')
    else if (Num > 7 && Num < 10)
        Num1 = dice.roll('1d10')
    else if (Num > 9 && Num < 12)
        Num1 = dice.roll('1d12')
    else if (Num > 11 && Num < 16)
        Num1 = dice.roll('1d16')
    else if (Num > 15 && Num < 20)
        Num1 = dice.roll('1d20')

    data.setDescription('Le dé est tombé sur ' + Num1)
    if (Num1 > Num) {
        data.setDescription(data.description + '\nLe résultat est donc ' + 0)
        data.setColor(0x961126)
    } else {
        data.setDescription(data.description + "\nLe résultat est donc " + (Num1))
        data.setColor(0x3bbf45)                
    } 
    return message.channel.send(data);
}

module.exports.help = {
    name: 'comp',
    short: 'permet de lancer un dé selon la CHASE',
    description: "Commande qui permet de lancé un dé selon la CHASE donné",
    usage: "[CHASE] + [Compétence]\n Rajouté la compétence est optionnel"
}