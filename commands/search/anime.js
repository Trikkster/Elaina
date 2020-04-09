const { RichEmbed } = require('discord.js');
const malScraper = require('mal-scraper');
const Errors = require('../../utils/errors');

module.exports = {
    config: {
        name: 'anime',
        aliases: [],
        category: 'search',
        description: 'Searches information from my anime list.',
        usage: '<anime name>',
        example: 'Angel Beats!',
        accessableby: 'Members'
    },
    run: async (bot, message, args) => {
        const search = `${args}`;
        
        if(search < 1) return message.channel.send({embed: { color: 15158332, description: `That doesn't seem right... Usage: ` + `\`${exports.help.usage}\`` } });
        
        malScraper.getInfoFromName(search).then((data) => {
            const malEmbed = new RichEmbed()
            .setAuthor(`My Anime List search result for ${args}`.split(',').join(' '))
            .setThumbnail(data.picture)
            .setColor('#ffc1cc') //I personally use bubblegum pink!
            .addField('English Title', data.englishTitle, true)
            .addField('Japanese Title', data.japaneseTitle, true)
            .addField('Type', data.type, true)
            .addField('Episodes', data.episodes, true)
            .addField('Rating', data.rating, true)
            .addField('Aired', data.aired, true)
            .addField('Score', data.score, true)
            .addField('Score Stats', data.scoreStats, true)
            .addField('Link', data.url);
            
            if(!data.englishTitle || !data.japaneseTitle || !data.url) 
                return message.channel.send(Errors.noText(message, 'anime'));
            
            message.channel.send(malEmbed);
        })
    }
};