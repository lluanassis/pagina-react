import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute} from './SidebarElements'

const Sidebar = () => {
  return (
    <SidebarContainer>
        <Icon>
            <CloseIcon/>
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to="sobre">
                    Sobre
                </SidebarLink>
                <SidebarLink to="descubra">
                    Descubra
                </SidebarLink>
                <SidebarLink to="servicos">
                    Serviços
                </SidebarLink>
                <SidebarLink to="inscricao">
                    Inscrever-me
                </SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to="/acessar">
                    Acessar
                </SidebarRoute>
            </SideBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar