import React, {FC} from 'react';
import classes from './Slide4.module.scss';
import Card from './Card';

const DesktopSlide: FC<{ children: any }> = ({children}) => {
    return (
            <div className={classes.Slide}>
                <Card top={-110} left={0}/>
                <Card top={40} left={250}/>
                <Card top={-110} left={500}/>
                <Card top={40} left={750}/>
                <Card top={-110} left={1000}/>
                {children}
            </div>
    );
};

export default DesktopSlide;