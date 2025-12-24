'use client';

import AnimationContainer from '../utils/AnimationContainer';

const videos = [
  {
    title: 'Project Demo 1',
    src: '/project_demo_1.mp4'
  },
  {
    title: 'Project Demo 2',
    src: '/project_demo_2.mp4'
  }
];

const VideoGallery = () => {
  return (
    <AnimationContainer customClassName="w-full flex flex-col gap-5 mb-16">
      <h2 className="font-bold text-2xl tracking-tight mb-2 text-white text-start">
        Video Demos
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
        {videos.map((video, index) => (
          <div key={index} className="flex flex-col gap-2">
            <div className="relative rounded-xl overflow-hidden border border-gray-800 bg-[#080809] group">
              <video
                src={video.src}
                controls
                className="w-full h-auto aspect-video object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white font-medium">{video.title}</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm px-1">{video.title}</p>
          </div>
        ))}
      </div>
    </AnimationContainer>
  );
};

export default VideoGallery;
