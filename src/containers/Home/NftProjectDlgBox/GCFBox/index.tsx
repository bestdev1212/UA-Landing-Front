import React, { useRef, useCallback } from 'react';
import { Stack, Box, Typography, IconButton } from '@mui/material';
import { gcfTokenData } from '../../../../constants';
import PrevIcon from '@mui/icons-material/KeyboardArrowLeft';
import NextIcon from '@mui/icons-material/KeyboardArrowRight';
import { carouselBoxItemsList } from '../../../../constants';

import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper core and required modules
import { Navigation } from 'swiper';
import SwiperCore from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

type ComponentProps = {};

const GCFBox: React.FC<ComponentProps> = () => {
    const swiperRef = useRef() as any;

    const handlePrev = useCallback(() => {
        if (!swiperRef.current) return;
        swiperRef.current.swiper.slidePrev();
    }, []);

    const handleNext = useCallback(() => {
        if (!swiperRef.current) return;
        swiperRef.current.swiper.slideNext();
    }, []);

    return (
        <Stack spacing={4}>
            <Box width="fit-content" position="relative" marginX="auto">
                <Typography
                    fontSize={{ xs: 24, md: 48 }}
                    fontWeight={700}
                    lineHeight={1.1}
                    color="#FFCA21"
                    className="neueplak_condensed"
                    sx={{ filter: 'blur(3px)' }}
                >
                    GENESIS CURRY FLOW
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
                    GENESIS CURRY FLOW
                </Typography>
            </Box>
            <Typography width={{ xs: '100%', md: '70%' }} fontSize={{ xs: 16, md: 24 }} color="white">
                {carouselBoxItemsList[0].desc}
            </Typography>
            <Stack display={{ xs: 'none', md: 'flex' }} direction="row" justifyContent="center" spacing={4}>
                {gcfTokenData.map((item, index) => (
                    <Stack key={`gcf_token_key${index}`}>
                        <img src={item.image} width={200} height={240} alt="" style={{ borderRadius: 8 }} />
                        <Typography
                            fontSize={24}
                            fontWeight={700}
                            color="#FFCA21"
                            textTransform="uppercase"
                            marginTop={3}
                            className="neueplak_condensed"
                        >
                            {item.title}
                        </Typography>
                        <Typography fontWeight={300} color="#FFCA21">
                            {`${item.count} NFT`}
                        </Typography>
                    </Stack>
                ))}
            </Stack>
            <Stack display={{ xs: 'flex', md: 'none' }} direction="row" alignItems="center" spacing={2}>
                <IconButton onClick={handlePrev}>
                    <PrevIcon sx={{ fontSize: { xs: 40, md: 80 }, color: '#FFCA21' }} />
                </IconButton>
                <Swiper
                    onInit={(core: SwiperCore) => {
                        swiperRef.current = core.el;
                    }}
                    modules={[Navigation]}
                    slidesPerView={0.9}
                >
                    {gcfTokenData.map((item, index) => (
                        <SwiperSlide key={`gcf_token_key${index}`}>
                            <Stack>
                                <img src={item.image} width="90%" style={{ borderRadius: 8 }} alt="" />
                                <Typography
                                    fontSize={24}
                                    fontWeight={700}
                                    color="#FFCA21"
                                    textTransform="uppercase"
                                    marginTop={3}
                                    className="neueplak_condensed"
                                >
                                    {item.title}
                                </Typography>
                                <Typography fontWeight={300} color="#FFCA21">
                                    {`${item.count} NFT`}
                                </Typography>
                            </Stack>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <IconButton onClick={handleNext}>
                    <NextIcon sx={{ fontSize: { xs: 40, md: 80 }, color: '#FFCA21' }} />
                </IconButton>
            </Stack>
        </Stack>
    );
};

export default GCFBox;
