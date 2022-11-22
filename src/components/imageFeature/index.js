import FadeEffect from '../fadeEffect';
import style from './style';

const ImageFeature = ({ ...props }) => {
    const { images } = props;

    if (images.length > 2) {
        return null
    }

    const jpg1 = '../' + images[0].image.replace('.jpg', '-thumbnail.jpg');
    const jpeg2 = '../' + images[1].image.replace('.jpg', '-thumbnail.jpg');
    const webp1 = jpg1 + '.webp';
    const webp2 = jpeg2 + '.webp';

    return (
        <FadeEffect>
            <div class={style.imageFeature}>
                <div class={style.card}>
                    <picture>
                        <source srcset={webp1} type="image/webp" />
                        <source srcset={jpg1} type="image/jpeg" />
                        <img src={jpg1} alt={images[0]} />
                    </picture>
                    <div class={style.overlay}>
                    </div>
                </div>
                <div class={style.card}>
                    <picture>
                        <source srcset={webp2} type="image/webp" />
                        <source srcset={jpeg2} type="image/jpeg" />
                        <img src={jpeg2} alt={images[1]} />
                    </picture>
                    <div class={style.overlay}>
                    </div>
                </div>
            </div>
        </FadeEffect>
    );
}

export default ImageFeature;
