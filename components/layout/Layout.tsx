import React, {useEffect, useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Slide1 from "../slide1/Slide1";
import Banner2 from "../banner2/Banner2";
import Slide3 from "../slide3/Slide3";
import Slide5 from "../slide5/Slide5";
import Slide4 from "../slide4/Slide4";
import Cookie from "../cookie/Cookie";
import FooterMobile from "./FooterMobile";
import {slide as Menu} from "react-burger-menu";
import Link from "next/link";
import classes from "./Layout.module.scss"
import MenuArrow from "./Arrow";
import GeoLocation from "../GeoLocation/GeoLocation";
import Head from 'next/head';
interface LayoutProps {
    children: any
    location: string | undefined
}


export const MenuStyles = {
    bmBurgerButton: {
        position: 'absolute',
        width: '30px',
        height: '26px',
        right: '12px',
        top: '19px'
    },
    bmBurgerBars: {
        background: 'white'
    },
    bmBurgerBarsHover: {
        background: '#a90000'
    },
    bmCrossButton: {
        height: '24px',
        width: '24px'
    },
    bmCross: {
        background: '#bdc3c7'
    },
    bmMenuWrap: {
        position: 'fixed',
        height: '100%'
    },
    bmMenu: {
        background: '#35219A',
        padding: '2.5em 1.5em 0',
        fontSize: '1.15em'
    },
    bmMorphShape: {
        fill: '#373a47'
    },
    bmItemList: {
        color: '#b8b7ad',
        padding: '0.8em'
    },
    bmItem: {
        display: 'block'
    },
    bmOverlay: {
        background: 'rgba(0, 0, 0, 0.3)'
    }
}

export const MenuAll  = ()=>{

    return <Menu
        customBurgerIcon={<img src='/i/menu_mobile.svg'/>}
        right={true}
        styles={MenuStyles}
    >
        <Link href="/about">
            <a id="home" className="bm-item-list" href="/"><span>О компании</span> <MenuArrow /></a>
        </Link>
        <Link href="/stores">
            <a id="stores" className="bm-item-list" href="/"><span>Работа в магазине</span> <MenuArrow /></a>
        </Link>
        <Link href="/economy">
            <a id="economy" className="bm-item-list" href="/"><span>Распределительные центры
                    и автохозяйство</span> <MenuArrow /></a>
        </Link>
        <Link href="/production">
            <a id="production" className="bm-item-list" href="/"><span>Производство и кулинария</span> <MenuArrow /></a>
        </Link>
        <Link  href="https://spb.hh.ru/employer/7172" passHref >
            <a className="bm-item-list" target="_blank" rel="noopener noreferrer" href="https://spb.hh.ru/employer/7172"><span>Офис</span> <MenuArrow /></a>
        </Link>

        <Link  href="https://spb.hh.ru/employer/7172" passHref >
            <a className="bm-item-list" target="_blank" rel="noopener noreferrer" href="https://spb.hh.ru/employer/7172"><span>Студентам</span> <MenuArrow /></a>
        </Link>


        <div className={classes.socials}>
            <svg width="34" height="34" viewBox="0 0 34 34" fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.8">
                    <path
                        d="M17 1C8.16333 1 1 8.16333 1 17C1 25.8367 8.16333 33 17 33C25.8367 33 33 25.8367 33 17C33 8.16333 25.8367 1 17 1ZM23.1533 19.0517C23.1533 19.0517 24.5683 20.4483 24.9167 21.0967C24.9267 21.11 24.9317 21.1233 24.935 21.13C25.0767 21.3683 25.11 21.5533 25.04 21.6917C24.9233 21.9217 24.5233 22.035 24.3867 22.045H21.8867C21.7133 22.045 21.35 22 20.91 21.6967C20.5717 21.46 20.2383 21.0717 19.9133 20.6933C19.4283 20.13 19.0083 19.6433 18.585 19.6433C18.5312 19.6432 18.4778 19.6517 18.4267 19.6683C18.1067 19.7717 17.6967 20.2283 17.6967 21.445C17.6967 21.825 17.3967 22.0433 17.185 22.0433H16.04C15.65 22.0433 13.6183 21.9067 11.8183 20.0083C9.615 17.6833 7.63167 13.02 7.615 12.9767C7.49 12.675 7.74833 12.5133 8.03 12.5133H10.555C10.8917 12.5133 11.0017 12.7183 11.0783 12.9C11.1683 13.1117 11.4983 13.9533 12.04 14.9C12.9183 16.4433 13.4567 17.07 13.8883 17.07C13.9693 17.069 14.0488 17.0485 14.12 17.01C14.6833 16.6967 14.5783 14.6883 14.5533 14.2717C14.5533 14.1933 14.5517 13.3733 14.2633 12.98C14.0567 12.695 13.705 12.5867 13.4917 12.5467C13.578 12.4275 13.6918 12.3309 13.8233 12.265C14.21 12.0717 14.9067 12.0433 15.5983 12.0433H15.9833C16.7333 12.0533 16.9267 12.1017 17.1983 12.17C17.7483 12.3017 17.76 12.6567 17.7117 13.8717C17.6967 14.2167 17.6817 14.6067 17.6817 15.0667C17.6817 15.1667 17.6767 15.2733 17.6767 15.3867C17.66 16.005 17.64 16.7067 18.0767 16.995C18.1336 17.0307 18.1994 17.0498 18.2667 17.05C18.4183 17.05 18.875 17.05 20.1117 14.9283C20.4931 14.2454 20.8245 13.5358 21.1033 12.805C21.1283 12.7617 21.2017 12.6283 21.2883 12.5767C21.3523 12.5441 21.4232 12.5275 21.495 12.5283H24.4633C24.7867 12.5283 25.0083 12.5767 25.05 12.7017C25.1233 12.9 25.0367 13.505 23.6817 15.34L23.0767 16.1383C21.8483 17.7483 21.8483 17.83 23.1533 19.0517Z"
                        fill="#FFFFFF"/>
                </g>
            </svg>
            <svg width="34" height="35" viewBox="0 0 34 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.8">
                    <circle cx="17" cy="18" r="16" fill="#FFFFFF"/>
                    <path
                        d="M17.0002 18C19.2094 18 21 16.2092 21 14C21 11.7909 19.2094 10 17.0002 10C14.7906 10 13 11.7909 13 14C13 16.2091 14.7906 18 17.0002 18ZM17.0002 12.0322C18.0868 12.0322 18.9681 12.9131 18.9681 14C18.9681 15.0869 18.0868 15.9678 17.0002 15.9678C15.9132 15.9678 15.0319 15.0869 15.0319 14C15.0319 12.9131 15.9132 12.0322 17.0002 12.0322Z"
                        fill="#35219A"/>
                    <path
                        d="M19.4643 19.3141C18.5187 20.1042 17.0002 20.1042 17.0002 20.1042C17.0002 20.1042 15.4813 20.1042 14.5358 19.3141C13.8362 18.7297 13.3099 19.0663 13.1199 19.4714C12.7886 20.177 13.1628 20.5182 14.0077 21.0931C14.7294 21.5844 15.7207 21.768 16.3609 21.8365L15.8263 22.4032C15.0735 23.2012 14.347 23.9718 13.8429 24.5064C13.5415 24.8259 13.5415 25.3444 13.8429 25.6639L13.9339 25.7602C14.2354 26.0799 14.7241 26.0799 15.0254 25.7602L17.0091 23.6571C17.7619 24.4553 18.4884 25.2258 18.9925 25.7602C19.2939 26.0799 19.7826 26.0799 20.0842 25.7602L20.1751 25.6639C20.4764 25.344 20.4764 24.8259 20.1751 24.5064L18.1913 22.4029L17.6552 21.8345C18.296 21.7647 19.2769 21.5803 19.9923 21.0931C20.837 20.5181 21.2115 20.1769 20.8801 19.4713C20.6902 19.0663 20.1635 18.7297 19.4643 19.3141Z"
                        fill="#35219A"/>
                </g>
            </svg>
        </div>
    </Menu>
}

const Layout = (props: LayoutProps) => {
    const [isLocationShown, setIsLocationShown] = useState(false)
    const [isLocationSaved, setIsLocationSaved] = useState(false)
    useEffect(()=>{

        if(props.location){
            setIsLocationShown(true);
        }
    }, [props.location])
    return <>
        <Head>
            <link rel="shortcut icon" href="/i/favicon.ico" type="image/x-icon" />
        </Head>

        {isLocationShown && !isLocationSaved && <GeoLocation
            onLocationSaved={()=>{setIsLocationSaved(true)}}
            location={props.location}
            close={()=>{setIsLocationShown(false)}}
        />}


        <MenuAll />

        <Header/>
        {props.children}
        <Slide1/>
        <Banner2/>
        <Slide3/>
        <Slide4/>
        <Slide5/>
        <Footer/>
        <FooterMobile/>
        <Cookie/>
    </>

}

export default Layout;