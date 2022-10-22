import style from './style';

const ImageFeature = ({ ...props }) => {
    const { images, titles } = props;

    return (
        <div class={style.imageFeature}>

            <div class={style.card}>

                <picture>
                    <source srcset={images[0].webp} type="image/webp" />
                    <source srcset={images[0].jpg} type="image/jpeg" />
                    <img src={images[0].jpg} alt={titles[0]} />
                </picture>
                <div class={style.overlay}>
                </div>
            </div>
            <div class={style.card}>

                <picture>
                    <source srcset={images[1].webp} type="image/webp" />
                    <source srcset={images[1].jpg} type="image/jpeg" />
                    <img src={images[1].jpg} alt={titles[1]} />
                </picture>
                <div class={style.overlay}>
                </div>
            </div>
        </div>

    );
}


export default ImageFeature;
