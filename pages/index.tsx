import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from "../components/layout/Layout";
// import Search from "../components/search/Search";
import React, { useState } from "react";
import GeoLocation from "../components/GeoLocation/GeoLocation";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { $city } from '../store';
import { useStore } from 'effector-react';
const Search = dynamic(
    () => import("../components/search/Search"), // replace '@components/map' with your component's location
    { ssr: false } // This line is important. It's what prevents server-side render
);

const Home: NextPage = (props: any) => {
    const [loc, setLoc] = useState<string | undefined>(undefined)
    const onLocation = (loc: string) => {
        setLoc(loc)
    }
    const city = useStore($city)
    return (
        <Layout location={loc}>
            
            <Search
                city={city}

                onLocation={onLocation} />
        </Layout>
    )
}

export default Home
