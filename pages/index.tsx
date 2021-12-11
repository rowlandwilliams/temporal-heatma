import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
    return (
        <div className="">
            <Head>
                <title>Visualisation</title>
                <meta name="description" content="Sankey" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>nice viz</div>
        </div>
    );
};

export default Home;
