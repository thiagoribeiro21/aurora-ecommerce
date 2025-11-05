// Estilos da seção de Produtos na Home (vitrine de destaques).
// Inclui título, grid responsivo de cards e CTA para a página /products.
import { Link } from 'react-router-dom';
import styled from 'styled-components';
// Container interno com fundo destacado
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;

  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 16px;
`;
// Wrapper da seção (centraliza e controla espaçamentos externos)
export const SectionWrapper = styled.section`
  margin: 2rem 0;
  padding: 2rem;
  max-width: 980px;
  margin: auto;
  padding-top: 4rem;
  padding-bottom: ${({ theme }) => theme.spacing.sectionSpacing};
`;
// Título da seção
export const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.extraLarge};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.extraLarge};
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.heading};
  font-weight: 300;
  text-transform: uppercase;
`;
// Grid de cards: coluna no mobile, linha no desktop
export const ProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.large};

  @media (min-width: 768px) {
    flex-direction: row;

    justify-content: space-between;
  }
`;
// Botão/Link para a página de produtos completa (CTA)
export const ShopButton = styled(Link)`
  padding: ${({ theme }) => theme.spacing.medium};
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.secondary};
  border-radius: 8px;
  font-size: ${({ theme }) => theme.fontSizes.medium};
  display: inline-block;
  margin: 2rem auto 0 auto;
  transition: opacity 0.3s ease;
  font-weight: bold;
  text-transform: uppercase;

  &:hover {
    opacity: 0.5;
    transition: opacity 0.3s ease;
  }
`;
// Link/card clicável do produto
export const CardContainer = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  aspect-ratio: 1 / 1;

  font-family: ${({ theme }) => theme.fonts.body};

  @media (min-width: 768px) {
    flex: 1;
  }
`;
// Wrapper da imagem (reservado para ajustes futuros)
export const ImageContainer = styled.div``;
// Imagem responsiva com recorte e bordas arredondadas
export const ProductImage = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 16px;
  object-fit: cover;
  @media (min-width: 768px) {
    width: 200px;
    height: 200px;
  }

  @media (min-width: 1024px) {
    width: 250px;
    height: 250px;
  }
`;
// Bloco de informações (nome e preço)
export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.large};
`;
// Nome do produto
export const ProductName = styled.h3`
  color: ${({ theme }) => theme.colors.primary};
  margin: 1rem 0 0.5rem;
`;
// Preço do produto
export const ProductPrice = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: bold;
  margin: 0.5rem 0;
`;
