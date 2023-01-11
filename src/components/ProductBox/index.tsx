import React from 'react';
import { Stack, Box, Typography } from '@mui/material';
import { GradientBox, VisitPageBtn, ViewCollectionBtn } from './styles';
import Container from '../Container';
import CarouselIndicator from '../CarouselIndicator';

interface ComponentProps {
    title: string;
    titleWidth: number;
    desc: string;
    curCarouselIndex: number;
    setCurCarouselIndex: (value: number) => void;
    openseaUrl: string;
    projectPgUrl: string;
}

const ProductBox: React.FC<ComponentProps> = ({
    title,
    titleWidth,
    desc,
    curCarouselIndex,
    setCurCarouselIndex,
    openseaUrl,
    projectPgUrl
}) => {
    return (
        <>
            <GradientBox />
            <Container sx={{ position: 'absolute', inset: 0, overflow: 'visible' }}>
                <Stack height="100%" justifyContent="center" /*  paddingBottom={15} */>
                    <Box position="relative">
                        <Typography
                            width={{ xs: '60%', md: titleWidth }}
                            fontSize={{ xs: 64, md: 96, xl: 128 }}
                            fontWeight={700}
                            lineHeight={1}
                            color="#FFCA21"
                            className="neueplak_condensed"
                        >
                            {title}
                        </Typography>
                        <Typography
                            width={{ xs: '60%', md: titleWidth }}
                            fontSize={{ xs: 64, md: 96, xl: 128 }}
                            fontWeight={700}
                            lineHeight={1}
                            color="#FFCA21"
                            className="neueplak_condensed"
                            sx={{ position: 'absolute', inset: 0, filter: 'blur(15px)' }}
                        >
                            {title}
                        </Typography>
                    </Box>
                    <Typography
                        width={{ xs: '100%', md: 560 }}
                        fontSize={{ xs: 18, md: 20, xl: 24 }}
                        color="white"
                        marginTop={{ xs: 3, md: 4 }}
                    >
                        {desc}
                    </Typography>
                    <Stack direction="row" spacing={3} marginTop={{ xs: 6, md: 8 }}>
                        <a href={projectPgUrl} target="_blank" rel="noopener noreferrer">
                            <VisitPageBtn className="neueplak_condensed">VISIT PAGE</VisitPageBtn>
                        </a>
                        <a href={openseaUrl} target="_blank" rel="noopener noreferrer">
                            <ViewCollectionBtn className="neueplak_condensed">VIEW COLLECTION</ViewCollectionBtn>
                        </a>
                    </Stack>
                    <CarouselIndicator
                        curCarouselIndex={curCarouselIndex}
                        setCurCarouselIndex={(value: number) => setCurCarouselIndex(value)}
                        sx={{ marginTop: { xs: 6, md: 7 } }}
                    />
                </Stack>
            </Container>
        </>
    );
};

export default ProductBox;
