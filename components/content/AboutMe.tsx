import AnimationContainer from '../utils/AnimationContainer';
import { calculateDuration } from './CurrentTimeLineExp';

const AboutMe = () => {
  return (
    <AnimationContainer customClassName="w-full mb-16">
      <h2 className="font-bold text-2xl tracking-tight mb-8 text-white text-center lg:text-start">
        About me
      </h2>

      <div className="flex flex-col gap-5">
        <p className="text-base text-gray-400">
          I’m Seif Almotaz Bellah Mohamed, a Software Developer with 3+ years of
          experience in building scalable cross-platform applications and robust
          backend systems using Flutter, Python, NodeJS, and Golang. Passionate
          about delivering clean, user-focused solutions.
        </p>
      </div>
    </AnimationContainer>
  );
};

export default AboutMe;
