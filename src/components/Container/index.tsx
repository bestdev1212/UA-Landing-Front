import React from 'react';
import { ContainerWrapper } from './styles';
import { SxProps } from '@mui/material/styles';

export interface ComponentProps {
    sx?: SxProps;
}

const Container: React.FC<ComponentProps> = ({ children, sx }): JSX.Element => {
    return (
        <>
            <ContainerWrapper sx={{ ...sx }}>{children}</ContainerWrapper>
        </>
    );
};

export default Container;
