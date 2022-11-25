const { generateFileList } = require('../crawler');
const parseMD = require('parse-md').default;
const util = require('node:util');
const { join } = require('path');
const fs = require('fs');

const tags = [
    'Black and grey tattoo',
    'color tattoo',
    'traditional tattoo',
    'cover up',
    'custom tattoo',
    'tattoo design',
    'tattoo artist',
    'tattoo studio',
    'full body tattoo',
    'full sleeve tattoo',
    'full back tattoo',
    'full leg tattoo',
    'full arm tattoo',
    'tattoo in',
    'realism tattoo',
    'gray wash tattoo',
    'new school tattoo',
    'old school tattoo',
    'tribal tattoo',
    'japanese tattoo',
    'abstract tattoo',
    'new tattoo',
    'scar cover up',
    'color realism tattoo',
    'black and grey realism tattoo',
    'lettering tattoo',
    'tattoo studio',
    'get tattooed',
];

const alsoList = [
    'Black and grey tattoo Lørenskog',
    'color tattoo Lørenskog',
    'traditional tattoo Lørenskog',
    'cover up Lørenskog',
    'custom tattoo Lørenskog',
    'tattoo design Lørenskog',
    'tattoo artist Lørenskog',
    'tattoo studio Lørenskog',
    'full body tattoo Lørenskog',
    'full sleeve tattoo Lørenskog',
    'full back tattoo Lørenskog',
    'full leg tattoo Lørenskog',
    'full arm tattoo Lørenskog',
    'tattoo in Lørenskog',
    'realism tattoo Lørenskog',
    'gray wash tattoo Lørenskog',
    'new school tattoo Lørenskog',
    'old school tattoo Lørenskog',
    'tribal tattoo Lørenskog',
    'japanese tattoo Lørenskog',
    'abstract tattoo Lørenskog',
    'new tattoo Lørenskog',
    'scar cover up Lørenskog',
    'color realism tattoo Lørenskog',
    'black and grey realism tattoo Lørenskog',
    'lettering tattoo Lørenskog',
    'tattoo studio Lørenskog',
    'get tattooed Lørenskog',
];


const designList = [
    '%s I can create a %s tattoo design for you. %s',
    '%s I can make a %s tattoo design based on your ideas. %s',
    '%s I will design and tattoo a %s for you. %s',
    '%s We can work together to create a unique s% tattoo design. %s',
    '%s I will create a custom %s tattoo design for you. %s',
    '%s I can help you with the %s design and the process. %s',
    '%s I love to create new %s designs and styles. %s',
    "%s Let me help you with %s tattoo design.",
    "%s I will make sure 100% satisfaction with %s tattoo design. %s",
    "%s My goal is to make customer happy with %s tattoo design. %s",
    "%s I will make sure that the %s tattoo is a perfect match. %s",
    "%s I do tattoos in various styles. one of my styles is %s. %s",
    "%s %s tattoos are very popular. Contact me for a consultation. %s",
    "%s The %s tattoo is a great way to express yourself. %s",
    "%s If you are looking for a %s tattoo, I can help you. %s",
    "%s Love %s tattoos and I love to create new designs %s",
    "%s I love the contrast and dept that %s can give. %s",

];

const aboutList = [
    "The tattoo studio is located in Lørenskog.",
    "The tattoo studio is located in Lørenskog, near Oslo.",
    "I'm located in Lørenskog, near Oslo.",
    "I am a tattoo artist in Lørenskog.",
    "I am a tattoo artist in Lørenskog, near Oslo.",
    "We are a tattoo studio in Lørenskog, near Oslo.",
    "Who is Ed? Ed is a tattoo artist in Lørenskog.",
    "Who is Ed? Ed is a tattoo artist in Lørenskog, near Oslo.",
    "Tattoo artist in Lørenskog.",
    "Ed Tattoo is a tattoo artist in Lørenskog, near Oslo.",
    "Studio is located in Lørenskog, near Oslo.",
    "Studio is located in Lørenskog.",
    "I do tattoos that are custom made for you.",
    "Looking for a tattoo artist in Lørenskog?",
    "Fancy a new tattoo? Tattoo artist in Lørenskog.",
    "Looking for a tattoo artist in Lørenskog?",
    "Change is good. Get a new tattoo in Lørenskog.",
    "Ready for a new tattoo? Tattoo artist in Lørenskog.",
];

const callToActionList = [
    "Contact me for a free consultation",
    "Free consultation. Contact me",
    "Do you have any questions? Contact me",
    "Don't hesitate to contact me",
    "Feel free to contact me",
    "If you have any questions, contact me",
    "For more information, contact me",
    "Contact me for more information",
    "Make an appointment. Contact me",
    "Contact me for an appointment",
    "Are you ready for a new tattoo? Contact me",
    "Ready for a new tattoo? Contact me",
    "Make it happen. Contact me",
    "I'm ready to help you. Contact me",
    "I'm here to help you. Contact me",
];

const getRandom = (list) => {
    return list[Math.floor(Math.random() * list.length)];
};
    

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
            
            const description = data.replace(/---(.*(\r)?\n)*---/, '').replace(/\[.*\]\(.*\)/g, '').replace(/(\r)?\n/, '') || '';
            const seoTitleTemplate = 'Ed Tattoo Lørenskog - %s';
            const seoTitle = util.format(seoTitleTemplate, metadata.title).slice(0, 60);
            const seoDescription = util.format(getRandom(designList), getRandom(aboutList), metadata.title, getRandom(callToActionList)).slice(0, 157)+ '...';
            
            
            const fields = {
                title: metadata.title,
                date: newDate.toISOString(),
                seotitle: seoTitle,
                seodescription: seoDescription,
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