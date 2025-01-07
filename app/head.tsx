'use client';

import { usePathname } from 'next/navigation';

const Head = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const pathname = usePathname() as string;

  const titleFixedToShow =
    pathname.slice(1).charAt(0).toUpperCase() + pathname.slice(2);

  const meta = {
    title: `Seif Almotaz ${pathname === '/' ? '' : '· ' + titleFixedToShow}`,
    description: `Hi, I am Seif Almotaz, Experienced Software Developer specializing in Flutter, Python, NodeJS, and Golang. Skilled in building scalable cross-platform applications with clean architecture and robust backend systems.`,
    keywords:
      'سيف المعتزبالله, Seif Almoataz, Seif Almotaz Bellah Mohamed, Software Developer, Flutter Development, Backend Development, Cross-Platform Applications, Python Developer, NodeJS Developer, Golang Developer, Mobile App Development, Scalable Solutions, Clean Architecture, Full-Stack Development, Application Optimization, Robust Backend Systems, Performance Enhancement, Agile Development, User-Centric Design, Problem-Solving Skills.',
    type: 'website'
  };

  return (
    <>
      <title>{meta.title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="follow, index" />
      <meta content={meta.description} name="description" />
      <meta name="keywords" content={meta.keywords} />
      {/* <meta
        property="og:url"
        content={`https://jeandv.vercel.app${pathname}`}
      />
      <link rel="canonical" href={`https://jeandv.vercel.app${pathname}`} /> */}
      <link rel="me" href="mailto:seifalmotaz@outlook.com" />
      <meta property="og:type" content={meta.type} />
      <meta property="og:site_name" content="Jean Rondón" />
      <meta property="og:description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@seifalmotaz" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
    </>
  );
};

export default Head;
