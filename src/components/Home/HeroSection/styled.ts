// Estilos do Hero da Home.
// Wrapper aplica imagem de fundo e parallax simples em desktop; demais blocos centralizam e estilizam o conteúdo.
import styled from 'styled-components';
import heroBg from '../../../assets/img/background-hero-section.webp';

// Área hero com imagem de fundo (parallax em telas grandes)
export const HeroWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 50vh;
  background-image: url(${heroBg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  /* Parallax simples em desktop */
  @media (min-width: 1024px) {
    background-attachment: fixed;
    will-change: background-position;
    min-height: 50vh;
    background-position: center 20%;
  }
`;
// Card translúcido centralizado para texto e CTA
export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 8px;
  width: 70%;
  padding: 2rem;
  @media (min-width: 768px) {
    width: 50%;
  }
  @media (min-width: 1024px) {
    width: 30%;
  }
`;
// Espaçamento entre título/hashtag e o botão
export const TextContent = styled.div`
  margin-bottom: 2rem;
`;

// Título principal do hero
export const HeroText = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.superLarge};
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.heading};
`;
// Hashtag de apoio
export const HeroSpan = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.large};
  color: ${({ theme }) => theme.colors.primary};
`;
// Container do botão; estiliza o Link interno
export const ButtonContainer = styled.div`
  a {
    display: inline-block;
    color: ${({ theme }) => theme.colors.white};
    padding: ${({ theme }) => theme.spacing.medium};

    background-color: ${({ theme }) => theme.colors.primary};
    font-family: ${({ theme }) => theme.fonts.body};
    border-radius: 12px;
    font-size: ${({ theme }) => theme.fontSizes.medium};
    transition: background-color 0.5s ease;
    font-weight: bold;
    &:hover {
      background-color: ${({ theme }) => theme.colors.gray};
      transition: background-color 0.5s ease;
    }
  }
`;
