// Hero da página Sobre com imagem de fundo e mensagem principal.
import {
  HeroAboutWrapper,
  ContentAboutContainer,
  TextAboutContent,
  HeroAboutTitle,
  HeroAboutText,
} from './styled';

export function AboutHero() {
  return (
    <HeroAboutWrapper>
      <ContentAboutContainer>
        <TextAboutContent>
          <HeroAboutTitle>
            Onde todo amanhecer tem gosto de Aurora
          </HeroAboutTitle>
          <HeroAboutText>
            Torramos cafés de origem no ponto perfeito para iluminar sua rotina,
            uma xícara de cada vez.
          </HeroAboutText>
        </TextAboutContent>
      </ContentAboutContainer>
    </HeroAboutWrapper>
  );
}
