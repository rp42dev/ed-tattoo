import FadeEffect from '../fadeEffect';
import style from './style';

const ImageFeature = ({ ...props }) => {
    const { images, titles } = props;

    if (!images.length) return null;
    if (images.length > 2) images.slice(0, 2);

    const imageUrlsJpg = [];
    const imageUrlsWebp = [];

    for (let i = 0; i < images.length; i++) {
        const extenstion = images[i].image.split('.').pop();
        let image = images[i].image.replace(`.${extenstion}`, `-thumbnail.${extenstion}`);
        let webp = `${image}.webp`;
        imageUrlsJpg.push(image);
        imageUrlsWebp.push(webp);
    }


    return (
        <div class={style.width}>
            {images.length === 1 ? (
                <div class={style.imageFeatureSingle}>
                    <div class={style.card}>
                        <picture>
                            <source srcset={imageUrlsWebp[0]} type="image/webp" />
                            <img src={imageUrlsJpg[0]} alt={!titles[0] ? 'An image of Ed Tattoo' : titles[0]} />
                        </picture>
                    </div>
                </div>
            ) : (
                <div class={style.imageFeature}>
                    <div class={style.card}>
                        <picture>
                            <source srcset={imageUrlsWebp[0]} type="image/webp" />
                            <img src={imageUrlsJpg[0]} alt={!titles[0] ? 'An image of Ed Tattoo' : titles[0]} />
                        </picture>
                    </div>
                    <div class={style.card}>
                        <picture>
                            <source srcset={imageUrlsWebp[1]} type="image/webp" />
                            <img src={imageUrlsJpg[1]} alt={!titles[1] ? 'An image of Ed Tattoo' : titles[1]} />
                        </picture>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ImageFeature;
