module.exports.run = async (bot, message, args) => {
    message.channel.send('Bonjour à toi')
}

module.exports.help = {
    name: 'bjr',
    short: 'permet de ne pas ce sentir seul',
    description: "Commande pour ne plus etre seul.",
    usage: " "
}