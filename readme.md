# EMOTE DELETE BOT
This bot deletes any messages if the message only consists of emotes. This bot was made for a community member of the Offical Partner Discord.
```
Animated Emotes: <a:SomeEmote:234234>
Normal Emotes: <:SomeEmote:234234>
Unicode Emotes: 🐦
```

## Installation
You need node.js installed on the target system in oder to run this.

- Clone project
- Go into project directory
- `npm install` to install dependencies
- Duplicate `config.example.json` and rename to `config.json`
- Get your bot token from discord developers portal
- Enter token in `config.json`
- `node index.js` to run the bot
- Invite the bot to your server, with atleast `Manage Messages` permission

In order to run the bot forever, use something like screen, pm2 or forever.