import React from 'react';
import { Stack, Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { carouselBoxItemsList } from '../../../../constants';

type ComponentProps = {};

const BBHBox: React.FC<ComponentProps> = () => {
    const theme = useTheme();
    const matchDownSm = useMediaQuery(theme.breakpoints.down('sm'));

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
                    BASKETBALL HEADZ
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
                    BASKETBALL HEADZ
                </Typography>
            </Box>
            <Typography width={{ xs: '100%', md: '70%' }} fontSize={{ xs: 16, md: 24 }} color="white">
                {carouselBoxItemsList[3].desc}
            </Typography>
            <Stack direction={{ xs: 'column', md: 'row' }} alignItems="center" spacing={3}>
                <Stack
                    width={{ xs: '100%', md: 260 }}
                    direction={{ xs: 'row', md: 'column' }}
                    alignItems="center"
                    spacing={3}
                >
                    <img
                        src="/assets/home/nft-projects/bbh-dlg/nf3.png"
                        style={{ width: matchDownSm ? '50%' : '100%', borderRadius: 8 }}
                        alt=""
                    />
                    <Typography
                        fontSize={{ xs: 16, md: 32 }}
                        fontWeight={700}
                        color="#FFCA21"
                        className="neueplak_condensed"
                    >
                        NF3 BASKETBALL
                    </Typography>
                </Stack>
                <Typography
                    fontSize={{ xs: 24, md: 64 }}
                    fontWeight={700}
                    color="#FFCA21"
                    className="neueplak_condensed"
                >
                    +
                </Typography>
                <Stack
                    width={{ xs: '100%', md: 260 }}
                    direction={{ xs: 'row', md: 'column' }}
                    alignItems="center"
                    spacing={3}
                >
                    <img
                        src="/assets/home/nft-projects/bbh-dlg/serum.png"
                        style={{ width: matchDownSm ? '50%' : '100%', borderRadius: 8 }}
                        alt=""
                    />
                    <Typography
                        fontSize={{ xs: 16, md: 32 }}
                        fontWeight={700}
                        color="#FFCA21"
                        className="neueplak_condensed"
                    >
                        SERUMS
                    </Typography>
                </Stack>
                <Typography
                    fontSize={{ xs: 24, md: 64 }}
                    fontWeight={700}
                    color="#FFCA21"
                    className="neueplak_condensed"
                >
                    =
                </Typography>
                <Stack
                    width={{ xs: '100%', md: 260 }}
                    direction={{ xs: 'row', md: 'column' }}
                    alignItems="center"
                    spacing={3}
                >
                    <img
                        src="/assets/home/nft-projects/bbh-dlg/bbh.png"
                        style={{ width: matchDownSm ? '50%' : '100%', borderRadius: 8 }}
                        alt=""
                    />
                    <Typography
                        fontSize={{ xs: 16, md: 32 }}
                        fontWeight={700}
                        color="#FFCA21"
                        className="neueplak_condensed"
                    >
                        BASKETBALL HEADZ
                    </Typography>
                </Stack>
            </Stack>
        </Stack>
    );
};

export default BBHBox;
