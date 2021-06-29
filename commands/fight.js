const Discord = require('discord.js')
const { Random, nodeCrypto, MersenneTwister19937 } = require("random-js");

module.exports.run = async (bot, message, args) => {
    const data = new Discord.MessageEmbed().setTitle('Résultat du jet').setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }));

    const random = new Random(MersenneTwister19937.autoSeed());
    let Num1 = random.integer(1,6)
    let Num2 = random.integer(1,6)

    data.setDescription('Le dé est tombé sur ' + Num1)
    if (!args.length) {
        if (Num1 > 1 && Num1 < 6) {
            data.setDescription(data.description + '\nLe résultat est donc ' + Num1)
            data.setColor(0x03a9f4)
        } else if (Num1 == 1) {
            if (Num2 == 1) data.setDescription('\nECHEC CRITIQUE LE RESULTAT EST DONC 0\n')
            if (Num2 != 1) {
                data.setDescription(data.description + '\nLe deuxieme dé est tombé sur ' + Num2)
                data.setDescription(data.description + "\nLe résultat est donc 1")
            } 
            data.setColor(0x961126)
        } else {
            data.setDescription(data.description + '\nLe deuxieme dé est tombé sur ' + Num2)
            data.setDescription(data.description + '\nLe résultat est donc ' + (Num1 + Num2))
            data.setColor(0x3bbf45)                
        }
        return message.channel.send(data);
    }

    const Num = parseInt(args[0], 10);
    if (Num1 > 1 && Num1 < 6) {
        data.setDescription(data.description + '\nLe résultat est donc ' + (Num1 + Num))
        data.setColor(0x03a9f4)
    } else if (Num1 == 1) {
        if (Num2 == 1) data.setDescription('\nECHEC CRITIQUE LE RESULTAT EST DONC ' + (Num + 0))
        if (Num2 != 1) {
            data.setDescription(data.description + '\nLe deuxieme dé est tombé sur ' + Num2)
            data.setDescription(data.description + "\nLe résultat est donc " + (Num + 1))
        } 
        data.setColor(0x961126)
    } else {
        data.setDescription(data.description + '\nLe deuxieme dé est tombé sur ' + Num2)
        data.setDescription(data.description + '\nLe résultat est donc ' + (Num1 + Num2 + Num))
        data.setColor(0x3bbf45)                
    }
    return message.channel.send(data);
}

module.exports.help = {
    name: 'fight',
    aliases: ['f'],
    short: 'permet de lancer un dé de combat',
    description: "Commande qui permet de lancé un dé explosif",
    usage: "[Compétence]\n Rajouté la compétence est optionnel"
}