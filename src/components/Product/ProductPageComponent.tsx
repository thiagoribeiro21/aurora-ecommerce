// Página de Produtos
// Lista os produtos em grid e oferece duas ações: adicionar ao carrinho e comprar agora.
// As ações respeitam o estado de autenticação (exige login) e dão feedback com toast.
import type { Product } from '../../types/product-type';
import { mockProducts } from '../Home/ProductSection/ProductSection';
import { toast } from 'react-hot-toast';
import coffeImg1 from '../../assets/img/products/coffe-image-1.jpg';
import coffeImg2 from '../../assets/img/products/coffe-image-2.jpg';
import coffeImg3 from '../../assets/img/products/coffe-image-3.jpg';

import {
  Container,
  ProductTitle,
  GridContainer,
  ProductCardPage,
  ButtonsRow,
  BuyNowButton,
  AddToCartButton,
} from './styled';
import { ProductCardComponent } from './ProductCardPage';
import { useAuth } from '../../contexts/AuthContext';
import { useCart } from '../../contexts/CartContext';

const mockProducts2: Product[] = [
  ...mockProducts,
  { id: '4', name: 'Capuccino', price: 28.5, imageUrl: coffeImg1 },
  { id: '5', name: 'Expresso Intenso', price: 26.0, imageUrl: coffeImg2 },
  { id: '6', name: 'Mocca', price: 32.0, imageUrl: coffeImg3 },
];
export function ProductPageComponent() {
  const { user } = useAuth();
  const { addItem, openCart } = useCart();
  // Compra direta: apenas simula o fluxo com toast quando logado
  const handleBuyNow = (product: Product) => {
    if (!user) {
      toast.error('Você precisa estar logado para comprar um produto.');
      return;
    }
    toast.success(`Compra do produto ${product.name} realizada com sucesso!`);
  };
  // Adiciona ao carrinho e abre o drawer; exige login
  const handleAddToCart = (product: Product) => {
    if (!user) {
      toast.error(
        'Você precisa estar logado para adicionar produtos ao carrinho.'
      );
      return;
    }
    // Map Product to CartContext AddItemInput
    addItem(
      {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.imageUrl,
      },
      1
    );
    openCart();
    toast.success(`Produto ${product.name} adicionado ao carrinho!`);
  };

  return (
    <Container>
      <ProductTitle>Nossos Produtos</ProductTitle>
      <GridContainer>
        {mockProducts2.map((product) => (
          <ProductCardPage key={product.id}>
            <ProductCardComponent product={product} />
            <ButtonsRow>
              <AddToCartButton to="#" onClick={() => handleAddToCart(product)}>
                Adicionar ao Carrinho
              </AddToCartButton>
              <BuyNowButton to="#" onClick={() => handleBuyNow(product)}>
                Comprar Agora
              </BuyNowButton>
            </ButtonsRow>
          </ProductCardPage>
        ))}
      </GridContainer>
    </Container>
  );
}
