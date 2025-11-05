// Bloco com imagem + texto que conta um pouco da história da marca.
import imgAboutCoffee from '../../../assets/img/farmer-about.jpg';
import {
  Container,
  ContainerImg,
  ImgAboutContent,
  ContentText,
  TitleAboutContent,
  TextAboutContent,
} from './styled';

export function AboutContent() {
  return (
    <Container>
      <ContainerImg>
        <ImgAboutContent
          src={imgAboutCoffee}
          alt="Imagem de fazendeiro de café"
        />
      </ContainerImg>
      <ContentText>
        <TitleAboutContent>Nossa história</TitleAboutContent>
        <TextAboutContent>
          A Aurora nasceu de um ritual simples: levantar cedo, moer na hora e
          prestar atenção no primeiro gole. Entre cadernos de notas e torras de
          teste, entendemos que café bom não é acaso — é cuidado, tempo e
          curiosidade.
          <br />
          Começamos em pequenos lotes, buscando produtores que compartilham a
          mesma inquietação que a nossa: cada safra traz um potencial único. Daí
          vieram os nossos primeiros blends, criados para destacar doçura
          natural, corpo aveludado e um final limpo — o tipo de xícara que pede
          um “mais um”.
        </TextAboutContent>
      </ContentText>
    </Container>
  );
}
