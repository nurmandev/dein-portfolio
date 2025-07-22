import { ProjectsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

export const projectsSection: ProjectsSectionType = {
  title: 'my projects',
  projects: [
    {
      id: getId(),
      name: 'Microservices Migration at Three Space Lab',
      img: '/monolithic-vs-microservices.png', // Use relevant image or placeholder
      year: 2025,
      tags: ['Java', 'Microservices', 'Cloud'],
      url: '',
      repo: '',
    },
    {
      id: getId(),
      name: 'Real-Time Data Pipelines',
      img: '/Real-Time-Data.png',
      year: 2024,
      tags: ['Java', 'Kafka', 'Node.js'],
      url: '',
      repo: '',
    },
    {
      id: getId(),
      name: 'API Optimization & OAuth Security at Greenlight Guru',
      img: '/API-Optimization.png',
      year: 2023,
      tags: ['Java', 'OAuth 2.0', 'REST API'],
      url: '',
      repo: '',
    },
    {
      id: getId(),
      name: 'Backend Optimization for 2M+ Users at BombBomb',
      img: '/Backend-Optimization.png',
      year: 2022,
      tags: ['C++', 'AWS', 'Multithreading'],
      url: '',
      repo: '',
    },
    {
      id: getId(),
      name: 'Web Interface & Analytics for Loan Originator Networks',
      img: '/Loan-Origination-System.jpg',
      year: 2021,
      tags: ['JavaScript', 'HTML/CSS', 'Responsive Design'],
      url: '',
      repo: '',
    },
  ],
};
