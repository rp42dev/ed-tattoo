import { h } from 'preact';
import style from './style';
import Button from '../button';


const ButtonWrapper = ({children, ...props}) => {
    const { link, text, type } = props;
    return (
        <>
            <div class={style.btnWrapper} >
                <span class={style.text}>
                    {text}
                </span>
                <Button children={children} link={link} type={type}/>
            </div>
        </>
    );
};

export default ButtonWrapper;
