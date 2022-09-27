import React, {FC} from 'react';
import classes from './Slide4.module.scss';
import Card from './Card';

const DesktopSlide: FC<{ children: any }> = ({children}) => {
    return (
            <div className={classes.Slide}>
                <Card icon={1} top={-110} left={0}/>
                <Card icon={2} top={40} left={250}/>
                <Card icon={3} top={-110} left={500}/>
                <Card icon={4} top={40} left={750}/>
                <Card icon={5} top={-110} left={1000}/>
                {children}
            </div>
    );
};

export default DesktopSlide;