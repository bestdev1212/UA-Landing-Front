import { styled, Stack, Button } from '@mui/material';

export const DlgContainer = styled(Stack)`
    position: relative;
    padding: 40px;
    border: 2px solid #ffca21;
    border-radius: 8px;
    background: black;
    overflow: auto;
`;

export const VisitPageBtn = styled(Button)`
    height: 64px;
    padding: 0 16px 8px;
    background: #ffca21;
    color: black;
    border-radius: 8px;
    font-size: 32px;
    font-weight: 700;
    &:hover {
        background: #ffca21;
    }
    ${(props) => props.theme.breakpoints.down('sm')} {
        width: 142px;
        height: 46px;
        font-size: 20px;
    }
`;

export const ViewCollectionBtn = styled(Button)`
    height: 64px;
    padding: 0 16px 8px;
    color: #ffca21;
    border: 1px solid #ffca21;
    border-radius: 8px;
    font-size: 32px;
    font-weight: 700;
    ${(props) => props.theme.breakpoints.down('sm')} {
        width: 142px;
        height: 46px;
        font-size: 20px;
    }
`;
