import styled from 'styled-components';
import imgHeroAbout from '../../../assets/img/hero-about.jpg';
// Seção com imagem de fundo (parallax leve em desktop)
export const HeroAboutWrapper = styled.section`
  background-image: url(${imgHeroAbout});
  background-size: cover;
  background-position: center;
  padding: 100px 0;
  @media (min-width: 1024px) {
    background-attachment: fixed;
    will-change: background-position;

    background-position: bottom 20%;
  }
`;
// Limita a largura do conteúdo e centraliza
export const ContentAboutContainer = styled.div`
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
`;
// Bloco do texto sobreposto ao fundo
export const TextAboutContent = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
  border-radius: 8px;
  background-color: rgba(224, 224, 224, 0.9);
  padding: 20px;
  font-family: ${({ theme }) => theme.fonts.body};
`;
// Título do hero
export const HeroAboutTitle = styled.h1`
  text-transform: uppercase;
  font-weight: 400;
`;
// Parágrafo de apoio
export const HeroAboutText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.large};
  @media (min-width: 768px) {
    font-size: 1.3rem;
    color: ${({ theme }) => theme.colors.black};
  }
`;
