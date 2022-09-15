import classes from "./Layout.module.scss"
import React from "react";
import Image from 'next/image'
import Link from "next/link";

interface HeaderInterface {

}

const Header = (props: HeaderInterface) => {
    return <div className={classes.HeaderContainer}>
        <div className={classes.Header}>
            <div className={classes.Logo}>
                <a href={'/'}>
                    <img src={'/i/lenta-big-logo.svg'} width={95} height={87}/>
                </a>
                {/*<Image src="/i/logo.png" alt="logo" width={95} height={87}/>*/}
            </div>
            <div className={classes.Content}>
                <div className={classes.Menu}>
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
                            <Link href="/">
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
                <div className={classes.RightPart}>
                    <div className={classes.Button}>
                        <button>Заполнить анкету</button>
                    </div>
                    <div className={classes.Phone}><a href={'tel:8 800 770-00-30'}>8 800 770-00-30</a></div>
                </div>
            </div>
        </div>
    </div>
}

export default Header