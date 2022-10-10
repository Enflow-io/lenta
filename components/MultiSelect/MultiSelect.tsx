import {useRef, useState} from "react";
import classes from "./MultiSelect.module.scss";
import {useOnClickOutside} from 'usehooks-ts'
import useOutsideClick from "../../hooks/useOnClickOutside";
import Checkbox from "./Checkbox";
import {Scrollbars} from 'react-custom-scrollbars-2';
interface Option {
    id: number
    label: string
    count: number
}
interface MultiSelectProps {
    options: Option[]
    placeholder: string
    customHeight?: number
    multi?: boolean
}
const MultiSelect = (props: MultiSelectProps) => {
    const isMulti = props.multi === undefined ? true : props.multi;
    const ref = useRef(null)
    const [isOpened, setIsOpened] = useState(false);
    const handleClickOutside = () => {
        // Your custom logic here
        // alert('!')
        setIsOpened(false);

    }
    useOutsideClick(ref, handleClickOutside)

    const renderThumb = ({style, ...props}: any) => {
        const top = 0;
        const thumbStyle = {
            backgroundColor: `#00AB34`
        };
        return (
            <div
                style={{...style, ...thumbStyle, width: 2}}
                {...props}/>
        );
    }

    const items = props.options;


    const [selectedItems, setSelectedItems]  = useState<number[]>([]);

    return <div ref={ref} className={`${classes.MultiSelect} ${isOpened ? classes.InputOpened : undefined}`}>
        <div className={classes.Search}>
            <input
                className={isOpened ? classes.InputOpened : undefined}
                placeholder={props.placeholder}
                onClick={() => {
                    setIsOpened(!isOpened);
                }}
                value={props.options.filter(el=>{
                    return selectedItems.includes(el.id)
                }).map(el=>{
                    return el.label
                }).join(', ')}
            />


            <svg className={`${classes.IsOpenIcon} ${!isOpened ? classes.rotated : undefined}`} width="18"
                 height="18"
                 viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M5.5575 11.5576L9 8.12262L12.4425 11.5576L13.5 10.5001L9 6.00012L4.5 10.5001L5.5575 11.5576Z"
                    fill="#00AB34"/>
            </svg>


        </div>
        {isOpened &&         <div className={classes.BottomLine}></div>
        }
        {isOpened &&
        <div className={classes.List}>
            <Scrollbars
                renderThumbVertical={renderThumb}
                className={classes.List} style={{width: '100%', height: props.customHeight || 200}}>
                {items.map((item, index) => {
                    return <div onClick={(e)=>{
                        e.preventDefault();
                        e.stopPropagation();
                        if(isMulti){
                            if(selectedItems.includes(item.id)){
                                setSelectedItems(selectedItems.filter(el=>el!==item.id));
                            }else{
                                setSelectedItems([...selectedItems, item.id]);
                            }
                        }else{
                            setSelectedItems([item.id])
                        }
                    }} key={index} className={classes.ListItem}>
                        <div className={classes.LeftPart}>
                            {/*<input className={classes.Checkbox} type={'checkbox'}/>*/}
                            <div className={classes.CheckBoxCont}>
                                <Checkbox checked={selectedItems.includes(item.id)} className={classes.Checkbox}/>
                            </div>
                            <div className={classes.Label}>{item.label}</div>
                        </div>
                        <div className={classes.Counter}><span>{item.count}</span></div>
                    </div>;
                })
                }

            </Scrollbars>
        </div>
        }
    </div>
}

export default MultiSelect;