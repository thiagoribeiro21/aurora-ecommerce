// Estilos da seção de Assinaturas na Home.
// Fundo com imagem (efeito parallax simples em desktop) e cards com planos e benefícios.
import styled from 'styled-components';

import heroSubscription from '../../../assets/img/hero-subscription.jpg';
// Wrapper com imagem de fundo e parallax em telas grandes
export const SectionWrapper = styled.section`
  background-image: url(${heroSubscription});
  background-size: cover;
  background-position: center;
  padding: 4rem 0;

  @media (min-width: 1024px) {
    background-attachment: fixed;
    will-change: background-position;
    min-height: 50vh;
    background-position: center 20%;
  }
`;
// Container centralizado com largura máxima
export const Container = styled.div`
  max-width: 980px;
  margin: auto;
`;
// Título da seção (com borda inferior no desktop)
export const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.extraSuperLarge};
  color: ${({ theme }) => theme.colors.secondary};
  padding: 0 0.5rem;
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.extraLarge};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-weight: 300;

  padding-bottom: ${({ theme }) => theme.spacing.medium};
  @media (min-width: 1024px) {
    border-bottom: 2px solid ${({ theme }) => theme.colors.secondary};
  }
`;
// Layout dos cards de planos (coluna → linha), com destaque no primeiro card
export const PlansContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.large};
  align-items: center;
  padding: 0 ${({ theme }) => theme.spacing.large};

  & > *:first-child {
    border: 4px solid ${({ theme }) => theme.colors.secondary};
    border-radius: 14px;
  }
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    gap: ${({ theme }) => theme.spacing.extraLarge};
  }
`;
// Card de plano (fundo escuro translúcido, borda e raio)
export const PlanCard = styled.div`
  background-color: rgba(0, 0, 0, 0.85);
  padding: ${({ theme }) => theme.spacing.large};
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.heading};
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  @media (min-width: 768px) {
    flex: 1;
  }
`;
// Cabeçalho do card (título e preço)
export const PlanHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.large};
`;
// Título do plano
export const PlanTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.large};

  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.small};
`;
// Preço do plano
export const PlanPrice = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.large};
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.small};
`;
// Lista de benefícios
export const PlanBenefits = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: ${({ theme }) => theme.spacing.large};
`;
// Item de benefício com ícone e texto
export const BenefitItem = styled.li`
  display: flex;
  gap: ${({ theme }) => theme.spacing.small};

  margin-bottom: ${({ theme }) => theme.spacing.medium};
  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes.mediumLarge};
  }
`;
// Botão de assinatura (contraste alto, hover reduz opacidade)
export const SubscribeButton = styled.button`
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  padding: ${({ theme }) => theme.spacing.medium};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: opacity 0.3s ease;
  &:hover {
    opacity: 0.5;
    transition: opacity 0.3s ease;
  }
`;
