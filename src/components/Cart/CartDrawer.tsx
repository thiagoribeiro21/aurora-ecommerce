// CartDrawer: painel lateral do carrinho
// - Overlay para fechar ao clicar fora
// - Lista itens com thumb, qty +/- e remoção
// - Mostra subtotal formatado em BRL e botão de finalizar
// - Checkout exige usuário logado e carrinho não vazio (toasts informam o usuário)
import { useCart } from '../../contexts/CartContext';
import { useAuth } from '../../contexts/AuthContext';
import { toast } from 'react-hot-toast';
import {
  Overlay,
  Panel,
  Header,
  Items,
  ItemRow,
  Thumb,
  Name,
  Price,
  QtyControls,
  Footer,
  Row,
  Button,
  IconButton,
  CloseButton,
} from './styled';

export function CartDrawer() {
  const {
    isOpen,
    closeCart,
    items,
    subtotal,
    removeItem,
    setItemQty,
    clearCart,
  } = useCart();
  const { user } = useAuth();
  if (!isOpen) return null;

  const format = (v: number) =>
    v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  // Fluxo simplificado de checkout :
  // valida login e carrinho, exibe toast de sucesso e limpa
  const handleCheckout = () => {
    if (!user) {
      toast.error('Faça login para finalizar sua compra.');
      return;
    }
    if (items.length === 0) {
      toast.error('Seu carrinho está vazio.');
      return;
    }
    toast.success('Compra realizada com sucesso!');
    clearCart();
    closeCart();
  };

  return (
    <>
      <Overlay onClick={closeCart} />
      <Panel role="dialog" aria-label="Carrinho" aria-modal="true">
        <Header>
          <strong>Seu carrinho</strong>
          <CloseButton onClick={closeCart}>Fechar</CloseButton>
        </Header>
        <Items>
          {items.length === 0 ? (
            <p>Seu carrinho está vazio.</p>
          ) : (
            items.map((it) => (
              <ItemRow key={it.id}>
                {it.image ? (
                  <Thumb src={it.image} alt={it.name} />
                ) : (
                  <div
                    style={{
                      width: 64,
                      height: 64,
                      background: '#ddd',
                      borderRadius: 6,
                    }}
                  />
                )}
                <div>
                  <Name>{it.name}</Name>
                  <div
                    style={{ display: 'flex', alignItems: 'center', gap: 8 }}
                  >
                    <QtyControls>
                      <IconButton onClick={() => setItemQty(it.id, it.qty - 1)}>
                        -
                      </IconButton>
                      <span>{it.qty}</span>
                      <IconButton onClick={() => setItemQty(it.id, it.qty + 1)}>
                        +
                      </IconButton>
                    </QtyControls>
                    <IconButton onClick={() => removeItem(it.id)}>
                      Remover
                    </IconButton>
                  </div>
                </div>
                <Price>{format(it.price * it.qty)}</Price>
              </ItemRow>
            ))
          )}
        </Items>
        <Footer>
          <Row>
            <span>Subtotal</span>
            <strong>{format(subtotal)}</strong>
          </Row>
          <Button onClick={handleCheckout}>Finalizar compra</Button>
        </Footer>
      </Panel>
    </>
  );
}
