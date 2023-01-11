import React, { useState } from 'react';
import { Stack, Box, Typography } from '@mui/material';
import Container from '../../components/Container';
import { StyledBurger, BurgerMenuBox } from './styles';
import Link from 'next/link';
import OpenseaMenuBox from './OpenseaMenuBox';

type ComponentProps = {};

const Header: React.FC<ComponentProps> = ({}) => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <Box
                sx={
                    {
                        /* background: '#F5F5F5' */
                    }
                }
            >
                <Container sx={{ overflow: 'visible' }}>
                    {/* for Desktop verions */}
                    <Stack
                        height={72}
                        direction="row"
                        alignItems="center"
                        justifyContent="space-between"
                        // display={{ xs: 'none', md: 'flex' }}
                    >
                        <Link href="/" passHref>
                            <img
                                src="/assets/curry-brand-ua-logo.svg"
                                width={40}
                                height={40}
                                alt="Logo"
                                style={{ cursor: 'pointer' }}
                            />
                        </Link>
                        <OpenseaMenuBox />
                    </Stack>
                    {/* for Mobile version */}
                    {/* <Stack
                        height={72}
                        direction="row"
                        alignItems="center"
                        justifyContent="space-between"
                        spacing={2.5}
                        display={{ xs: 'flex', md: 'none' }}
                    >
                        <Link href="/" passHref>
                            <img
                                src="/assets/curry-brand-ua-logo.svg"
                                width={40}
                                height={40}
                                alt="Logo"
                                style={{ cursor: 'pointer' }}
                            />
                        </Link>
                        <StyledBurger open={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
                            <div className="menu_line" />
                            <div className="menu_line" />
                            <div className="menu_line" />
                            <BurgerMenuBox spacing={2} open={menuOpen}></BurgerMenuBox>
                        </StyledBurger>
                    </Stack> */}
                </Container>
            </Box>
        </>
    );
};

export default Header;
