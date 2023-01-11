import React from 'react';
import { Stack, Box } from '@mui/material';

interface ComponentProps {
    showBar?: boolean;
}

const RoadmapBar: React.FC<ComponentProps> = ({ showBar = true }) => {
    return (
        <Stack position="relative" height="100%" alignItems="center">
            {showBar && (
                <Box width={4} height="100%" sx={{ background: '#FFCA21' }}>
                    <Box width="100%" height="100%" sx={{ background: '#FFCA21', filter: 'blur(10px)' }}></Box>
                </Box>
            )}
            <Box position="absolute" top={0} width={34} height={34} borderRadius={100} sx={{ background: '#FFCA21' }}>
                <Box
                    width="100%"
                    height="100%"
                    borderRadius={100}
                    sx={{ background: '#FFCA21', filter: 'blur(10px)' }}
                />
                <Stack position="absolute" justifyContent="center" alignItems="center" sx={{ inset: 0 }}>
                    <Box width={20} height={20} borderRadius={100} sx={{ background: 'white' }} />
                </Stack>
            </Box>
        </Stack>
    );
};

export default RoadmapBar;
