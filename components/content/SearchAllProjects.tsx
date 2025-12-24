'use client';

import { useState } from 'react';
import CardProject from './CardProject';
import AnimationContainer from '../utils/AnimationContainer';
import { CardProjectProps } from '@/types';

const allProjectsInfo = [
  {
    id: '1',
    title: "Craftsman's",
    des: 'Specialized platform for BIM Architectural, Precast Detailing, and Rebar Detailing Services.',
    category: 'web development',
    repo: 'https://www.craftsman-sfz.com/',
    link: 'https://www.craftsman-sfz.com/'
  },
  {
    id: '2',
    title: 'NAAB',
    des: "Simple and secure dental platform designed to work at any scale. Every dentist's companion.",
    category: 'web app - saas',
    repo: 'https://naab.app/',
    link: 'https://naab.app/'
  },
  {
    id: '3',
    title: 'RemoteOS',
    des: 'A cross-platform application that gives your server a user interface without having to install anything on your server.',
    category: 'desktop app - cross-platform',
    repo: 'https://remoteos.io/',
    link: 'https://remoteos.io/'
  },
  {
    id: '4',
    title: 'TagerPlus',
    des: 'TagerPlus mobile application - Trading made easier.',
    category: 'mobile app - android',
    repo: 'https://play.google.com/store/apps/details?id=com.tagerplus.com&hl=en-US',
    link: 'https://play.google.com/store/apps/details?id=com.tagerplus.com&hl=en-US'
  },
  {
    id: '5',
    title: 'Project Demo 1',
    des: 'Video demonstration of a project showing core functionalities and user interface.',
    category: 'video demo',
    repo: 'https://github.com/seifalmotaz',
    link: '/project_demo_1.mp4'
  },
  {
    id: '6',
    title: 'Project Demo 2',
    des: 'Video demonstration of a project showing core functionalities and user interface.',
    category: 'video demo',
    repo: 'https://github.com/seifalmotaz',
    link: '/project_demo_2.mp4'
  }
];

const SearchAllProjects = () => {
  const [projectSearch, setProjectSearch] = useState<string>('');

  const resultSearch: CardProjectProps[] = allProjectsInfo.filter((project) =>
    project.category.includes(projectSearch.toLowerCase())
  );

  return (
    <>
      <AnimationContainer customClassName="w-full group flex flex-col justify-center items-center mb-8">
        <div className="w-full flex items-center lg:w-3/6 h-12 rounded shadow-lg bg-black border border-gray-800 group-hover:border-gray-500 transition-all ease">
          <div className="grid place-items-center h-full w-12 text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          <input
            className="peer h-full w-full outline-none rounded text-sm text-white bg-black px-2 group-hover:border-gray-500 transition-all ease"
            type="text"
            id="search"
            placeholder="Languages, frameworks, libraries, etc..."
            onChange={(e) => setProjectSearch(e.target.value)}
          />
        </div>
      </AnimationContainer>

      <article className="w-full flex justify-center items-center content-center flex-wrap gap-6 mx-auto">
        {resultSearch.map(({ id, title, des, category, repo, link }) => (
          <CardProject
            key={id}
            title={title}
            des={des}
            category={category}
            repo={repo}
            link={link}
          />
        ))}
      </article>
    </>
  );
};

export default SearchAllProjects;
