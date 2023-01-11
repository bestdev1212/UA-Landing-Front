import React, { useState, useEffect } from 'react';
import { Stack, Box, IconButton } from '@mui/material';
import { DlgContainer, VisitPageBtn, ViewCollectionBtn } from './styles';
import CloseIcon from '@mui/icons-material/Close';
import CarouselIndicator from '../../../components/CarouselIndicator';
import GCFBox from './GCFBox';
import NF3Box from './NF3Box';
import SerumBox from './SerumBox';
import BBHBox from './BBHBox';
import { carouselBoxItemsList } from '../../../constants';

type ComponentProps = {
    selectedId: number;
    onClose: () => void;
};

const NftProjectDlgBox: React.FC<ComponentProps> = ({ selectedId, onClose }) => {
    const [curCarouselIndex, setCurCarouselIndex] = useState<number>(0);

    useEffect(() => {
        setCurCarouselIndex(selectedId);
    }, [selectedId]);

    return (
        <DlgContainer width={{ xs: '90vw', md: 1240 }}>
            <Box position="absolute" right={{ xs: 8, md: 40 }} top={{ xs: 8, md: 40 }}>
                <IconButton onClick={onClose}>
                    <CloseIcon sx={{ color: '#FFCA21' }} />
                </IconButton>
            </Box>
            {curCarouselIndex === 0 && <GCFBox />}
            {curCarouselIndex === 1 && <NF3Box />}
            {curCarouselIndex === 2 && <SerumBox />}
            {curCarouselIndex === 3 && <BBHBox />}
            <Stack
                direction="row"
                flexWrap="wrap"
                justifyContent={{ xs: 'center', md: 'flex-start' }}
                gap={{ xs: 2, md: 3 }}
                marginTop={8}
            >
                <a href={carouselBoxItemsList[curCarouselIndex].projectPgUrl} target="_blank" rel="noopener noreferrer">
                    <VisitPageBtn className="neueplak_condensed">VISIT PAGE</VisitPageBtn>
                </a>
                <a href={carouselBoxItemsList[curCarouselIndex].openseaUrl} target="_blank" rel="noopener noreferrer">
                    <ViewCollectionBtn className="neueplak_condensed">VIEW COLLECTION</ViewCollectionBtn>
                </a>
            </Stack>
            <CarouselIndicator
                curCarouselIndex={curCarouselIndex}
                setCurCarouselIndex={setCurCarouselIndex}
                sx={{ marginTop: 8, marginX: 'auto' }}
            />
        </DlgContainer>
    );
};

export default NftProjectDlgBox;
