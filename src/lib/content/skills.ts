import { SkillsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

export const skillsSection: SkillsSectionType = {
  title: 'what i do',
  skills: [
    {
      id: getId(),
      title: 'developer toolkit',
      lottie: {
        light: '/lotties/frontend.json',
        dark: '/lotties/frontend-dark.json',
      },
      points: [
        'Developing scalable full stack applications using Java, React, and Node.js',
        'Designing RESTful APIs and implementing secure authentication using OAuth 2.0',
        'Optimizing backend performance with database tuning and microservices architecture',
        'Deploying cloud-native applications using AWS Lambda, S3, and Docker',
        'Collaborating in CI/CD pipelines and DevOps workflows with Kubernetes',
      ],
      softwareSkills: [
        { name: 'Java', icon: 'devicon:java' },
        { name: 'C++', icon: 'devicon:cplusplus' },
        { name: 'TypeScript', icon: 'vscode-icons:file-type-typescript-official' },
        { name: 'JavaScript', icon: 'logos:javascript' },
        { name: 'React', icon: 'logos:react' },
        { name: 'Node.js', icon: 'logos:nodejs-icon' },
        { name: 'PostgreSQL', icon: 'devicon:postgresql' },
        { name: 'MongoDB', icon: 'devicon:mongodb' },
        { name: 'Redis', icon: 'skill-icons:redis-dark' },
        { name: 'AWS', icon: 'logos:aws' },
        { name: 'Docker', icon: 'logos:docker-icon' },
        { name: 'Kubernetes', icon: 'logos:kubernetes' },
        { name: 'Git', icon: 'logos:git-icon' },
        { name: 'GitHub', icon: 'akar-icons:github-fill' },
      ],
    },
  ],
};
