import css from 'styled-jsx/css';
import { styled, Stack, Box } from '@mui/material';

export const PageWrapper = styled(Stack)`
    min-height: 100vh;
    position: relative;
`;

const style = css`
    .site__header {
        /* background: gray; */
        position: fixed;
        top: 0;
        width: 100vw;
        z-index: 20;
    }
    .site__main {
        /* background: white; */
        position: relative;
        z-index: 10;
        min-height: calc(100vh - 144px);
    }
    .site__footer {
        /* background: gray; */
        position: relative;
        z-index: 5;
    }
`;

export default style;
