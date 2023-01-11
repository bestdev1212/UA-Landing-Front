import React from 'react';
import { Stack, Box, Typography } from '@mui/material';
import { carouselBoxItemsList } from '../../../../constants';

type ComponentProps = {};

const NF3Box: React.FC<ComponentProps> = () => {
    return (
        <Stack spacing={5}>
            <Box width="fit-content" position="relative" marginX="auto">
                <Typography
                    fontSize={{ xs: 24, md: 48 }}
                    fontWeight={700}
                    lineHeight={1.1}
                    color="#FFCA21"
                    className="neueplak_condensed"
                    sx={{ filter: 'blur(3px)' }}
                >
                    RESERVE AN NF3 BASKETBALL
                </Typography>
                <Typography
                    position="absolute"
                    fontSize={{ xs: 24, md: 48 }}
                    fontWeight={700}
                    lineHeight={1.1}
                    color="white"
                    className="neueplak_condensed"
                    sx={{ inset: 0 }}
                >
                    RESERVE AN NF3 BASKETBALL
                </Typography>
            </Box>
            <Typography width={{ xs: '100%', md: '70%' }} fontSize={{ xs: 16, md: 24 }} color="white">
                {carouselBoxItemsList[1].desc}
            </Typography>
            <Stack height={{ xs: 'auto', md: 300 }} direction={{ xs: 'column', md: 'row' }} alignItems="center">
                <video autoPlay muted loop style={{ width: 300 }}>
                    <source src={'/assets/home/nft-projects/nf3.mp4'} type="video/mp4" />
                </video>
                <Stack width="80%">
                    <Typography
                        fontSize={{ xs: 24, md: 32 }}
                        fontWeight={700}
                        color="#FFCA21"
                        className="neueplak_condensed"
                    >
                        NF3 BASKETBALL
                    </Typography>
                    <Typography fontSize={{ xs: 16, md: 24 }} fontWeight={300} color="#FFCA21">
                        9 FREE NFT / 3-POINTER BY STEPH CURRY
                    </Typography>
                </Stack>
            </Stack>
        </Stack>
    );
};

export default NF3Box;
