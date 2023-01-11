import React from 'react';
import { Stack, Typography } from '@mui/material';

type ComponentProps = {};

const Footer: React.FC<ComponentProps> = ({}) => {
    return (
        <Stack height={72} direction="row" alignItems="center" justifyContent="center" spacing={1}>
            <Typography color="white" sx={{ padding: '0 0 6px' }}>
                Powered by
            </Typography>
            <a href="" target="_blank" rel="noopener noreferrer">
                <img src="/assets/luna-logo.svg" alt="" />
            </a>
        </Stack>
    );
};

export default Footer;
