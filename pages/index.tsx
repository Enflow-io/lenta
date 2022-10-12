import type {NextPage} from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from "../components/layout/Layout";
import Search from "../components/search/Search";
import React, {useState} from "react";
import GeoLocation from "../components/GeoLocation/GeoLocation";

const Home: NextPage = () => {
    const [loc, setLoc] = useState<string | undefined>(undefined)
    const onLocation = (loc: string)=>{
        setLoc(loc)
    }
    return (
        <Layout location={loc}>
            <Search onLocation={onLocation} />
        </Layout>
    )
}

export default Home
