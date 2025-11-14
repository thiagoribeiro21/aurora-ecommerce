// Seção de Produtos da Home (vitrine rápida).
// Exibe 3 produtos (mock) e um CTA para a página completa de produtos.
// Mantém a lista simples para performance na Home; detalhes ficam na rota /products.
import imgProduct_1 from '../../../assets/img/products/product-photo-1.webp';
import imgProduct_2 from '../../../assets/img/products/product-photo-2.webp';
import imgProduct_3 from '../../../assets/img/products/product-photo-3.webp';
import type { Product } from '../../../types/product-type';
import {
  Container,
  ProductsContainer,
  SectionTitle,
  SectionWrapper,
  ShopButton,
} from './styled';
import { ProductCard } from './ProductCard';

export const mockProducts: Product[] = [
  { id: '1', name: 'Blend Aurora', price: 28.5, imageUrl: imgProduct_1 },
  { id: '2', name: 'Expresso Intenso', price: 26.0, imageUrl: imgProduct_2 },
  { id: '3', name: 'Grão Suave', price: 32.0, imageUrl: imgProduct_3 },
];

export function ProductSection() {
  return (
    <SectionWrapper>
      <Container>
        <SectionTitle>Produtos Mais Vendidos</SectionTitle>
        <ProductsContainer>
          {mockProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ProductsContainer>
        {/* CTA para ver todos os produtos na página dedicada */}
        <ShopButton to="/products">Todos os Produtos</ShopButton>
      </Container>
    </SectionWrapper>
  );
}
