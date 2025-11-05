// Estilos do mini-carrinho (drawer lateral)
import styled from 'styled-components';

// Sombreamento atrás do painel
export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 999;
`;

// Painel fixo à direita com coluna flex
export const Panel = styled.aside`
  position: fixed;
  top: 0;
  right: 0;
  height: 100dvh;
  width: min(420px, 100%);
  background: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.black};
  box-shadow: -4px 0 16px rgba(0, 0, 0, 0.25);
  z-index: 1000;
  display: flex;
  flex-direction: column;
`;

// Cabeçalho: título + botão fechar
export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
`;

// Área rolável dos itens
export const Items = styled.div`
  flex: 1;
  overflow: auto;
  padding: 0.5rem 1rem;
`;

// Linha de item com grade: thumb | infos | preço
export const ItemRow = styled.div`
  display: grid;
  grid-template-columns: 64px 1fr auto;
  gap: 0.75rem;
  align-items: center;
  padding: 0.5rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
`;

// Miniatura do produto
export const Thumb = styled.img`
  width: 64px;
  height: 64px;
  object-fit: cover;
  border-radius: 6px;
`;

// Nome do produto
export const Name = styled.div`
  font-weight: 600;
`;

// Preço (linha)
export const Price = styled.div`
  font-weight: 600;
`;

// Controles de quantidade (+/-)
export const QtyControls = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

// Rodapé com subtotal e CTA
export const Footer = styled.div`
  padding: 1rem;
  border-top: 1px solid ${({ theme }) => theme.colors.gray};
`;

// Linha flex espaçada
export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.75rem;
`;

// Botão principal (finalizar)
export const Button = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.secondary};
  border-radius: 6px;
  padding: 0.75rem 1rem;
`;

// Botões compactos (remover, +/-)
export const IconButton = styled.button`
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.gray};
`;

// Botão textual para fechar
export const CloseButton = styled.button`
  background: none;
`;

// Selo numérico (usado no ícone do header)
export const Badge = styled.span`
  position: absolute;
  top: -6px;
  right: -10px;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.secondary};
  border-radius: 999px;
  font-size: 0.75rem;
  line-height: 1;
  padding: 2px 6px;
`;
