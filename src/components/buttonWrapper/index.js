import { h } from 'preact';
import style from './style';
import Icon from '../icon';


const IconWrapper = ({ children, ...props }) => {
    const { link, text, type } = props;

    return (
        <>
            {type === "link" ? (
                <a href={link}>
                    <div class={style.btnWrapper} >
                        <span class={style.text}>
                            {text}
                        </span>
                        <Icon children={children} />
                    </div>
                </a>
            ) : (
                
                <button type="submit" class={style.btnWrapper} >
                    <span class={style.text}>
                        {text}
                    </span>
                    <Icon children={children} />
                </button>
            )}
        </>
    );
};

export default IconWrapper;
