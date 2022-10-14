import classes from "./Layout.module.scss"
import classesHeader from "./Header.module.scss";
import React from "react";
import Image from 'next/image'
import Link from "next/link";
import Popup from "reactjs-popup";
import 'reactjs-popup/dist/index.css';
import Form from "../form/Form";
import {slide as Menu} from 'react-burger-menu'

interface HeaderInterface {

}

const Header = (props: HeaderInterface) => {
    // @ts-ignore
    return <div className={classesHeader.HeaderContainer}>
        <div className={classesHeader.Header}>
            <div className={classesHeader.Logo}>
                <a href={'/'}>
                    <img src={'/i/lenta-big-logo.svg'} width={'100%'} />
                </a>
                {/*<Image src="/i/logo.marks" alt="logo" width={95} height={87}/>*/}
            </div>
            <div className={classesHeader.Content}>
                <div className={classesHeader.Menu}>
                    <ul>
                        <li>
                            <Link href="/about">
                                <a>О компании</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/stores">
                                <a>Работа в магазине</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/economy">
                                <a>Распределительные центры и автохозяйство</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/production">
                                <a>Производство и кулинария</a>
                            </Link>
                        </li>
                        <li style={{
                            position: "relative",
                            left: "-1px"
                        }}>
                            <Link  href="https://spb.hh.ru/employer/7172" passHref >
                                <a target="_blank" rel="noopener noreferrer" href="https://spb.hh.ru/employer/7172">Офис</a>
                            </Link>
                        </li>
                        <li>
                            <Link  href="https://spb.hh.ru/employer/7172" passHref >
                                <a target="_blank" rel="noopener noreferrer" href="https://spb.hh.ru/employer/7172">Студентам</a>
                            </Link>
                        </li>

                    </ul>
                </div>
                <div className={classesHeader.RightPart}>
                    <div className={classesHeader.Button}>
                        <Popup
                            lockScroll={ true}
                            contentStyle={{
                            // minWidth: '600px',
                            maxWidth: '800px',
                                borderRadius: 6,

                            width: 'calc(100% - 10px)'
                        }} trigger={<button>Заполнить анкету</button>} modal>
                            {
                                // @ts-ignore
                                (close: any) => (<Form close={()=>{close()}} />)
                            }

                        </Popup>

                    </div>
                    <div className={classesHeader.Phone}><a href={'tel:8 800 770-00-30'}>8 800 770-00-30</a></div>
                </div>
            </div>
        </div>


    </div>
}

export default Header