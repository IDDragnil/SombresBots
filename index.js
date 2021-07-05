const Discord = require('discord.js')
const config = require('./config.json')
const bot = new Discord.Client()
const fs = require('fs')
bot.commands = new Discord.Collection()

bot.login(config.token)
 
// fs.readdir('./commands', function (err, files) {
//     if (err) throw err
//     files.forEach(file => {
//         const command = require(`./commands/${file}`)
//         bot.commands.set(command.name, command)
//     })
// })

fs.readdir("./commands/", (err, files) => {
    if(err) console.log(err);
  
    let jsfile = files.filter(f => f.split(".").pop() === "js");
    if(jsfile.length <= 0){
      console.log("Couldn't find commands.");
      return;
    }
  
    jsfile.forEach((f, i) =>{
        let props = require(`./commands/${f}`);
        console.log(`${f} loaded!`);
        bot.commands.set(props.help.name, props);
    });
});
  

bot.on('ready', function() {
    console.log(bot.user.username + " is online.")
    bot.user.setActivity(`Mon prefix est "${config.prefix}"`).catch(console.error)
})

bot.on('message', function (message) {
    if (message.type !== 'DEFAULT' || message.author.bot) return
    if (message.content === '!ping')
        message.reply('pong')

    let prefix = config.prefix;
    if(!message.content.startsWith(prefix)) return
    let args = message.content.slice(prefix.length).split(/ +/);
	let commandName = args.shift().toLowerCase();
	let commandfile = bot.commands.get(commandName) || bot.commands.find(cmd => cmd.help.aliases && cmd.help.aliases.includes(commandName));
    
    if(commandfile) commandfile.run(bot,message,args);
})