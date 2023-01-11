import { styled, Box, Button } from '@mui/material';

export const GradientBox = styled(Box)`
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 48.23%, #000000 100%);
`;

export const VisitPageBtn = styled(Button)`
    height: 76px;
    padding: 0 16px 8px;
    background: #ffca21;
    color: black;
    border-radius: 8px;
    font-size: 40px;
    font-weight: 700;
    &:hover {
        background: #ffca21;
    }
    ${(props) => props.theme.breakpoints.down('xl')} {
        height: 56px;
        font-size: 36px;
    }
    ${(props) => props.theme.breakpoints.down('sm')} {
        height: 46px;
        font-size: 20px;
    }
`;

export const ViewCollectionBtn = styled(Button)`
    height: 76px;
    padding: 0 16px 8px;
    color: #ffca21;
    border: 1px solid #ffca21;
    border-radius: 8px;
    font-size: 40px;
    font-weight: 700;
    ${(props) => props.theme.breakpoints.down('xl')} {
        height: 56px;
        font-size: 36px;
    }
    ${(props) => props.theme.breakpoints.down('sm')} {
        height: 46px;
        font-size: 20px;
    }
`;
