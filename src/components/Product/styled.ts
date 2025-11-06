import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Container centralizado para a listagem de produtos
export const Container = styled.div`
  max-width: 300px;

  margin: auto;

  @media (min-width: 768px) {
    max-width: 700px;
  }

  @media (min-width: 1024px) {
    max-width: 980px;
  }
`;
// Título da página
export const ProductTitle = styled.h2`
  color: ${({ theme }) => theme.colors.secondary};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.large};
  font-size: 2.2rem;
  font-weight: 400;
`;
// Grid responsivo com cards de produto
export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.large};
`;
// Wrapper do card de produto na página (contém o card e as ações)
export const ProductCardPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.medium};
  background-color: ${({ theme }) => theme.colors.secondary};
  width: 300px;
  border-radius: 12px;
  padding: ${({ theme }) => theme.spacing.small};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
`;
// Botão de comprar agora (cta principal)
export const BuyNowButton = styled(Link)`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.secondary};
  padding: ${({ theme }) => theme.spacing.small};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  border-radius: 8px;
  transition: opacity 0.3s ease;
  flex-grow: 1;
  &:hover {
    opacity: 0.5;
    transition: opacity 0.3s ease;
  }
`;
// Botão de adicionar ao carrinho
export const AddToCartButton = styled(Link)`
  background-color: ${({ theme }) => theme.colors.lightGray};
  color: ${({ theme }) => theme.colors.black};
  padding: ${({ theme }) => theme.spacing.small};
  text-align: center;
  width: 50%;
  flex-grow: 1;
  border-radius: 8px;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: ${({ theme }) => theme.colors.gray};
    transition: background-color 0.3s ease;
  }
`;
// Linha que organiza os botões lado a lado
export const ButtonsRow = styled.div`
  display: flex;

  gap: ${({ theme }) => theme.spacing.small};
  justify-content: center;
`;
