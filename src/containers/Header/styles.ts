import { styled, Stack } from '@mui/material';

export const StyledBurger = styled('div')<{ open: boolean }>`
    width: 2rem;
    height: 2rem;
    z-index: 20;
    display: none;
    position: relative;

    ${(props) => props.theme.breakpoints.down('md')} {
        display: flex;
        justify-content: space-around;
        flex-flow: column nowrap;
    }

    div.menu_line {
        width: 2rem;
        height: 0.25rem;
        background-color: ${({ open }) => (open ? 'black' : 'black')};
        border-radius: 10px;
        transform-origin: 1px;
        transition: all 0.2s linear;

        &:nth-child(1) {
            transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
        }

        &:nth-child(2) {
            transform: ${({ open }) => (open ? 'translateX(100%)' : 'translateX(0)')};
            opacity: ${({ open }) => (open ? 0 : 1)};
        }

        &:nth-child(3) {
            transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
        }
    }
`;

export const BurgerMenuBox = styled(Stack)<{ open: boolean }>`
    width: 240px;
    padding: 16px;
    position: absolute;
    top: 120%;
    right: 0;
    border-radius: 8px;
    background: white;
    display: ${({ open }) => (open ? 'flex' : 'none')};
`;
