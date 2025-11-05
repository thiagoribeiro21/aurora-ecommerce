// Card compacto de produto para a Home.
// Clica e navega para a listagem completa em /products; exibe imagem, nome e preço formatado.
import React from 'react';
import type { Product } from '../../../types/product-type';
import {
  CardContainer,
  ImageContainer,
  ProductImage,
  InfoContainer,
  ProductName,
  ProductPrice,
} from './styled';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <CardContainer to={`/products`}>
      <ImageContainer>
        {/* Alt descritivo para acessibilidade */}
        <ProductImage src={product.imageUrl} alt={product.name} />
      </ImageContainer>
      <InfoContainer>
        <ProductName>{product.name}</ProductName>
        {/* Preço com 2 casas decimais */}
        <ProductPrice>${product.price.toFixed(2)}</ProductPrice>
      </InfoContainer>
    </CardContainer>
  );
};
