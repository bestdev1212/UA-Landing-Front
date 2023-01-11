import React, { useState } from 'react';
import { Stack, Box, Grid, Typography, Dialog, Link } from '@mui/material';
import Container from '../../components/Container';
import Carousel from 'react-material-ui-carousel';
import ProductBox from '../../components/ProductBox';
import RightArrowIcon from '@mui/icons-material/ChevronRight';
import NftProjectDlgBox from './NftProjectDlgBox';
import {
    carouselBoxItemsList,
    ourNftProjects,
    featuredDropsList,
    roadmapList,
    supportList,
    followUsMenu,
    aboutMenu,
    legalMenu
} from '../../constants';
import FeatureDropItemBox from '../../components/FeatureDropItemBox';
import RoadmapBar from '../../components/RoadmapBar';
import RoadmapBarMobile from '../../components/RoadmapBar/Mobile';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

type ComponentProps = {};

const HomePageContainer: React.FC<ComponentProps> = () => {
    const theme = useTheme();
    const matchDownSm = useMediaQuery(theme.breakpoints.down('sm'));

    const [curCarouselIndex, setCurCarouselIndex] = useState<number>(0);

    const [showNftProjectDlg, setShowNftProjectDlg] = useState<boolean>(false);
    const [selectedNftProjectId, setSelectedNftProjectId] = useState<number>(0);

    const onNftProjectClick = (index: number) => {
        setSelectedNftProjectId(index);
        setShowNftProjectDlg(true);
    };

    return (
        <Stack>
            <Carousel
                index={curCarouselIndex}
                indicators={false}
                navButtonsAlwaysInvisible={true}
                autoPlay={false}
                swipe={false}
            >
                {carouselBoxItemsList.map((item) => (
                    <Box position="relative" height={{ xs: '180vw', sm: 'auto' }}>
                        {item.assetType === 'video' ? (
                            <>
                                {matchDownSm && (
                                    <video autoPlay muted loop style={{ width: '100%' }}>
                                        <source src={item.assetMobile} type="video/mp4" />
                                    </video>
                                )}
                                {!matchDownSm && (
                                    <video autoPlay muted loop style={{ width: '100%' }}>
                                        <source src={item.assetDesktop} type="video/mp4" />
                                    </video>
                                )}
                            </>
                        ) : (
                            <img src={matchDownSm ? item.assetMobile : item.assetDesktop} width="100%" alt="" />
                        )}
                        <ProductBox
                            title={item.title}
                            titleWidth={item.titleWidth}
                            desc={item.desc}
                            curCarouselIndex={curCarouselIndex}
                            setCurCarouselIndex={(value: number) => setCurCarouselIndex(value)}
                            openseaUrl={item.openseaUrl}
                            projectPgUrl={item.projectPgUrl}
                        />
                    </Box>
                ))}
            </Carousel>
            {/* OUR NFT PROJECTS */}
            <Container sx={{ paddingTop: 20, paddingBottom: 15 }}>
                <Stack alignItems="center">
                    <Typography fontSize={40} fontWeight={700} color="#FFCA21" className="neueplak_condensed">
                        OUR NFT PROJECTS
                    </Typography>
                    <Stack direction="row" justifyContent="center" flexWrap="wrap" gap={5} marginTop={10}>
                        {ourNftProjects.map((item, index) => (
                            <Stack
                                borderRadius={3}
                                sx={{ overflow: 'hidden', cursor: 'pointer' }}
                                key={`nft_project_key_${index}`}
                                onClick={() => onNftProjectClick(index)}
                            >
                                <img src={item.img} width={280} height={326} alt="" />
                                <Stack
                                    direction="row"
                                    justifyContent="space-between"
                                    alignItems="center"
                                    height={70}
                                    paddingX={2}
                                    sx={{ background: '#FFCA21' }}
                                >
                                    <Typography fontSize={24} fontWeight={700} className="neueplak_condensed">
                                        {item.title}
                                    </Typography>
                                    <Box
                                        width={24}
                                        height={24}
                                        borderRadius={100}
                                        sx={{ background: 'black', cursor: 'pointer' }}
                                    >
                                        <RightArrowIcon sx={{ color: '#FFCA21' }} />
                                    </Box>
                                </Stack>
                            </Stack>
                        ))}
                    </Stack>
                    <Dialog
                        open={showNftProjectDlg}
                        onClose={() => setShowNftProjectDlg(false)}
                        maxWidth={false}
                        PaperProps={{
                            sx: { background: 'none', boxShadow: 'none', margin: 0 }
                        }}
                    >
                        <NftProjectDlgBox
                            selectedId={selectedNftProjectId}
                            onClose={() => setShowNftProjectDlg(false)}
                        />
                    </Dialog>
                </Stack>
            </Container>
            {/* WHO WE ARE */}
            <Box paddingY={{ xs: 10, md: 15 }} sx={{ background: '#FFCA21' }}>
                <Container>
                    <Stack
                        direction={{ xs: 'column', md: 'row' }}
                        justifyContent="center"
                        alignItems="center"
                        spacing={{ xs: 5, md: 40 }}
                    >
                        <Box width={{ xs: '70%', md: 'auto' }} height={{ xs: '70%', md: 'auto' }}>
                            <img src="/assets/home/curry-brand-ua-logo.svg" width="100%" height="100%" alt="" />
                        </Box>
                        <Stack spacing={{ xs: 2, md: 5 }}>
                            <Typography fontSize={{ xs: 64, md: 80 }} fontWeight={700} className="neueplak_condensed">
                                WHO WE ARE
                            </Typography>
                            <Typography width={{ xs: 'auto', md: 540 }} fontSize={{ xs: 20, md: 24 }}>
                                We are Curry Brand, and our mission is to build the most engaged, passionate, and
                                exciting community in the metaverse. We tirelessly seek to bring new ideas and value to
                                our community. So stay tuned and expect more 'firsts' from a brand and a player that
                                keeps 'Changing the Game for Good.'
                            </Typography>
                        </Stack>
                    </Stack>
                </Container>
            </Box>
            {/* FEATURED DROPS */}
            <Container sx={{ paddingY: 10 }}>
                <Stack alignItems="center" spacing={10}>
                    <Typography fontSize={40} fontWeight={700} color="#FFCA21" className="neueplak_condensed">
                        FEATURED DROPS
                    </Typography>
                    <Stack direction="row" flexWrap="wrap" justifyContent="center" gap={5}>
                        {featuredDropsList.map((item, index) => (
                            <FeatureDropItemBox title={item.title} image={item.image} url={item.url} />
                        ))}
                    </Stack>
                </Stack>
            </Container>
            {/* ROADMAPS */}
            <Container sx={{ paddingY: 10, overflow: 'visible' }}>
                <Stack alignItems="center" spacing={10}>
                    <Typography fontSize={40} fontWeight={700} color="#FFCA21" className="neueplak_condensed">
                        ROADMAPS
                    </Typography>
                    <Grid container display={{ xs: 'none', md: 'flex' }}>
                        {roadmapList.map((item, index) => (
                            <Grid
                                item
                                container
                                direction={index % 2 === 0 ? 'row' : 'row-reverse'}
                                key={`roadmap_item_${index}`}
                            >
                                <Grid xs={5} paddingBottom={15}>
                                    <Stack width={480} marginLeft={index % 2 === 0 ? 'auto' : 0}>
                                        <img src={item.image} alt="" />
                                    </Stack>
                                </Grid>
                                <Grid xs={2}>
                                    <RoadmapBar showBar={index < roadmapList.length - 1} />
                                </Grid>
                                <Grid xs={5} paddingBottom={15}>
                                    <Stack
                                        width={480}
                                        spacing={2}
                                        marginTop={-2}
                                        marginLeft={index % 2 === 0 ? 0 : 'auto'}
                                        textAlign={index % 2 === 0 ? 'left' : 'right'}
                                    >
                                        <Typography
                                            fontSize={40}
                                            fontWeight={700}
                                            color="#FFCA21"
                                            lineHeight={1.2}
                                            className="neueplak_condensed"
                                        >
                                            {item.title}
                                        </Typography>
                                        {item.desc}
                                    </Stack>
                                </Grid>
                            </Grid>
                        ))}
                    </Grid>
                    <Grid container display={{ xs: 'flex', md: 'none' }}>
                        {roadmapList.map((item, index) => (
                            <Grid item container key={`roadmap_item_${index}`}>
                                <Grid xs={2}>
                                    <RoadmapBarMobile first={index === 0} last={index === roadmapList.length - 1} />
                                </Grid>
                                <Grid xs={8}>
                                    <Stack paddingBottom={8}>
                                        <img src={item.image} width="100%" height="100%" alt="" />
                                        <Stack alignItems="center" spacing={1} marginTop={3}>
                                            <Typography
                                                fontWeight={700}
                                                color="#FFCA21"
                                                lineHeight={1.2}
                                                className="neueplak_condensed"
                                            >
                                                {item.title}
                                            </Typography>
                                            {item.desc}
                                        </Stack>
                                    </Stack>
                                </Grid>
                            </Grid>
                        ))}
                    </Grid>
                </Stack>
            </Container>
            <Container sx={{ paddingY: 10 }}>
                <Stack alignItems="center" spacing={10}>
                    <Typography
                        fontSize={40}
                        fontWeight={700}
                        color="#FFCA21"
                        textAlign="center"
                        className="neueplak_condensed"
                    >
                        AWESOME PEOPLE WE WORK WITH
                    </Typography>
                    <Stack direction="row" flexWrap="wrap" justifyContent="center" columnGap={15} rowGap={5}>
                        {supportList.map((item) => (
                            <img src={item} alt="" />
                        ))}
                    </Stack>
                </Stack>
            </Container>
            <Box paddingY={7} sx={{ background: '#FFCA21' }}>
                <Container>
                    <Stack
                        direction={{ xs: 'column', md: 'row' }}
                        justifyContent="space-between"
                        alignItems="center"
                        spacing={5}
                    >
                        <img src="/assets/home/curry-brand-ua-logo.svg" width={100} height={100} alt="" />
                        <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 5, md: 15 }}>
                            <Stack alignItems={{ xs: 'center', md: 'flex-start' }} spacing={2}>
                                <Typography fontWeight={700}>FOLLOW US</Typography>
                                <Stack alignItems={{ xs: 'center', md: 'flex-start' }} spacing={1}>
                                    {followUsMenu.map((item, index) => (
                                        <Link
                                            href={item.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            underline="none"
                                            color="black"
                                            key={`followus_menu_key${index}`}
                                        >
                                            <Typography>{item.label}</Typography>
                                        </Link>
                                    ))}
                                </Stack>
                            </Stack>
                            <Stack alignItems={{ xs: 'center', md: 'flex-start' }} spacing={2}>
                                <Typography fontWeight={700}>ABOUT</Typography>
                                <Stack alignItems={{ xs: 'center', md: 'flex-start' }} spacing={1}>
                                    {aboutMenu.map((item, index) => (
                                        <Link
                                            href={item.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            underline="none"
                                            color="black"
                                            key={`about_menu_key${index}`}
                                        >
                                            <Typography>{item.label}</Typography>
                                        </Link>
                                    ))}
                                </Stack>
                            </Stack>
                            <Stack alignItems={{ xs: 'center', md: 'flex-start' }} spacing={2}>
                                <Typography fontWeight={700}>LEGAL</Typography>
                                <Stack alignItems={{ xs: 'center', md: 'flex-start' }} spacing={1}>
                                    {legalMenu.map((item, index) => (
                                        <Link
                                            href={item.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            underline="none"
                                            color="black"
                                            key={`legal_menu_key${index}`}
                                        >
                                            <Typography>{item.label}</Typography>
                                        </Link>
                                    ))}
                                </Stack>
                            </Stack>
                        </Stack>
                    </Stack>
                </Container>
            </Box>
        </Stack>
    );
};

export default HomePageContainer;
