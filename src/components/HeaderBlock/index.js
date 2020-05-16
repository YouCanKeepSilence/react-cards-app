import React from "react";
import classes from './HeaderBlock.module.scss';

const HeaderBlock = ({hideBackground = false, children}) => {
    const styleCover = hideBackground ? {backgroundImage: 'none'} : {};
    return (
        <div className={classes.cover} style={styleCover}>
            <div className={classes.wrap}>
                {children}
            </div>
        </div>
    )
}

export default HeaderBlock;
