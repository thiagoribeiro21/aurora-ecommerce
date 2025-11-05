// Card de produto usado na página de listagem.
// Mostra imagem, nome e preço no layout compacto.
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

export const ProductCardComponent: React.FC<ProductCardProps> = ({
  product,
}) => {
  return (
    <CardContainer>
      <ImageContainer>
        <ProductImage src={product.imageUrl} alt={product.name} />
      </ImageContainer>
      <InfoContainer>
        <ProductName>{product.name}</ProductName>
        <ProductPrice>${product.price.toFixed(2)}</ProductPrice>
      </InfoContainer>
    </CardContainer>
  );
};
