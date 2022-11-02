const path = require('path');
const fs = require('fs-extra');
const sharp = require('sharp');
const { settings } = require('cluster');



const dirs = {
    'images': {
        'src': path.resolve(__dirname, 'src/assets'),
        'dest': path.resolve(__dirname, 'src/assets/images'),
    },
    'cover': {
        'src': path.resolve(__dirname, 'src/assets/cover'),
        'dest': path.resolve(__dirname, 'src/assets/images/bg'),
    }
}

const imageSettings = {
    'images': {
        'rename': false,
        'size': {
            'vertical': {
                'width': 1920,
                'height': 1080,
            },
            'horizontal': {
                'width': null,
                'height': 1920,
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
    'thumbnail': {
        'rename': true,
        'size': {
            'width': 600,
            'height': 900,
        },
        'settings': {
            'density': 72,
        }
    }
}



const getSizing = (size, width, height) => {
    if (size === 'cover') {
        return { width: imageSettings[size].size.width, height: imageSettings[size].size.height };
    } else if (size === 'images') {
        if (width > height) {
            return { width: imageSettings[size].size.horizontal.width, height: imageSettings[size].size.horizontal.height };
        } else {
            return { width: imageSettings[size].size.vertical.width, height: imageSettings[size].size.vertical.height };
        };
    } else if (size === 'thumbnail') {
        return { width: imageSettings[size].size.width, height: imageSettings[size].size.height };
    }
};

const getSettings = (size) => {
    if (size === 'cover') {
        return imageSettings[size].settings;
    } else if (size === 'images') {
        return imageSettings[size].settings;
    } else if (size === 'thumbnail') {
        return imageSettings[size].settings;
    }
};

const deleteSourceImages = (file) => {	
    fs.unlink(file, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('Deleted source image: ' + file);
        }
    });
};

const processor = (dir, dest, file, imagesToProcess) => {
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

        const image = sharp(filePath, getSettings(size));

        const metadata = image.metadata()

        metadata.then(function (data) {
            const width = data.width
            const height = data.height

            image.clone()
                .resize(getSizing(size, width, height))
                .jpeg({ quality: 80, mozjpeg: true })
                .flatten()
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
                .flatten()
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
    for (const [key, value] of Object.entries(dirs)) {
        const dir = value.src;
        const dest = value.dest;
        let imagesToProcess = [];

        if (key === 'cover') {
            imagesToProcess = ['cover'];
        } else {
            imagesToProcess = ['images', 'thumbnail'];
        }

        fs.readdirSync(dir).forEach(file => {
            if (file.match(/\.(jpg|png|gif|svg|webp)$/)) {
                processor(dir, dest, file, imagesToProcess);

            }
        });

    }
}
module.exports = processImages;