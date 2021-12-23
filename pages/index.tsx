import type { NextPage } from 'next';
import Head from 'next/head';
import { Visualisation } from '../components/Visualisation/Visualisation';

const Home: NextPage = () => {
    return (
        <div className="bg-black w-full h-screen ">
            <Head>
                <title>Space/Time</title>
                <meta name="description" content="Sankey" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Visualisation />
        </div>
    );
};

export default Home;
