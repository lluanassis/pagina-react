import {animateScroll as scroll} from 'react-scroll';

import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";

import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./FooterElements";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Sobre Nós</FooterLinkTitle>
              <FooterLink to="/entrar">Como funciona</FooterLink>
              <FooterLink to="/entrar">Testemunhos</FooterLink>
              <FooterLink to="/entrar">Carreiras</FooterLink>
              <FooterLink to="/entrar">Investidores</FooterLink>
              <FooterLink to="/entrar">Termos de uso</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Videos</FooterLinkTitle>
              <FooterLink to="/entrar">Vídeos enviados</FooterLink>
              <FooterLink to="/entrar">Embaixadores</FooterLink>
              <FooterLink to="/entrar">Agência</FooterLink>
              <FooterLink to="/entrar">Investidores</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Contato</FooterLinkTitle>
              <FooterLink to="/entrar">Contato</FooterLink>
              <FooterLink to="/entrar">Suporte</FooterLink>
              <FooterLink to="/entrar">Destinos</FooterLink>
              <FooterLink to="/entrar">Respostas</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Mídias Sociais</FooterLinkTitle>
              <FooterLink to="/entrar">Instagram</FooterLink>
              <FooterLink to="/entrar">Facebook</FooterLink>
              <FooterLink to="/entrar">Youtube</FooterLink>
              <FooterLink to="/entrar">Twitter</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>dolla</SocialLogo>
            <WebsiteRights>
              dolla © {new Date().getFullYear()} Todos os direitos reservados.
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
