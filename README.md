# Evira Bot
<div align="center">
###### <i>Evira is a Discord bot intended to be able to perform various tasks, ranging from simple server moderation (Kick, ban etc.)</i>

---

<br>
<a href="https://discord.gg/GG69j8w"> 
    <img src="https://img.shields.io/discord/439323863139090434.svg?colorB=7289da&logo=discord&logoColor=white&label=Support&style=for-the-badge" alt="Support">
</a>
<a href="https://travis-ci.com/xrzky/Evira-Bot">
    <img src="https://img.shields.io/travis/com/xrzky/Evira-Bot.svg?style=for-the-badge" alt="Build">
</a>
<a href="https://github.com/xrzky/Evira-Bot">
    <img src="https://img.shields.io/github/languages/top/xrzky/Evira-Bot.svg?colorB=f0db4f&style=for-the-badge" alt="Languages">
</a>
<a href="https://github.com/xrzky/Evira-Bot/blob/master/LICENSE">
    <img src="https://img.shields.io/github/license/XRzky/Evira-Bot?color=blue&style=for-the-badge" alt="License">
</a>
<br>
<a href="https://github.com/xrzky/Evira-Bot">
    <img src="https://img.shields.io/github/package-json/v/xrzky/Evira-Bot.svg?colorB=Orange&style=for-the-badge" alt="Version">
</a>
<a href="https://github.com/xrzky/Evira-Bot/issues">
    <img src="https://img.shields.io/github/issues/xrzky/Evira-Bot.svg?style=for-the-badge&colorB=37f149" alt="Issues">
</a>
<a href="https://github.com/xrzky/Evira-Bot/pulls">
    <img src="https://img.shields.io/github/issues-pr/xrzky/Evira-Bot.svg?style=for-the-badge&colorB=37f149" alt="Pull Request">
</a>
</div>
this bot was made in [Node.JS](https://nodejs.org), using the [Discord.js](https://discord.js.org/#/) library.

---

## Features
- Moderation commands (kick, ban etc)
- Search youtube for videos
- Search 4chan
- And more...

## Installation
Clone the repository
```
git clone -b master https://github.com/XRzky/Evira-Bot.git
```
Install Node dependencies
```
npm install
```
Configuration
```
Create a .env and copy the contents from sample.env and replace the info with your details
```
Run the bot!
```
node index.js
```

## Configuration
You can find all settings in the config.json file, without filling in all the details some features might not work as expected. Below you can find a quick summary of all settings in the **.env** file

- **token**: Your discord api token
- **youtube_api_key** Your youtube api key
- **prefix** Prefix to use before commands (example: ?help where ? is the prefix)

- **admins** List of admin users allowed to run dangerous commands such as eval
- **welcome** Welcome message when a user joins the server, enabled by default
- **welcome.add_role** Add a role to the user on joining, disabled by default

- **bot_channel** Channel where the bot listens to commands, disabled by default
- **bot_channel.music** Settings for all music commands

## Contributing
If you want to contribute to this project you can follow the steps below.
Not a programmer? You can always [open an issue](https://github.com/xrzky/Evira-Bot/issues/new) and share your ideas!
More information about contributing can be found [here](.github/CONTRIBUTING.md).
