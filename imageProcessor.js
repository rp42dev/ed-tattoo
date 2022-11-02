const path = require('path');
const fs = require('fs-extra');
const sharp = require('sharp');

const imageSourceDirectory = path.resolve(__dirname, 'src/assets');
const imageSourceDirectoryBg = path.resolve(__dirname, 'content');

const sizes = [
    { size: 1280, rename: false, DPI: 72 },
    { size: 800, rename: true, DPI: 72 },
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

                // get file size
                const stats = fs.statSync(filePath);
                const fileSizeInBytes = stats.size;
                // Convert the file size to megabytes (optional)
                const fileSizeInMegabytes = fileSizeInBytes / 1000000.0;


                const getSizing = (width, height) => {
                    if (width > height) {
                        if (size.size === 800) {
                            return { width: 600, height: 900 };
                        } else {
                            return { width: 1920, height: 1080 };
                        }
                    } else {
                        if (size.size === 800) {
                            return { width: 600, height: 900 };
                        } else {
                            return { height: 1200 };
                        }
                    };
                };

                const image = sharp(filePath, { density: size.DPI });

                const metadata = image.metadata()

                metadata.then(function (data) {
                    const width = data.width
                    const height = data.height

                    const fileSize = data.size


                    const sizing = getSizing(width, height);

                    image.clone()
                        .resize(sizing)
                        .jpeg({ quality: 80, mozjpeg: true })
                        .flatten()
                        .toFile(destination)

                        .then(() => {
                            console.log(`Image ${destination} resized to ${sizing.width || sizing.height} px`);
                        })
                        .catch(err => {
                            console.log(err);
                        });
                    image.clone()
                        .resize(sizing)
                        .webp({ quality: 80 })
                        .flatten()
                        .toFile(`${destination}.webp`)
                        .then(() => {
                            console.log(`Image ${destination}.webp resized to ${sizing.width || sizing.height} px`);
                        })
                        .catch(err => {
                            console.log(err);

                        });


                });
            });
        }
    });
}


module.exports = processImages;