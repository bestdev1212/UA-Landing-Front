import React from 'react';
import { Stack, Box } from '@mui/material';

interface ComponentProps {
    first?: boolean;
    last?: boolean;
}

const RoadmapBar: React.FC<ComponentProps> = ({ first = false, last = false }) => {
    return (
        <Stack position="relative" height="100%" alignItems="center" paddingRight={2}>
            <Box visibility={first ? 'hidden' : 'visible'} width={2} height="25vw" sx={{ background: '#FFCA21' }}>
                <Box width="100%" height="100%" sx={{ background: '#FFCA21', filter: 'blur(10px)' }}></Box>
            </Box>
            <Box visibility={last ? 'hidden' : 'visible'} width={2} height="100%" sx={{ background: '#FFCA21' }}>
                <Box width="100%" height="100%" sx={{ background: '#FFCA21', filter: 'blur(10px)' }}></Box>
            </Box>
            <Box
                position="absolute"
                top="18vw"
                width={16}
                height={16}
                borderRadius={100}
                sx={{ background: '#FFCA21' }}
            >
                <Box
                    width="100%"
                    height="100%"
                    borderRadius={100}
                    sx={{ background: '#FFCA21', filter: 'blur(10px)' }}
                />
                <Stack position="absolute" justifyContent="center" alignItems="center" sx={{ inset: 0 }}>
                    <Box width={10} height={10} borderRadius={100} sx={{ background: 'white' }} />
                </Stack>
            </Box>
        </Stack>
    );
};

export default RoadmapBar;
