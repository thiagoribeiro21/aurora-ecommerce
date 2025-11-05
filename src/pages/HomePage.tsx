// Página Home: compõe as seções principais (Hero, Sobre, Produtos, Depoimentos, Assinatura, Localização).
// Algumas seções entram com animação de entrada via <Reveal /> (com delay crescente) para dar ritmo ao scroll.
import { AboutSection } from '../components/Home/AboutSection/aboutSection';
import { HeroSection } from '../components/Home/HeroSection/heroSection';
import { ProductSection } from '../components/Home/ProductSection/ProductSection';
import { SubscriptionSection } from '../components/Home/SubscriptionSection/SubscriptionSection';
import { Testimonials } from '../components/Testimonials/Testimonials';
import { LocationSection } from '../components/Home/Location/LocationSection';
import { Reveal } from '../components/common/Reveal';

export function HomePage() {
  return (
    <>
      <HeroSection />

      {/* Seções com Reveal: entrada sutil conforme o usuário rola a página */}
      <Reveal delay={20}>
        <AboutSection />
      </Reveal>
      <Reveal delay={40}>
        <ProductSection />
      </Reveal>
      <Reveal delay={60}>
        <Testimonials />
      </Reveal>

      {/* Assinatura sem Reveal para dar destaque imediato ao bloco */}
      <SubscriptionSection />

      <Reveal delay={80}>
        <LocationSection />
      </Reveal>
    </>
  );
}
