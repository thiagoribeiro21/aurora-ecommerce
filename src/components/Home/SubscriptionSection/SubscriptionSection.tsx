// Seção de Assinaturas na Home.
// Lista planos (mock) com benefícios e botão para assinar; exige login para confirmar (toasts informam o estado).
// Usa id "subscription" para navegação por âncora.
import { toast } from 'react-hot-toast';
import { FaCheck } from 'react-icons/fa';
import { useAuth } from '../../../contexts/AuthContext';
import {
  SectionWrapper,
  Container,
  SectionTitle,
  PlansContainer,
  PlanCard,
  PlanHeader,
  PlanTitle,
  PlanPrice,
  PlanBenefits,
  BenefitItem,
  SubscribeButton,
} from './styled';

// Mock de planos: simples para vitrine; integração real pode vir do backend futuramente.
const subscriptionPlans = [
  {
    id: 1,
    name: 'Mensal',
    price: 19.99,
    per: 'mês',
    benefits: [
      'Desconto de 10% em todos os produtos',
      'Frete grátis para pedidos acima de R$100',
      'Acesso antecipado a novos lançamentos',
    ],
  },
  {
    id: 2,
    name: 'Trimestral',
    price: 54.99,
    per: '3 meses',
    benefits: [
      'Desconto de 15% em todos os produtos',
      'Frete grátis para todos os pedidos',
      'Acesso antecipado a novos lançamentos',
    ],
  },
  {
    id: 3,
    name: 'Anual',
    price: 199.99,
    per: '12 meses',
    benefits: [
      'Desconto de 20% em todos os produtos',
      'Frete grátis para todos os pedidos',
      'Acesso antecipado a novos lançamentos',
    ],
  },
];

export function SubscriptionSection() {
  const { user } = useAuth();
  // Valida autenticação antes de "assinar"; comunica via toast
  const handleSubscribe = (planName: string) => {
    if (!user) {
      toast.error('Você precisa estar logado para assinar.');
      return;
    }
    toast.success(`Inscrito no plano ${planName} com sucesso!`);
  };
  return (
    <SectionWrapper id="subscription">
      <Container>
        <SectionTitle>Assine e Economize</SectionTitle>
        <PlansContainer>
          {subscriptionPlans.map((plan) => (
            <PlanCard key={plan.id}>
              <PlanHeader>
                <PlanTitle>{plan.name}</PlanTitle>
                <PlanPrice>
                  R$ {plan.price.toFixed(2)} / {plan.per}
                </PlanPrice>
              </PlanHeader>
              <PlanBenefits>
                {plan.benefits.map((benefit, index) => (
                  <BenefitItem key={index}>
                    <FaCheck />
                    {benefit}
                  </BenefitItem>
                ))}
              </PlanBenefits>
              {/* Ação principal: assinar o plano atual */}
              <SubscribeButton onClick={() => handleSubscribe(plan.name)}>
                Assinar
              </SubscribeButton>
            </PlanCard>
          ))}
        </PlansContainer>
      </Container>
    </SectionWrapper>
  );
}
