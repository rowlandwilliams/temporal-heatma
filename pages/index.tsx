import type { NextPage } from 'next';
import Head from 'next/head';
import Sankey from '../components/Sankey/Sankey';

const Home: NextPage = () => {
    return (
        <div className="bg-gray-900 font-readexpro-regular text-gray-50">
            <Head>
                <title>Sankey</title>
                <meta name="description" content="Sankey" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="flex flex-col h-screen">
                <div className="font-readexpro-medium p-2">sankey.io</div>
                <div className="flex-grow flex flex-col p-4">
                    <div className="flex justify-between px-6 text-xs ">
                        <div className="w-24 border-r-8 border-gray-300 text-center">Origin</div>
                        <div className="w-24 border-l-8 border-gray-300 text-center">
                            Destination
                        </div>
                    </div>
                    <Sankey />
                </div>
            </div>
        </div>
    );
};

export default Home;
