// Seção "Sobre Nós" na Home.
// Mostra 3 cards (Qualidade, Localização, Equipe) com ícones e um CTA para a página "Sobre".
// Ícones via react-icons e navegação usando Link estilizado (ver styled.ts).
import { GiCoffeeBeans } from 'react-icons/gi';
import { FaMapMarkerAlt, FaUsers } from 'react-icons/fa';
import {
  Container,
  AboutTitle,
  AboutContainer,
  AboutCard,
  AboutCardIcon,
  AboutCardTitle,
  AboutCardText,
  AboutButton,
} from './styled';

export function AboutSection() {
  return (
    <Container>
      <AboutTitle>Sobre Nós</AboutTitle>
      <AboutContainer>
        <AboutCard>
          <AboutCardIcon>
            <GiCoffeeBeans />
          </AboutCardIcon>
          <AboutCardTitle>Qualidade</AboutCardTitle>
          <AboutCardText>
            Trabalhamos com os melhores grãos de café do mundo.
          </AboutCardText>
        </AboutCard>
        <AboutCard>
          <AboutCardIcon>
            <FaMapMarkerAlt />
          </AboutCardIcon>
          <AboutCardTitle>Localização</AboutCardTitle>
          <AboutCardText>
            Estamos localizados no coração da cidade.
          </AboutCardText>
        </AboutCard>
        <AboutCard>
          <AboutCardIcon>
            <FaUsers />
          </AboutCardIcon>
          <AboutCardTitle>Equipe</AboutCardTitle>
          <AboutCardText>
            Contamos com uma equipe de baristas altamente treinados.
          </AboutCardText>
        </AboutCard>
      </AboutContainer>
      {/* CTA para conhecer mais detalhes na página dedicada */}
      <AboutButton to="/about">Saiba mais</AboutButton>
    </Container>
  );
}
