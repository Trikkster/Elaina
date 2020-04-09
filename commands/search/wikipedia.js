const { RichEmbed } = require('discord.js');
const { stripIndents } = require("common-tags");
const fetch = require('node-fetch');
const moment = require("moment");

module.exports = {
    config: {
        name: 'wikipedia',
        aliases: ['wiki'],
        category: 'search',
        description: 'Searches Wikipedia Article use title',
        usage: '<query:string>',
        example: 'Google',
        accessableby: 'Members'
    },
    run: async (bot, message, args) => {
        let query = args.join(" ")

        const article = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(query)}`)
        .then(response => response.json())
        .catch(() => {
            throw "I couldn't find a wikipedia article with that title!";
        });
        
        if(!article.content_urls) throw "I couldn't find a wikipedia article with that title!";
        
        const embed = new RichEmbed()
        .setColor(4886754)
        .setAuthor("Wikipedia Search Engine", 'https://i.imgur.com/fnhlGh5.png', 'https://en.wikipedia.org/')
        .setTitle(article.title)
        .setURL(article.content_urls.desktop.page)
        .setDescription(article.extract)
        .setFooter('Powered by Wikipedia')
        .setTimestamp();
        
        message.channel.send(embed);
    }
};