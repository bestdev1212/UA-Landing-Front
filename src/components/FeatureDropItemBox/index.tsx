import React from 'react';
import { Stack, Box, Typography } from '@mui/material';
import { TitleBox } from './styles';

interface ComponentProps {
    title: string;
    image: string;
    url: string;
}

const FeatureDropItemBox: React.FC<ComponentProps> = ({ title, image, url }) => {
    return (
        <Stack position="relative" borderRadius={2} overflow="hidden">
            <img src={image} width={280} height={400} style={{ objectFit: 'cover' }} alt="" />
            <TitleBox justifyContent="center">
                <Typography fontSize={24} fontWeight={700} color="white" className="neueplak_condensed">
                    {title}
                </Typography>
            </TitleBox>
            <Box position="absolute" top={16} right={16}>
                <a href={url} target="_blank" rel="noopener noreferrer">
                    <img src="/assets/home/featured-drops/opensea.svg" width={32} height={32} alt="" />
                </a>
            </Box>
        </Stack>
    );
};

export default FeatureDropItemBox;
