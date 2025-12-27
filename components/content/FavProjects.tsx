'use client';

import { Timeline, TimelineEvent } from './TimeLineExp';

const favProjects = [
  {
    title: "Craftsman's",
    des: 'Specialized platform for BIM Architectural, Precast Detailing, and Rebar Detailing Services.',
    category: 'Web Development - BIM',
    repo: 'https://www.craftsman-sfz.com/',
    link: 'https://www.craftsman-sfz.com/'
  },
  {
    title: 'NAAB',
    des: "Simple and secure dental platform designed to work at any scale. Every dentist's companion.",
    category: 'Web App - SaaS',
    repo: 'https://naab.app/',
    link: 'https://naab.app/'
  },
  {
    title: 'RemoteOS',
    des: 'A cross-platform application that gives your server a user interface without having to install anything on your server.',
    category: 'Desktop App - Cross-platform',
    repo: 'https://remoteos.io/',
    link: 'https://remoteos.io/'
  },
  {
    title: 'TagerPlus',
    des: 'TagerPlus mobile application - Trading made easier.',
    category: 'Mobile App - Android',
    repo: 'https://play.google.com/store/apps/details?id=com.tagerplus.com&hl=en-US',
    link: 'https://play.google.com/store/apps/details?id=com.tagerplus.com&hl=en-US'
  },
  {
    title: 'Not Helpful AI',
    des: 'The AI that refuses to help you succeed. Prepare for brutal honesty and deliberate unhelpfulness.',
    category: 'Web App - AI',
    repo: 'https://ai.tagerplus.com/',
    link: 'https://ai.tagerplus.com/'
  },
  {
    title: 'Beeko3d',
    des: 'Your One-Stop Solution for Logistics, Delivery, Fulfillment, Printing, and Marketing.',
    category: 'Web Development',
    repo: 'https://beekoo3d.web.app',
    link: 'https://beekoo3d.web.app'
  }
];

const FavProjects = () => {
  return (
    <Timeline title="Public Projects">
      {favProjects.map((project, index) => (
        <TimelineEvent
          key={project.title}
          active
          last={index === favProjects.length - 1}
        >
          <TimelineEvent.Title>
            <a
              href={project.link}
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

export default FavProjects;
