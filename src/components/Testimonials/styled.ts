import styled from 'styled-components';
// Espaçamento inferior para separar a seção do próximo bloco
export const SectionWrapper = styled.div`
  padding-bottom: ${({ theme }) => theme.spacing.sectionSpacing};
`;
// Centraliza conteúdo e controla padding lateral
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.large};
`;
// Título da seção de depoimentos
export const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: ${({ theme }) => theme.spacing.extraLarge};
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.heading};
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: 300;

  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes.extraLarge};
  }
`;
// Grid flexível: empilha no mobile, lado a lado no desktop
export const TestimonialsContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 980px;
  margin: auto;
  gap: ${({ theme }) => theme.spacing.large};
  border-radius: 12px;

  @media (min-width: 1024px) {
    flex-direction: row;

    gap: ${({ theme }) => theme.spacing.extraLarge};
  }
`;

// Card do depoimento: estrela(s), citação e autor
export const TestimonialCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.secondary};
  gap: ${({ theme }) => theme.spacing.large};
  border-radius: 12px;
  padding: 3rem;
  width: 50%;
  padding-bottom: 3rem;
  text-align: center;
  @media (min-width: 1024px) {
    padding: 2rem;
    flex: 1;
    width: auto;
    height: auto;
  }
`;
// Área das estrelas (usa a cor primária)
export const StarRating = styled.div`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
  @media (min-width: 768px) {
    font-size: 2rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.5rem;
  }
`;
// Texto da citação
export const CardQuote = styled.p`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.text};

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.25rem;
  }
`;
// Assinatura do autor
export const CardAuthor = styled.p`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.gray};

  @media (min-width: 768px) {
    font-size: 1.25rem;
  }

  @media (min-width: 1024px) {
    font-size: 1rem;
  }
`;
