import styled from 'styled-components';

// Estrutura do card do produto
export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  font-family: ${({ theme }) => theme.fonts.body};

  @media (min-width: 768px) {
    flex: 1;
  }
`;
// Envolve a imagem para manter largura total do card
export const ImageContainer = styled.div`
  width: 100%;
`;
// Imagem circular do produto
export const ProductImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  @media (min-width: 768px) {
    width: 150px;
    height: 150px;
  }
`;
// Área de informações (nome e preço)
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
  margin: 0;
`;
// Preço do produto
export const ProductPrice = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: bold;
  margin: 0;
`;
