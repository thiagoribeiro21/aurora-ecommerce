// Depoimentos
// Lista simples de cards estáticos com estrelas, citação e autor.
// A seção tem id="testimonials" para navegação via âncora no Header.
import { FaStar } from 'react-icons/fa';
import {
  SectionTitle,
  SectionWrapper,
  Container,
  TestimonialCard,
  StarRating,
  CardQuote,
  CardAuthor,
  TestimonialsContainer,
} from './styled';

const testimonialsData = [
  {
    id: 1,
    stars: 5,
    quote:
      'Eu achava que entendia de café, até provar o Blend Aurora. É outro nível. O cheiro quando abre o pacote já diz tudo. Sabor equilibrado, sem amargor. Virei cliente fiel.',
    author: 'Lucas M.',
  },
  {
    id: 2,
    stars: 5,
    quote:
      'Minha manhã simplesmente não começa antes do meu café da Aurora. É o meu ritual de 10 minutos de paz antes do dia começar. Recomendo muito!',
    author: 'Mariana R.',
  },
  {
    id: 3,
    stars: 5,
    quote:
      'O café chegou em 2 dias, com a data da torra da *mesma semana*. A diferença de frescor para o café de supermercado é absurda. Impossível voltar atrás.',
    author: 'Rafael T.',
  },
];

// Helper para desenhar a quantidade de estrelas
const renderStars = (count: number) => {
  return Array(count)
    .fill(0)
    .map((_, index) => <FaStar key={index} />);
};

export function Testimonials() {
  return (
    <SectionWrapper id="testimonials">
      <Container>
        <SectionTitle>O que nossos clientes dizem</SectionTitle>

        <TestimonialsContainer>
          {testimonialsData.map((testimonial) => (
            <TestimonialCard key={testimonial.id}>
              <StarRating>{renderStars(testimonial.stars)}</StarRating>
              <CardQuote>“{testimonial.quote}”</CardQuote>
              <CardAuthor>— {testimonial.author}</CardAuthor>
            </TestimonialCard>
          ))}
        </TestimonialsContainer>
      </Container>
    </SectionWrapper>
  );
}
