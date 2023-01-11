import { styled, Stack, Typography } from '@mui/material';

export const OpenseaMenuBtn = styled(Stack)<{ open: boolean }>`
    cursor: pointer;
    .lbl__typo {
        position: relative;
        font-size: 18px;
        color: ${({ open }) => (open ? '#ffca21' : 'white')};
        padding: 0 0 6px;
        .blur__typo {
            font-size: 18px;
            position: absolute;
            inset: 0;
            color: #ffca21;
            padding: 0 0 6px;
            filter: blur(10px);
            display: ${({ open }) => (open ? 'block' : 'none')};
        }
    }
    .arrow_icon__box {
        position: relative;
        .arrow_icon {
            color: ${({ open }) => (open ? '#ffca21' : 'white')};
            transform: ${({ open }) => (open ? 'rotate(-180deg)' : 'rotate(0deg)')};
            transition: transform 200ms linear;
        }
        .blur__arrow_icon {
            position: absolute;
            inset: 0;
            color: #ffca21;
            transform: ${({ open }) => (open ? 'rotate(-180deg)' : 'rotate(0deg)')};
            transition: transform 200ms linear;
            filter: blur(10px);
            display: ${({ open }) => (open ? 'block' : 'none')};
        }
    }
    &:hover {
        .blur__typo {
            display: block;
        }
        .blur__arrow_icon {
            display: block;
        }
    }
`;

export const OpenseaMenuListBox = styled(Stack)`
    position: absolute;
    top: 42px;
    right: -12px;
    width: 260px;
    padding: 16px 16px 16px 0;
    align-items: flex-end;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(50px);
`;

export const MenuItemTypo = styled(Typography)`
    position: relative;
    font-size: 18px;
    color: white;
    padding: 6px 0 10px;
    cursor: pointer;
    .blur__typo {
        position: absolute;
        inset: 0;
        font-size: 18px;
        color: #ffca21;
        padding: 6px 0 10px;
        filter: blur(5px);
        display: none;
    }
    &:hover {
        .blur__typo {
            display: block;
        }
    }
`;
