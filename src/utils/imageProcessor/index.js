const path = require('path');
const fs = require('fs-extra');
const sharp = require('sharp');
const { settings } = require('cluster');



const dirs = {
    'images': {
        'src': 'src/assets',
        'dest': 'src/assets/images',
    },
    'cover': {
        'src': 'src/assets/cover',
        'dest': 'src/assets/images/bg',
    }
}

const imageSettings = {
    'images': {
        'rename': false,
        'size': {
            'vertical': {
                'width': null,
                'height': 1080,
            },
            'horizontal': {
                'width': 1920,
                'height': 1080,
            },
        },
        'settings': {
            'density': 144,
        }
    },
    'cover': {
        'rename': false,
        'size': {
            'width': 1920,
            'height': 1080,
        },
        'settings': {
            'density': 72,
        }
    },
    'thumbnail-large': {
        'rename': true,
        'size': {
            'width': 800,
            'height': 1200,
        },
        'settings': {
            'density': 72,
        }
    },
    'thumbnail': {
        'rename': true,
        'size': {
            'width': 600,
            'height': 900,
        },
        'settings': {
            'density': 72,
        }
    }, 'thumbnail-small': {
        'rename': true,
        'size': {
            'width': 400,
            'height': 600,
        },
        'settings': {
            'density': 72,
        }
    }
}



const getSizing = (size, width, height) => {
    /*
    * If the image is a portrait image, resize it to the height of the vertical size
    * If the image is a landscape image, resize it to the width of the horizontal size
    * If the image is a square image, resize it to the width of the horizontal size
    * @return {object} with The size of the image to be resized
    * @param {number} width - The width of the image
    * @param {number} height - The height of the image
    * @property {number} width - The width of the image
    * @property {number} height - The height of the image
    * */
    if (size === 'cover') {
        return { width: imageSettings[size].size.width, height: imageSettings[size].size.height };
    } else if (size === 'images') {
        if (width > height) {
            return { width: imageSettings[size].size.horizontal.width, height: imageSettings[size].size.horizontal.height };
        } else {
            return { width: imageSettings[size].size.vertical.width, height: imageSettings[size].size.vertical.height };
        }
    } else {
        return { width: imageSettings[size].size.width, height: imageSettings[size].size.height };
    }
};

const getSettings = (size) => {
    /*
    * Get the settings for the image
    * @return {object} - The settings for the settings object
    * @property {number} density - The density of the image
    */
    if (size === 'cover') {
        return imageSettings[size].settings;
    } else if (size === 'images') {
        return imageSettings[size].settings;
    } else {
        return imageSettings[size].settings;
    }
};

const deleteSourceImages = (file) => {
    /*
    * Delete the source images
    * @param {string} file - The path to the file
    * */
    fs.unlink(file, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('Deleted source image: ' + file);
        }
    });
};

const processor = (dir, dest, file, imagesToProcess) => {
    /*
    * Process the images and resize them to the correct size and density
    * Sharp is used to resize the images and the images are saved
    * Two formats are saved, one for webP and one for JPEG (for older browsers)
    * @param {string} dir - The path to the directory
    * @param {string} dest - The path to the destination directory
    * @param {string} file - The path to the file
    * @param {array} imagesToProcess - The images to process
    * */
    const filePath = path.resolve(dir, file);

    if (!fs.existsSync(dest)) {
        try {
            fs.mkdirSync(dest);
        } catch (err) {
            console.log(err);
        }
    }

    imagesToProcess.forEach(size => {
        const fileName = imageSettings[size].rename ? `${file.split('.')[0]}-${size}.${file.split('.')[1]}` : file;
        const destination = path.resolve(dest, fileName);



        const image = sharp(filePath, getSettings(size)).flatten({ background: '#121212' }).withMetadata();

        const metadata = image.metadata()
     

        metadata.then(function (data) {
            const width = data.width
            const height = data.height

            image.clone()
                .resize(getSizing(size, width, height))
                .toFormat('jpeg')
                .jpeg({
                    quality: 80,
                    mozjpeg: true,
                })
                .toFile(destination)
                .then(() => {
                    console.log(`Image ${destination} resized to ${getSizing(size, width, height).width || getSizing(size, width, height).height} px`);
                })
                .catch(err => {
                    console.log(err);
                });
            image.clone()
                .resize(getSizing(size, width, height))
                .webp({ quality: 80 })
                .toFile(`${destination}.webp`)
                .then(() => {
                    console.log(`Image ${destination}.webp resized to ${getSizing(size, width, height).width || getSizing(size, width, height).height} px`);
                })
                .catch(err => {
                    console.log(err);

                });

        });
    });
    if (filePath) {
        setTimeout(deleteSourceImages, 1000, filePath);
    }
};


function processImages() {
    /*
    * Process the images and resize them to the correct size and density
    * @param {string} dir - The path to the directory
    * @param {string} dest - The path to the destination directory
    * @param {string} file - The path to the file
    * @param {array} imagesToProcess - The images to process
    * */
    for (const [key, value] of Object.entries(dirs)) {
        const dir = value.src;
        const dest = value.dest;

        //  resoleve the path to the directory
        const directoryPath = path.resolve(dir);
        const destinationPath = path.resolve(dest);

        if (!fs.existsSync(directoryPath)) {
            // if the directory doesn't exist, create it
            try {
                fs.mkdirSync(directoryPath);
            } catch (err) {
                console.log(err);
            }
        }

        if (!fs.existsSync(destinationPath)) {
            // if the directory doesn't exist, create it
            try {
                fs.mkdirSync(destinationPath);
            } catch (err) {
                console.log(err);
            }
        }

        let imagesToProcess = [];

        if (key === 'cover') {
            imagesToProcess = ['cover'];
        } else {
            imagesToProcess = ['images', 'thumbnail', 'thumbnail-large', 'thumbnail-small'];
        }

        fs.readdirSync(directoryPath).forEach(file => {
            if (file.match(/\.(jpg|jpeg|png|gif|svg|webp)$/)) {
                processor(directoryPath, destinationPath, file, imagesToProcess);

            }
        });

    }
}

module.exports = processImages;