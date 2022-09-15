import type {NextPage} from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from "../components/layout/Layout";
import Search from "../components/search/Search";
import React from "react";

const Home: NextPage = () => {
    return (
        <Layout>
            <Search />
        </Layout>
    )
}

export default Home
