const path = require('path');
const fs = require('fs-extra');
const sharp = require('sharp');

const imageSourceDirectory = path.resolve(__dirname, 'src/assets');

const sizes = [
    { size: 1920, rename: false },
    { size: 900, rename: true },
];

// Crop and resize images jpg, png, gif, svg, webp 
// Test if file is an image and if if is bigger than 1920px
// Wait for processing to finnish and Delete original image after processing
function processImages() {
    fs.readdirSync(imageSourceDirectory).forEach(file => {
        if (file.match(/\.(jpg|png|gif|svg|webp)$/)) {
            const filePath = path.resolve(imageSourceDirectory, file);
            const stats = fs.statSync(filePath);
            if (stats.size > 1920) {
                const dir = path.resolve(imageSourceDirectory, `images`);
                if (!fs.existsSync(dir)) {
                    fs.mkdirSync(dir);
                }
                sizes.forEach(size => {
                    const fileName = size.rename ? `${file.split('.')[0]}-${size.size}.${file.split('.')[1]}` : file;
                    const destination = path.resolve(dir, fileName);

                    
                    if (size.size === 900) {
                        // create thumbnail image with 900px width and 1200px height
                        sizing = { width: size.size, height: 1200 };
                    } else {
                        // create full size image with 1920px width and 1080px height
                        sizing = { width: size.size };
                    }

                    // ro jpeg
                    sharp(filePath)
                        .resize(sizing)
                        .toFile(destination, (err, info) => {
                            if (err) {
                                console.log(err);
                            } 
                        });

                    // to webp
                    sharp(filePath)
                        .resize(sizing)
                        .webp()
                        .toFile(`${destination}.webp`, (err, info) => {
                            if (err) {
                                console.log(err);
                            } else {
                                // remove original image
                                try {
                                    fs.unlinkSync(filePath);
                                } catch (err) {
                                    console.error(err);
                                }
                            }
                        });

                });
            }
        }
    });
};

module.exports = processImages;
