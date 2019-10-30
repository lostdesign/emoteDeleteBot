const Discord = require('discord.js');
const client = new Discord.Client();
const CONFIG = require('./config.json')

client.on('message', msg => {
  // Delete if message contents only: Unicode, custom and animated Emotes
  if (/^(\s*(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff]|<a?:[\w\!\-\+\/]+:\d+>)\s*)+$/.test(msg.content)) {
    msg.delete()
  }
});

client.login(CONFIG.token);