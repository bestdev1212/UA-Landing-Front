import React from 'react';
import { Stack, Box } from '@mui/material';
import { SxProps } from '@mui/material/styles';

interface ComponentProps {
    curCarouselIndex: number;
    setCurCarouselIndex: (value: number) => void;
    sx?: SxProps;
}

const CarouselIndicator: React.FC<ComponentProps> = ({ curCarouselIndex, setCurCarouselIndex, sx }) => {
    const indicator = (index: number) => {
        return (
            <Box
                onClick={() => setCurCarouselIndex(index)}
                width={12}
                height={12}
                borderRadius={100}
                sx={{ background: 'white', cursor: 'pointer' }}
            />
        );
    };

    const activeIndicator = (index: number) => {
        return (
            <Box
                position="relative"
                width={64}
                height={12}
                borderRadius={100}
                sx={{ background: '#FFCA21', cursor: 'pointer' }}
                onClick={() => setCurCarouselIndex(index)}
            >
                <Box
                    position="absolute"
                    borderRadius={1.5}
                    sx={{ inset: 0, background: '#FFCA21', filter: 'blur(10px)' }}
                />
            </Box>
        );
    };

    return (
        <Stack direction="row" spacing={3} sx={{ ...sx }}>
            {[...Array(4).keys()].map((index) =>
                curCarouselIndex === index ? activeIndicator(index) : indicator(index)
            )}
        </Stack>
    );
};

export default CarouselIndicator;
