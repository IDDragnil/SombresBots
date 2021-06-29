const Discord = require('discord.js')
const { Random, nodeCrypto, MersenneTwister19937 } = require("random-js");

module.exports.run = async (bot, message, args) => {
    const data = new Discord.MessageEmbed().setTitle('Résultat du jet').setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }));
    const random = new Random(MersenneTwister19937.autoSeed());

    if (!args.length) {
        data.setDescription("Erreur, vous n'avais pas renseigner la base du jet")
        data.setColor(0x961126)
        return message.channel.send(data);
    }

    const Num = parseInt(args[0], 10);

    if (Num > 5 && Num < 8) {
        Num1 = random.integer(1,8)
        data.setDescription("Lancement d'un d8")
    } else if (Num > 7 && Num < 10) {
        Num1 = random.integer(1,10)
        data.setDescription("Lancement d'un d10")
    } else if (Num > 9 && Num < 12) {
        Num1 = random.integer(1,12)
        data.setDescription("Lancement d'un d12")
    } else if (Num > 11 && Num < 16) {
        Num1 = random.integer(1,16)
        data.setDescription("Lancement d'un d16")
    } else if (Num > 15 && Num < 20) {
        Num1 = random.integer(1,20)
        data.setDescription("Lancement d'un d20")
    } else {
        Num1 = random.integer(1,6)
        data.setDescription("Lancement d'un d6")
    }
    data.setDescription(data.description + '\nLe dé est tombé sur ' + Num1)
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