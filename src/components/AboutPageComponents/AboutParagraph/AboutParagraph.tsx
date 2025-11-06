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
      <StyledAboutParagraph>
        <strong>Compromisso com a qualidade:</strong> Acreditamos que um bom
        café começa com a escolha dos melhores grãos. Por isso, trabalhamos
        diretamente com produtores que compartilham nossa paixão pela qualidade
        e sustentabilidade.
      </StyledAboutParagraph>
      <StyledAboutParagraph>
        <strong>Sustentabilidade:</strong> Estamos comprometidos em minimizar
        nosso impacto ambiental. Utilizamos embalagens recicláveis e apoiamos
        práticas agrícolas sustentáveis que beneficiam tanto o meio ambiente
        quanto as comunidades locais.
      </StyledAboutParagraph>
      <StyledAboutParagraph>
        <strong>Experiência do cliente:</strong> Nossa missão é proporcionar uma
        experiência excepcional, desde a navegação em nosso site até o momento
        em que você saboreia seu café. Estamos sempre disponíveis para ajudar e
        ouvir o feedback dos nossos clientes.
      </StyledAboutParagraph>
    </Container>
  );
}
