import type { NextPage } from 'next';
import Head from 'next/head';
import Sankey from '../components/Sankey/Sankey';

const Home: NextPage = () => {
    return (
        <div className="bg-red-300">
            <Head>
                <title>Sankey</title>
                <meta name="description" content="Sankey" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Sankey />
        </div>
    );
};

export default Home;
