import React from "react";
import classes from './HeaderBlock.module.scss';
import ReactLogoPng from '../../logo.png';
import {ReactComponent as ReactLogoSvg} from '../../logo.svg';

const HeaderBlock = () => {
    return (
        <div className={classes.cover}>
            <div className={classes.wrap}>
                <h1 className={classes.header}>Учите слова онлайн</h1>
                <img src={ReactLogoPng} alt="ReactLogoPng"/>
                <ReactLogoSvg/>
                <p className={classes.descr}>Используйте карточки для заполнения и тапа тапа тапа</p>
            </div>
        </div>
    )
}

export default HeaderBlock;
