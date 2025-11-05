import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import styled from 'styled-components';

// Cabeçalho fixo no topo (sticky) com z-index alto para ficar acima do conteúdo.
export const HeaderContainer = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.colors.secondary};
  position: sticky;
  top: 0;
  z-index: 100;
`;

// Nav responsiva: grid no tablet para organizar logo/links, flex no desktop.
export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: ${({ theme }) => theme.colors.secondary};
  position: sticky;
  width: 100%;
  top: 0;
  z-index: 100;

  @media (min-width: 768px) {
    display: grid;

    grid-template-columns: 1fr auto;

    grid-template-rows: 70px auto;
    align-items: center;
    height: auto;
    padding-bottom: 0.5rem;

    grid-template-areas:
      'logo   mobile-group'
      'nav    nav';
  }
  @media (min-width: 1024px) {
    display: flex;
    max-width: 980px;
    margin: 0 auto;
    padding: ${({ theme }) => theme.spacing.medium} 0;
  }
`;

// Marca do site com leve animação no hover.
export const LogoLink = styled(Link)`
  font-size: ${({ theme }) => theme.fontSizes.superLarge};
  font-family: ${({ theme }) => theme.fonts.heading};
  color: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.spacing.medium};
  transition: all 0.2s ease;
  &:hover {
    transform: scale(1.1);
    opacity: 0.8;
    transition: all 0.2s ease;
  }
  @media (min-width: 768px) {
    text-align: center;
    margin-left: 65px;
  }
  @media (min-width: 1024px) {
    margin-left: 0;
  }
`;
export const NavMenu = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-evenly;
    gap: ${({ theme }) => theme.spacing.large};
    padding: 1.4rem;
    grid-area: nav;
    border-top: 0.1px solid ${({ theme }) => theme.colors.primary};
  }

  @media (min-width: 1024px) {
    display: flex;
    gap: ${({ theme }) => theme.spacing.large};
    border-top: none;
  }
`;
// Links de navegação (HashLink para rolar até as seções).
export const NavLink = styled(HashLink)`
  font-size: ${({ theme }) => theme.fontSizes.large};
  font-family: ${({ theme }) => theme.fonts.heading};

  transition: all 0.3s ease;
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    transform: translateX(-5px);
    transition: all 0.3s ease;
  }
  @media (min-width: 1024px) {
    font-size: ${({ theme }) => theme.fontSizes.large};
  }
`;
// Área dos ícones no mobile (carrinho, login/logout, menu hamburguer).
export const MobileNav = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.6rem;
  padding: ${({ theme }) => theme.spacing.medium};
  transition: all 0.5s ease;
  svg:hover {
    transform: scale(1.2);
    opacity: 0.8;
    transition: all 0.5s ease;
  }
  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;
export const MobileMenuIcon = styled.button`
  font-size: 1.4rem;
  @media (min-width: 768px) {
    display: none;
  }
`;
// Menu suspenso exibido no mobile.
export const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 64px;
  right: 0;
  left: 0;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-top: 1px solid ${({ theme }) => theme.colors.gray};
  width: 100%;

  padding: ${({ theme }) => theme.spacing.small} 0;
`;
export const MobileNavLink = styled(HashLink)`
  padding: ${({ theme }) => theme.spacing.medium};
  font-size: ${({ theme }) => theme.fontSizes.large};
  font-family: ${({ theme }) => theme.fonts.heading};

  transition: all 0.3s ease;
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    transform: translateX(-5px);
    transition: all 0.3s ease;
  }
`;

// Botão do ícone do carrinho.
export const ShoppingCartButton = styled.button`
  font-size: 1.6rem;
`;
