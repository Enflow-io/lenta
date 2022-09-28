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
                    <img src={'/i/lenta-big-logo.svg'} width={95} height={87}/>
                </a>
                {/*<Image src="/i/logo.png" alt="logo" width={95} height={87}/>*/}
            </div>
            <div className={classesHeader.Content}>
                <div className={classesHeader.Menu}>
                    <ul>
                        <li>
                            <Link href="/">
                                <a>О компании</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <a>Работа в магазине</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <a>Распределительные центры и автохозяйство</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/production">
                                <a>Производство и кулинария</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <a>Офис</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <a>Студентам</a>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className={classesHeader.RightPart}>
                    <div className={classesHeader.Button}>
                        <Popup contentStyle={{
                            // minWidth: '600px',
                            maxWidth: '800px',
                            width: '100%'
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