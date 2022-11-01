const path = require('path');
const fs = require('fs-extra');
const sharp = require('sharp');

const imageSourceDirectory = path.resolve(__dirname, 'src/assets');

const sizes = [
    { size: 1200, rename: false },
    { size: 800, rename: true },
];

// Crop and resize images jpg, png, gif, svg, webp 
// Test if file is an image and if if is a file
// Wait for processing to finnish and Delete original image after processing
function processImages() {
    fs.readdirSync(imageSourceDirectory).forEach(file => {
        if (file.match(/\.(jpg|png|gif|svg|webp)$/)) {
            const filePath = path.resolve(imageSourceDirectory, file);
            const dir = path.resolve(imageSourceDirectory, `images`);
            if (!fs.existsSync(dir)) {
                fs.mkdirSync(dir);
            }
            sizes.forEach(size => {
                const fileName = size.rename ? `${file.split('.')[0]}-${size.size}.${file.split('.')[1]}` : file;
                const destination = path.resolve(dir, fileName);

                // Resize and crop images to 1920px width and 1080px height
                // Max width 1920px and max height 1920px

                const getSizing = (width, height) => {
                    if (width > height) {
                        if (size.size === 800) {
                            return { width: 480, height: size.size };
                        } else {
                            return { width: size.size };
                        }
                    } else {
                        if (size.size === 800) {
                            return { height: size.size, width: 480 };
                        }
                    };
                };

                const image = sharp(filePath)

                const metadata = image.metadata()

                metadata.then(function (data) {
                    const width = data.width
                    const height = data.height
                    const fileSize = data.size


                    image.resize(getSizing(width, height))
                        .jpeg({ quality: 80 })
                        .toFile(destination)
                        .then(() => {

                            console.log(`Resized ${file} to ${size.size}px width`);

                        })
                        .catch(err => {
                            console.log(err);
                        });
                    image.resize(getSizing(width, height))
                        .webp({ quality: 80 })
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
            });
        }
    });
}


module.exports = processImages;
