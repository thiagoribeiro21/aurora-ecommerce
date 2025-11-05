// Parágrafos com contexto do processo e da proposta da marca.
import { Container, AboutTitle, StyledAboutParagraph } from './styled';

export function AboutParagraph() {
  return (
    <Container>
      <AboutTitle>Do grão à xícara</AboutTitle>
      <StyledAboutParagraph>
        Selecionamos cafés de origem controlada em regiões como Mantiqueira de
        Minas e Caparaó, valorizando altitude, terroir e colheita seletiva. Cada
        lote é provado, perfilado e torrado para realçar doçura e notas
        sensoriais, sem amargor mascarado.
      </StyledAboutParagraph>
      <StyledAboutParagraph>
        Torramos em ciclos semanais, em micro-lotes, para que o café chegue até
        você no auge do frescor. Em cada pacote, você encontra a data de torra e
        o perfil do blend — porque transparência também tem sabor.
      </StyledAboutParagraph>
      <StyledAboutParagraph>
        A Aurora é sobre começos. Sobre respeitar o tempo do grão e o seu tempo
        ao redor da xícara. Sobre construir comunidade com produtores e com quem
        escolhe começar o dia com a gente.
      </StyledAboutParagraph>
    </Container>
  );
}
