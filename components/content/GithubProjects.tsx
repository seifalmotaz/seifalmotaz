'use client';

import { Timeline, TimelineEvent } from './TimeLineExp';
import { CardProjectProps } from '@/types';

const openSourceProjects: CardProjectProps[] = [
  {
    id: '1',
    title: 'pocketbase_plus',
    des: 'Pocketbase Plus is a Dart package that automates model generation for your PocketBase projects.',
    category: 'Dart',
    repo: 'https://github.com/seifalmotaz/pocketbase_plus',
    link: 'https://github.com/seifalmotaz/pocketbase_plus'
  },
  {
    id: '2',
    title: 'robyn_rate_limits_plus',
    des: 'Rate limits extension for the Robyn framework, offering enhanced control and flexibility.',
    category: 'Python',
    repo: 'https://github.com/seifalmotaz/robyn_rate_limits_plus',
    link: 'https://github.com/seifalmotaz/robyn_rate_limits_plus'
  },
  {
    id: '3',
    title: 'PetType-AI',
    des: 'Image classification of pet types using a convolutional neural network with PyTorch.',
    category: 'Python',
    repo: 'https://github.com/seifalmotaz/PetType-AI',
    link: 'https://github.com/seifalmotaz/PetType-AI'
  },
  {
    id: '4',
    title: 'routly',
    des: 'Elevating skills through dynamic data structures, using binary trees for precise URL path matching.',
    category: 'Dart',
    repo: 'https://github.com/seifalmotaz/routly',
    link: 'https://github.com/seifalmotaz/routly'
  },
  {
    id: '5',
    title: 'llm_txt_prompts',
    des: 'A collection of useful text prompts for Large Language Models.',
    category: 'Prompts',
    repo: 'https://github.com/seifalmotaz/llm_txt_prompts',
    link: 'https://github.com/seifalmotaz/llm_txt_prompts'
  },
  {
    id: '6',
    title: 'gemini-cli-prompt-library',
    des: 'A library of prompts optimized for use with the Gemini CLI.',
    category: 'CLI',
    repo: 'https://github.com/seifalmotaz/gemini-cli-prompt-library',
    link: 'https://github.com/seifalmotaz/gemini-cli-prompt-library'
  }
];

const GithubProjects = () => {
  return (
    <Timeline title="Open Source & GitHub">
      {openSourceProjects.map((project, index) => (
        <TimelineEvent
          key={project.id}
          active={false}
          last={index === openSourceProjects.length - 1}
        >
          <TimelineEvent.Title>
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white hover:underline transition-all ease"
            >
              {project.title}
            </a>{' '}
            | {project.category}
          </TimelineEvent.Title>

          <TimelineEvent.Description>{project.des}</TimelineEvent.Description>
        </TimelineEvent>
      ))}
    </Timeline>
  );
};

export default GithubProjects;
