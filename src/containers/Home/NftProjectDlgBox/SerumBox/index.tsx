import React, { useRef, useCallback } from 'react';
import { Stack, Box, Typography, IconButton } from '@mui/material';
import { serumTokenList } from '../../../../constants';
import PrevIcon from '@mui/icons-material/KeyboardArrowLeft';
import NextIcon from '@mui/icons-material/KeyboardArrowRight';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { carouselBoxItemsList } from '../../../../constants';

import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper core and required modules
import { Navigation } from 'swiper';
import SwiperCore from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

type ComponentProps = {};

const SerumBox: React.FC<ComponentProps> = () => {
    const swiperRef = useRef() as any;

    const handlePrev = useCallback(() => {
        if (!swiperRef.current) return;
        swiperRef.current.swiper.slidePrev();
    }, []);

    const handleNext = useCallback(() => {
        if (!swiperRef.current) return;
        swiperRef.current.swiper.slideNext();
    }, []);

    const theme = useTheme();
    const matchDownSm = useMediaQuery(theme.breakpoints.down('sm'));

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
                    SERUMS X NF3 BASKETBALL
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
                    SERUMS X NF3 BASKETBALL
                </Typography>
            </Box>
            <Typography width={{ xs: '100%', md: '70%' }} fontSize={{ xs: 16, md: 24 }} color="white">
                {carouselBoxItemsList[2].desc}
            </Typography>
            <Stack direction="row" alignItems="center" spacing={2}>
                <IconButton onClick={handlePrev}>
                    <PrevIcon sx={{ fontSize: { xs: 40, md: 80 }, color: '#FFCA21' }} />
                </IconButton>
                <Swiper
                    onInit={(core: SwiperCore) => {
                        swiperRef.current = core.el;
                    }}
                    modules={[Navigation]}
                    slidesPerView={matchDownSm ? 0.9 : 3.9}
                >
                    {serumTokenList.map((item, index) => (
                        <SwiperSlide key={`serum_item_key${index}`}>
                            <Stack spacing={3}>
                                <img src={item.image} width={matchDownSm ? '90%' : 200} alt="" />
                                <Typography
                                    fontSize={24}
                                    fontWeight={700}
                                    color="#FFCA21"
                                    textTransform="uppercase"
                                    className="neueplak_condensed"
                                >
                                    {item.title}
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

export default SerumBox;
