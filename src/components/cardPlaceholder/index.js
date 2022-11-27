import style from './style';

const CardPlaceholder = (key) => {
    return (
        <div class={style.cardPlaceholder} key={key}>
            <div class={style.loader}>
            </div>
        </div>
    );
}

export default CardPlaceholder;