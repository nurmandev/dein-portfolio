import { HeroSectionType } from '@/lib/types/sections';
import { resumeFileName } from '@/lib/utils/config';

export const heroSection: HeroSectionType = {
  subtitle: 'Hello, I am',
  title: 'Evan Marcucci-Zentgraf',
  tagline: 'Software Engineer',
  description:
    'I’m a dedicated software engineer based in Seattle, WA. I specialize in full-stack development, cloud infrastructure, and automation. I enjoy building robust solutions and collaborating on innovative projects.',
  specialText: 'Open to software engineering roles & collaborations.',
  cta: {
    title: 'See My Resume',
    url: '/Evan-Marcucci.pdf',
    hideInDesktop: true,
  },
};
