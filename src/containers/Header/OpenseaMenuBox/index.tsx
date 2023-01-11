import React, { useState } from 'react';
import { Stack, Box, Typography } from '@mui/material';
import { OpenseaMenuBtn, OpenseaMenuListBox, MenuItemTypo } from './styles';
import ArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const openseaMenuList = [
    { title: 'GENESIS CURRY FLOW', link: 'https://opensea.io/collection/genesis-curry-flow' },
    { title: 'NF3 BASKETBALL', link: 'https://opensea.io/collection/nf3-basketball' },
    { title: 'SERUMS', link: 'https://opensea.io/collection/basketball-headz-serums' },
    { title: 'BASKETBALL HEADZ', link: 'https://opensea.io/collection/basketball-headz-official' }
];

interface ComponentProps {}

const OpenseaMenuBox: React.FC<ComponentProps> = () => {
    const [openseaMenuOpen, setOpenseaMenuOpen] = useState<boolean>(false);

    return (
        <Box position="relative">
            <OpenseaMenuBtn
                open={openseaMenuOpen}
                direction="row"
                alignItems="center"
                spacing={1}
                onClick={() => setOpenseaMenuOpen(!openseaMenuOpen)}
            >
                <Typography className="lbl__typo">
                    OPENSEA
                    <Typography className="blur__typo">OPENSEA</Typography>
                </Typography>
                <Box className="arrow_icon__box">
                    <ArrowDownIcon className="arrow_icon" />
                    <ArrowDownIcon className="blur__arrow_icon" />
                </Box>
            </OpenseaMenuBtn>
            <OpenseaMenuListBox display={openseaMenuOpen ? 'flex' : 'none'}>
                {openseaMenuList.map((item) => (
                    <Box>
                        <a href={item.link} target="_blank" rel="noopener noreferrer">
                            <MenuItemTypo onClick={() => setOpenseaMenuOpen(false)}>
                                {item.title}
                                <Typography className="blur__typo">{item.title}</Typography>
                            </MenuItemTypo>
                        </a>
                    </Box>
                ))}
            </OpenseaMenuListBox>
        </Box>
    );
};

export default OpenseaMenuBox;
