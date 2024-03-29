import React, { FC, PropsWithChildren } from 'react';
import { Box } from '@mui/material';
import Header from '../Header';
import Footer from '../Footer';
import style, { PageWrapper } from './style';

type ComponentProps = {};

const PageContainer: FC<PropsWithChildren<ComponentProps>> = ({ children }): JSX.Element => {
    return (
        <>
            <PageWrapper direction="row">
                <Box width="100%">
                    <div className="site__header">
                        <Header />
                    </div>
                    <div className="site__main">{children}</div>
                    <div className="site__footer">
                        <Footer />
                    </div>
                </Box>
            </PageWrapper>
            <style jsx>{style}</style>
        </>
    );
};

export default PageContainer;
