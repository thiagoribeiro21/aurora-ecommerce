// Estilos da seção "Sobre Nós" na Home.
// Layout responsivo com cards em coluna no mobile e em linha no desktop; utiliza tokens do tema.
import { Link } from 'react-router-dom';
import styled from 'styled-components';
// Wrapper da seção (centraliza e controla espaçamentos verticais)
export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.large};
  max-width: 980px;
  margin: auto;
  padding-top: ${({ theme }) => theme.spacing.extraLarge};
  padding-bottom: ${({ theme }) => theme.spacing.sectionSpacing};
`;

// Agrupador dos cards (fundo destacado, bordas arredondadas e sombra)
export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;

  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);

  & > *:not(:last-child) p {
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
  }
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;

    & > *:not(:last-child) p {
      border-bottom: none;
    }
  }
`;

// Card individual (alinhado ao centro; divide por borda no desktop)
export const AboutCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: ${({ theme }) => theme.spacing.medium};
  width: 80%;
  margin: 0 auto;
  @media (min-width: 768px) {
    padding: ${({ theme }) => theme.spacing.large};
    &:not(:first-child) {
      border-left: 1px solid ${({ theme }) => theme.colors.gray};
    }
  }
  @media (min-width: 1024px) {
    padding: ${({ theme }) => theme.spacing.superLarge};
  }
`;

// Ícone do card (tamanho maior para destaque visual)
export const AboutCardIcon = styled.div`
  font-size: 2rem;
  margin: 0;
`;

// Título do card
export const AboutCardTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.largeMedium};
  margin-top: 0.5rem;
`;
// Texto do card (com espaçamento inferior apenas no mobile)
export const AboutCardText = styled.p`
  padding-bottom: ${({ theme }) => theme.spacing.large};
  margin: 0;
  font-size: ${({ theme }) => theme.fontSizes.mediumLarge};
  @media (min-width: 768px) {
    padding-bottom: 0;
  }
`;

// Título da seção
export const AboutTitle = styled.h2`
  color: ${({ theme }) => theme.colors.white};
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.fonts.heading};
  margin-bottom: ${({ theme }) => theme.spacing.extraLarge};
  font-weight: 300;
  font-size: ${({ theme }) => theme.fontSizes.extraLarge};
`;

// Botão/Link para a página "Sobre" (CTA)
export const AboutButton = styled(Link)`
  margin-top: ${({ theme }) => theme.spacing.large};
  padding: ${({ theme }) => theme.spacing.medium};
  background-color: ${({ theme }) => theme.colors.lightGray};
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  border-radius: 4px;
  transition: opacity 0.3s ease;
  font-weight: bold;
  text-transform: uppercase;
  &:hover {
    opacity: 0.5;
    transition: opacity 0.3s ease;
  }
`;
