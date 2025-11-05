// Hero da Home: destaque com imagem de fundo, frase principal e CTA para produtos.
// O background e o parallax simples são definidos no styled.ts; aqui só compomos o conteúdo.
import { Link } from 'react-router-dom';
import {
  ButtonContainer,
  ContentContainer,
  HeroSpan,
  HeroText,
  HeroWrapper,
  TextContent,
} from './styled';

export function HeroSection() {
  return (
    <HeroWrapper>
      <ContentContainer>
        <TextContent>
          <HeroText>Cada grão conta uma história.</HeroText>
          <HeroSpan>#CaféDeVerdade</HeroSpan>
        </TextContent>
        <ButtonContainer>
          {/* CTA principal leva para a listagem de produtos */}
          <Link to="/products">NOSSOS PRODUTOS</Link>
        </ButtonContainer>
      </ContentContainer>
    </HeroWrapper>
  );
}
