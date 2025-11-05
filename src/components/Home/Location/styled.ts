// Estilos da seção de Localização na Home.
// Layout responsivo com duas colunas (texto + mapa) em telas maiores; utiliza tokens do tema.
import styled from 'styled-components';
// Wrapper da seção (reserva espaçamento superior para separar de outras âncoras)
export const SectionWrapper = styled.section`
  padding-top: ${({ theme }) => theme.spacing.extraLarge};
`;
// Container centralizado com largura máxima
export const Container = styled.div`
  padding: ${({ theme }) => theme.spacing.large};
  max-width: 980px;
  margin: auto;
`;
// Grid flexível: coluna no mobile, lado a lado no desktop
export const LocationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.large};
  @media (min-width: 768px) {
    flex-direction: row;
  }
  @media (min-width: 1024px) {
    justify-content: space-between;
    align-items: center;
  }
`;
// Bloco de texto (cores claras e centralizado)
export const TextContainer = styled.div`
  color: ${({ theme }) => theme.colors.lightGray};
  text-align: center;
`;
// Título da seção com borda inferior para destaque
export const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.extraLarge};
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: ${({ theme }) => theme.spacing.extraLarge};

  font-family: ${({ theme }) => theme.fonts.heading};

  border-bottom: 2px solid ${({ theme }) => theme.colors.secondary};
  padding-bottom: ${({ theme }) => theme.spacing.small};
`;

// Endereço (tipografia maior para leitura)
export const Address = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.large};
`;
// Container do mapa (espaço inferior em relação ao conteúdo)
export const MapContainer = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.extraLarge};
`;
// Horários (tipografia maior para leitura)
export const Hours = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.large};
`;

// Wrapper reservado para responsividade adicional do mapa (aspect-ratio, etc., se necessário)
export const ResponsiveMap = styled.div``;
// Iframe do Google Maps com tamanhos por breakpoint e cantos arredondados
export const StyledIframe = styled.iframe`
  width: 350px;
  height: 300px;
  border-radius: 8px;
  @media (min-width: 768px) {
    width: 400px;
    height: 300px;
  }

  @media (min-width: 1024px) {
    width: 550px;
    height: 450px;
  }
`;
