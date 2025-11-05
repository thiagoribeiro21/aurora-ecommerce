// Seção de Localização na Home.
// Mostra endereço, horário de funcionamento e um mapa do Google embutido.
// Usa id "location" para navegação por âncora (links do header/ancoras).
import {
  SectionWrapper,
  Container,
  LocationContainer,
  TextContainer,
  SectionTitle,
  Address,
  Hours,
  MapContainer,
  ResponsiveMap,
  StyledIframe,
} from './styled';

const mapUrl =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3676.045519397773!2d-42.46452701443447!3d-22.87477682584657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x97678b324219c7%3A0x756f18fe9d5ae00f!2slugar%20nenhum!5e0!3m2!1spt-BR!2sbr!4v1762269758836!5m2!1spt-BR!2sbr';

export function LocationSection() {
  return (
    <SectionWrapper id="location">
      <Container>
        <LocationContainer>
          <TextContainer>
            <SectionTitle>Nossa Localização</SectionTitle>

            <Address>
              <strong>Rua 2, 123 - Centro</strong>
              <br />
              Cidade 2, Estado - CEP 12345-678
              <br />
              País 2
            </Address>
            <Hours>
              <strong>Horário de Funcionamento:</strong>
              <br />
              <br />
              Segunda a Sexta: 8h - 18h
              <br />
              Sábado: 9h - 14h
              <br />
              Domingo: Fechado
            </Hours>
          </TextContainer>

          <MapContainer>
            <ResponsiveMap>
              {/* Iframe do Google Maps: lazy para performance e referrerPolicy para privacidade */}
              <StyledIframe
                src={mapUrl}
                width="600"
                height="450"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização da Aurora Café"
              ></StyledIframe>
            </ResponsiveMap>
          </MapContainer>
        </LocationContainer>
      </Container>
    </SectionWrapper>
  );
}
