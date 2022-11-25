import FadeEffect from '../fadeEffect';
import style from './style';

const ImageFeature = ({ ...props }) => {
    const { images } = props;

    if (!images.length) return null;
    if (images.length > 2) images.slice(0, 2);

    const imageUrlsJpg = [];
    const imageUrlsWebp = [];

    for (let i = 0; i < images.length; i++) {
        let image = images[i]
            .image.replace('.jpg', '-thumbnail.jpg');
        let webp = `${image}.webp`;
        imageUrlsJpg.push(image);
        imageUrlsWebp.push(webp);
    }

    return (
        <FadeEffect>
            {images.length === 1 ? (
                <div class={style.imageFeatureSingle}>
                    <div class={style.card}>
                        <picture>
                            <source srcset={imageUrlsWebp[0]} type="image/webp" />
                            <img src={imageUrlsJpg[0]} alt={images[0].alt} />
                        </picture>
                        <div class={style.overlay}>
                        </div>
                    </div>
                </div>
            ) : (
                <div class={style.imageFeature}>
                    <div class={style.card}>
                        <picture>
                            <source srcset={imageUrlsWebp[0]} type="image/webp" />
                            <img src={imageUrlsJpg[0]} alt={images[0].title} />
                        </picture>
                        <div class={style.overlay}>
                        </div>
                    </div>
                    <div class={style.card}>
                        <picture>
                            <source srcset={imageUrlsWebp[1]} type="image/webp" />
                            <img src={imageUrlsJpg[1]} alt={images[1].title} />
                        </picture>
                        <div class={style.overlay}>
                        </div>
                    </div>
                </div>
            )}
        </FadeEffect >
    );
}

export default ImageFeature;
