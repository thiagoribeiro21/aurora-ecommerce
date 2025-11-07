// Header de navegação: logo, links, carrinho e login/logout.
// Responsivo: menu hamburguer no mobile, links completos no desktop.
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import {
  FaBars,
  FaTimes,
  FaUserCircle,
  FaSignOutAlt,
  FaShoppingCart,
} from 'react-icons/fa';
import { HashLink } from 'react-router-hash-link';
import { useAuth } from '../../contexts/AuthContext';
import { useCart } from '../../contexts/CartContext';
import {
  LogoLink,
  MobileMenu,
  MobileMenuIcon,
  MobileNav,
  MobileNavLink,
  NavContainer,
  NavLink,
  NavMenu,
  HeaderContainer,
  ShoppingCartButton,
} from './styled';
import { toast } from 'react-hot-toast';

const navLinks = [
  { path: '/products', label: 'Produtos' },
  { path: '/about', label: 'Sobre Nós' },
  { path: '/#testimonials', label: 'Depoimentos' },

  { path: '/#subscription', label: 'Assinatura' },
  { path: '/#location', label: 'Localização' },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const { openCart, totalItems } = useCart();
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  // Logout simples com feedback e redirecionamento.
  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
    } catch (e) {
      toast.error('Erro ao sair. Tente novamente.');
    }
  };
  return (
    <HeaderContainer>
      <NavContainer>
        <LogoLink to="/">
          <span>Aurora</span>
        </LogoLink>

        <NavMenu>
          {navLinks.map((link) => (
            <NavLink as={HashLink} key={link.label} to={link.path}>
              {link.label}
            </NavLink>
          ))}
        </NavMenu>

        <MobileNav>
          {/* Carrinho: exige login. Se não logado, mostra toast e manda pro /login. */}
          <ShoppingCartButton
            onClick={() => {
              if (!user) {
                toast.error('Faça login para acessar o carrinho.');
                navigate('/login');
                return;
              }
              openCart();
            }}
            aria-label="Abrir carrinho"
            style={{ position: 'relative', marginRight: '0.5rem' }}
          >
            <FaShoppingCart />
            {/* Badge com total de itens no carrinho */}
            {totalItems > 0 && (
              <span
                style={{
                  position: 'absolute',
                  top: -6,
                  right: -10,
                  background: '#8B4513',
                  color: 'white',
                  borderRadius: 999,
                  fontSize: '0.7rem',
                  lineHeight: 1,
                  padding: '2px 6px',
                }}
              >
                {totalItems}
              </span>
            )}
          </ShoppingCartButton>
          {user ? (
            // Atalho para sair quando autenticado
            <Link onClick={handleLogout} aria-label="Sair" to={''}>
              <FaSignOutAlt />
            </Link>
          ) : (
            // Atalho para login quando não autenticado
            <Link to="/login" aria-label="Entrar">
              <FaUserCircle />
            </Link>
          )}
          {/* Ícone abre/fecha o menu mobile */}
          <MobileMenuIcon onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </MobileMenuIcon>
        </MobileNav>

        {isMobileMenuOpen && (
          <MobileMenu>
            {navLinks.map((link) => (
              <MobileNavLink
                as={HashLink}
                key={link.label}
                to={link.path}
                onClick={toggleMobileMenu}
              >
                {link.label}
              </MobileNavLink>
            ))}
          </MobileMenu>
        )}
      </NavContainer>
    </HeaderContainer>
  );
}
