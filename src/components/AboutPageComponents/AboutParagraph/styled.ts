import styled from 'styled-components';

// Bloco da seção de parágrafos (centralizado)
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.small};
  padding: ${({ theme }) => theme.spacing.extraLarge};
  padding-top: 0;
  max-width: 980px;
  margin: auto;
  padding-bottom: ${({ theme }) => theme.spacing.sectionSpacing};
`;
// Parágrafo com largura de leitura confortável
export const StyledAboutParagraph = styled.p`
  color: ${({ theme }) => theme.colors.lightGray};
  font-size: 1.2rem;
  margin-bottom: 0;
  max-width: 50ch;
  letter-spacing: 0.02em;

  @media (min-width: 768px) {
    max-width: 60ch;
    font-size: 1.3rem;
  }
  @media (min-width: 1024px) {
    max-width: 60ch;
    font-size: 1.3rem;
  }
`;
// Título da seção
export const AboutTitle = styled.h2`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.fontSizes.extraLarge};
  text-align: center;
`;
