// Página Sobre: composição das seções (hero, conteúdo com imagem e parágrafos).
import { AboutContent } from './AboutContent/AboutContent';
import { AboutHero } from './AboutHero/AboutHero';
import { AboutParagraph } from './AboutParagraph/AboutParagraph';

export function AboutPageComponent() {
  return (
    <>
      <AboutHero />
      <AboutContent />
      <AboutParagraph />
    </>
  );
}
