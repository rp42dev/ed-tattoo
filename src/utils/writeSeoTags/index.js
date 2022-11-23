const { generateFileList } = require('../crawler');
const parseMD = require('parse-md').default;
const { join } = require('path');
const fs = require('fs');


const list_of_descriptions = {
    'Black and grey tattoos Lørenskog': 'I specialize in black and grey tattoos. I love contrast and dept that black and gray can give and I love to create new designs and styles.',
    'Tattoo cover ups Lørenskog': 'We cover up old tattoos, and make them look new again. we will make sure that the new tattoo is a perfect match for the old one.',
    'Tattoo designs Lørenskog': 'I can create a custom tattoo design for you. I can also make a tattoo design based on your ideas. We can work together to create a unique tattoo design.',
    'Traditional tattoo Lørenskog': 'I specialize in traditional tattoos. I love the old school style and I love to create new designs and styles. I can create a custom tattoo design for you.',
    'Custom tattoos Lørenskog': 'I create unique custom tattoos. I can also make a tattoo design based on your ideas. Or We can work together to create a unique tattoo design.',
    'Color tattoos Lørenskog': 'I specialize in color tattoos. I love the bright colors and I love to create new designs and styles. I can create a custom tattoo design for you.',
    'Tattoo studio Lørenskog': 'We specialize in custom tattoos. We can create a custom tattoo design for you. We can also make a tattoo design based on your ideas.',
    'Tattoo artist Lørenskog': 'I specialize in black and grey tattoos, color tattoos, traditional tattoos, cover ups and custom tattoos, I can create a custom tattoo design for you.',
    'Tattoo artist Lørenskog near Oslo': 'I am a tattoo artist in Lørenskog near Oslo. I specialize in black and grey tattoos, color tattoos, traditional tattoos, cover ups and custom tattoos.',
    'Tattoo studio Lørenskog near Oslo': 'We specialize in custom tattoos. We can create a custom tattoo design for you. We can also make a tattoo design based on your ideas.',
    'Full body tattoos Lørenskog': 'I specialize in full body tattoos. Tattooing the whole body is a big project, let me help you with the design and the process.',
    'Full sleeve tattoos Lørenskog': 'Tattoo a full sleeve is a big project, let me help you with the design and the process. Contact me for a free consultation.',
    'Full back tattoos Lørenskog': 'Fancy a full back tattoo? I can help you with the design and the process. Contact me for a free consultation. And let me help you with your next tattoo.',
    'Full leg tattoos Lørenskog': 'I specialize in full leg tattoos. Tattooing the whole leg is a big project, let me help you with the design and the process.',
    'Full arm tattoos Lørenskog': 'I specialize in full arm tattoos. Visit my studio for a free consultation. I can help you with the design and the process. Contact me for a free consultation.',
    'Tattoo in Lørenskog': 'I am a tattoo artist in Lørenskog. Is it your first tattoo? I can help you with the design and the process. Contact me for a free consultation.',
    'Tattoo in Lørenskog near Oslo': 'I am a tattoo artist in Lørenskog near Oslo. Book a free consultation. I can help you with the design and the process. Contact me for a free consultation.',
    'Tattoo near Oslo': 'My studio is located in Lørenskog, near Oslo, Car parking is available. Clean and safe environment. Contact me for a free consultation.',
    'Realism tattoos Lørenskog': 'I specialize in realism tattoos. I love the contrast and dept that realism can give and I love to create new designs and styles.',
    'Gray wash tattoos Lørenskog': 'I specialize in gray wash tattoos. Gray wash is a technique that can give a tattoo a very realistic look. I love to create new designs and styles.',
    'New school tattoos Lørenskog': 'I specialize in new school tattoos. I love the bright colors and I love to create new designs and styles. I can create new school tattoo designs for you.',
    'Old school tattoos Lørenskog': 'I specialize in old school tattoos. I love the old school style and I love to create new designs and styles. I can create a custom tattoo design for you.',
    'Tribal tattoos Lørenskog': 'One of my favorite styles is tribal tattoos. I love the contrast and dept that tribal tattoos can give, get a custom tribal tattoo design for you.',
    'Japanese tattoos Lørenskog': 'I specialize in japanese tattoos. Japanese tattoos are very popular and I love to create new designs and styles. I can create a custom tattoo design for you.',
    'Abstract tattoos Lørenskog': 'I specialize in abstract tattoos. I will create a custom abstract tattoo design for you. I can also make a tattoo design based on your ideas.',
    'New Tattoos in Lørenskog': 'I am a tattoo artist in Lørenskog. I will design and tattoo a new tattoo for you. Or we can work together to create a unique tattoo design.',
    'Scar cover ups in Lørenskog': 'We cover up scars that you want to hide. Boost your confidence and get a new tattoo. We will make sure that the new tattoo is a perfect match.',
    'Color realism tattoos Lørenskog': 'Fancy a color realism tattoo? I can help you with the design and the process. Contact me for a free consultation. And let me help you with your next tattoo.',
    'Black and grey realism tattoos Lørenskog': 'I specialize in black and grey realism tattoos. I love contrast and dept that black and gray can give and I love to create new designs and styles.',
    'Lørenskog tattoo artist': 'Ed is a tattoo artist in Lørenskog. He specializes in black and grey tattoos, color tattoos, traditional tattoos, cover ups and custom tattoos.',
    'Lettering tattoos Lørenskog': 'Is it time for a new tattoo? Minimalist Tattoos and lettering tattoos are very popular. I can create a custom tattoo design for you. Contact me.',
    'Ed Tattoo studio Lørenskog': 'Ed Tattoo studio is located in Lørenskog, near Oslo, Clean and safe environment for clients and artists. Contact me for a free consultation.',
    'Ed Tattoo studio Lørenskog near Oslo': 'Ready for the next tattoo? Get in touch with me for a free consultation. I can help you with the design and the process. 100% satisfaction.',
    'Get tattooed in Loerskog': 'Ready to make changes? Thinking about getting a new tattoo? Contact me for a free consultation. I can help you with the design and the process.',
};

function getRandomTitle(obj) {
    const keys = Object.keys(obj);
    const key = keys[keys.length * Math.random() << 0];
    return key;
}

const getGalleyContent = (src) => {
    const gallery = generateFileList(src).nodes.find(item => item.id === 'gallery');
    return gallery;
};

const newDate = new Date();

const writeSeoTags = (src) => {
    const galleryData = getGalleyContent(src);
    const gallrylenght = galleryData.edges.length;

    for (let i = 0; i < gallrylenght; i++) {
        fs.readFile(join(src, 'gallery', galleryData.edges[i].id), 'utf8', function (err, data) {
            const { metadata } = parseMD(data);

            if (err) {
                return console.log(err);
            }
            if (metadata.seotitle && metadata.seodescription) {
                return;
            }
            
            const getseotitle = getRandomTitle(list_of_descriptions);
            const description = data.replace(/---(.*(\r)?\n)*---/, '').replace(/\[.*\]\(.*\)/g, '').replace(/(\r)?\n/, '') || '';
            
            const fields = {
                title: metadata.title,
                date: newDate.toISOString(),
                seotitle: getseotitle,
                seodescription: list_of_descriptions[getseotitle],
                isDisplay: metadata.isDisplay,
                cover: metadata.cover,
                tags: metadata.tags,
            };

            fs.writeFileSync(join(src, 'gallery', galleryData.edges[i].id), `--- \n`, function (err) {
                if (err) throw err;
                console.log("Saved!");
            });
      
            for (key in fields) {
                fs.appendFileSync(join(src, 'gallery', galleryData.edges[i].id), `${key}: ${fields[key]} \n`, function (err) {
                    if (err) throw err;
                    console.log('Saved!');
                });
            };

            fs.appendFileSync(join(src, 'gallery', galleryData.edges[i].id), `--- \n`, function (err) {
                if (err) throw err;
                console.log('Saved!');
            });

            fs.appendFileSync(join(src, 'gallery', galleryData.edges[i].id), `${description}`, function (err) {
                if (err) throw err;
                console.log('Saved!');
            });
        
        });
    }
};

module.exports = writeSeoTags;