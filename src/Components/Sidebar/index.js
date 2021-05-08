import React from 'react';
import { SidebarContainer,
        Icon,
        SidebarMenu,
        SidebarLink,
        SideBtnWrap,
        SidebarRoute,
        CloseIcon
} from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {


    return (
        <SidebarContainer isOpen={isOpen} toggle={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarMenu>
                <SidebarLink to="/">Burgers</SidebarLink>
                <SidebarLink to="/">Desserts</SidebarLink>
                <SidebarLink to="/">Full Menu</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to="/">Order Now</SidebarRoute>
            </SideBtnWrap>
        </SidebarContainer>
    )
}

export default Sidebar
