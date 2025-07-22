/*
 * =========================
 * AUTHOR INFO - Evan Marcucci Zentgraf
 * =========================
 */

import { StringKeyValueType } from '../types';

export const socialLinks: StringKeyValueType = {
  linkedin: 'https://www.linkedin.com/in/evanmarcucci', // Update if there's an exact link
  github: '', // Fill if GitHub profile is known
  instagram: '', // Optional
};

export const author = {
  name: 'Evan Marcucci Zentgraf',
  email: 'evanmarcuccizentgraf@gmail.com',
};

export const seoData = {
  title: 'Evan Marcucci Zentgraf | Senior Java Full Stack Developer',
  description:
    'Evan Marcucci Zentgraf is a skilled Full Stack Engineer with expertise in scalable web applications, Java, React, Node.js, and cloud-native systems. Passionate about optimizing performance and reducing technical debt.',
  author: author.name,
  image: '/evan-marcucci.png', // Replace with your image if available
  url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  keywords: [
    'Evan Marcucci',
    'Full Stack Developer',
    'Java Developer',
    'React',
    'Node.js',
    'Portfolio',
    'Software Engineer',
  ],
};
