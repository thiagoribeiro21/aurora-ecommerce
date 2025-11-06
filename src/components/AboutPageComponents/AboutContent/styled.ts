import styled from 'styled-components';
// Layout responsivo com gap e centralização
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.small};
  padding: ${({ theme }) => theme.spacing.large};
  padding-bottom: 0;
  max-width: 980px;
  margin: auto;
  padding-top: ${({ theme }) => theme.spacing.sectionSpacing};

  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.extraLarge};
  }
`;
export const ContainerImg = styled.div``;
// Imagem do conteúdo (café na fazenda)
export const ImgAboutContent = styled.img`
  width: 360px;
  height: auto;
  border-radius: 8px;

  @media (min-width: 1024px) {
    width: 500px;
  }
`;
// Coluna de texto ao lado da imagem
export const ContentText = styled.div`
  color: ${({ theme }) => theme.colors.lightGray};
  padding: ${({ theme }) => theme.spacing.medium};
`;
// Título da subseção
export const TitleAboutContent = styled.h2`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.fontSizes.extraLarge};
  text-align: center;
`;
// Parágrafo com largura de linha confortável
export const TextAboutContent = styled.p`
  border-bottom: 2px solid ${({ theme }) => theme.colors.secondary};
  padding-bottom: ${({ theme }) => theme.spacing.extraLarge};
  letter-spacing: 0.02em;
  max-width: 50ch;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 1.2rem;
  @media (min-width: 768px) {
    font-size: 1.3rem;
    max-width: 60ch;
    border-bottom: none;
  }
`;
