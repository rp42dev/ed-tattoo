import style from './style';


const CardComponent = (props) => {
    const { details } = props;
    
    const jpg = '../' + details.cover.replace('.jpg', '-800.jpg');
    const webp = jpg + '.webp';


    return (
       
            <div class={style.card}>
                
                    {details.cover && <picture>
                        <source srcset={webp} type="image/webp" />
                        <source srcset={jpg} type="image/jpeg" />
                        <img src={jpg} alt={details.title} />
                    </picture>}
                <div classList={style.imgOverlay}>
                
                </div>
            </div>
       
    );
}

export default CardComponent;