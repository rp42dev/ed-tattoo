import style from './style';

const ImageFeature = ({ ...props }) => {
    const { images } = props;

    const jpg1 = '../' + images[0].details.image.replace('.jpg', '-800.jpg');
    const jpeg2 = '../' + images[1].details.image.replace('.jpg', '-800.jpg');
    const webp1 = jpg1 + '.webp';
    const webp2 = jpeg2 + '.webp';

    return (
        <div class={style.imageFeature}>

            <div class={style.card}>

                <picture>
                    <source srcset={webp1} type="image/webp" />
                    <source srcset={jpg1} type="image/jpeg" />
                    <img src={jpg1} alt={images[0].details.title} />
                </picture>
                <div class={style.overlay}>
                </div>
            </div>
            <div class={style.card}>

                <picture>
                    <source srcset={webp2} type="image/webp" />
                    <source srcset={jpeg2} type="image/jpeg" />
                    <img src={jpeg2} alt={images[1].details.title} />
                </picture>
                <div class={style.overlay}>
                </div>
            </div>
        </div>

    );
}


export default ImageFeature;
