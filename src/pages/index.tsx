import React, { useEffect } from 'react';
import Head from 'next/head';
import PageContainer from '../containers/PageContainer';
import HomePageContainer from '../containers/Home';

interface ComponentProps {}

const HomePage: React.FC<ComponentProps> = () => {
    return (
        <>
            <Head>
                <meta name="viewport" content="initial-scale=1, width=device-width" />
                <title>Under Armour</title>
            </Head>
            <PageContainer>
                <HomePageContainer />
            </PageContainer>
        </>
    );
};

export default HomePage;
