import { Timeline, TimelineEvent } from './TimeLineExp';

export function calculateDuration(
  startDate: string,
  showMonths: boolean
): string {
  const start: Date = new Date(startDate);
  const now: Date = new Date();
  const diff: number = now.getTime() - start.getTime();
  const diffDate: Date = new Date(diff);
  const years: number = diffDate.getUTCFullYear() - 1970;
  const months: number = diffDate.getUTCMonth();

  if (years === 1 && months === 0) {
    return '1 year';
  } else if (!showMonths) {
    return `${years} years`;
  } else {
    return `${years} yr ${months} mos`;
  }
}

const CurrentTimeLineExp = () => {
  return (
    <Timeline>
      <TimelineEvent active>
        <TimelineEvent.Title>
          <a
            href="https://www.payrows.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white hover:underline transition-all ease"
          >
            Payrows
          </a>{' '}
          | Aug. 2022 - {calculateDuration('2022-07-21', true)}
        </TimelineEvent.Title>

        <TimelineEvent.Description>
          At PayRows, I led the end-to-end development of innovative Flutter
          applications, including NAAB and RemoteOS, overseeing every stage from
          concept to deployment. I specialized in designing and implementing
          cross-platform solutions for mobile, desktop, and web platforms,
          ensuring seamless performance and scalability across all environments.
          My work focused on optimizing application functionality, enhancing
          scalability, and delivering continuous feature improvements,
          contributing to high-quality, user-centric software solutions.
        </TimelineEvent.Description>
      </TimelineEvent>

      <TimelineEvent active>
        <TimelineEvent.Title>
          <a
            href="https://www.linkedin.com/company/equipment-simulations-llc/posts/?feedView=all"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white hover:underline transition-all ease"
          >
            SimsUshare
          </a>{' '}
          | Aug. 2022 - {calculateDuration('2024-09-1', true)}
        </TimelineEvent.Title>

        <TimelineEvent.Description>
          At SimsUShare, I collaborated with the software engineering team to
          contribute to Flutter-based desktop application projects. My role
          involved actively participating in cross-platform development
          initiatives, gaining valuable insights into application architecture
          and workflows. I contributed to team discussions and planning,
          ensuring the successful implementation of innovative solutions for
          desktop applications while enhancing my expertise in Flutter
          development.
        </TimelineEvent.Description>
      </TimelineEvent>

      <TimelineEvent last>
        <TimelineEvent.Title>
          <a
            href="https://www.linkedin.com/company/codra-tech/posts/?feedView=all"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white hover:underline transition-all ease"
          >
            CodraTech
          </a>{' '}
          | Mar. 2024 - Aug. 2024
        </TimelineEvent.Title>

        <TimelineEvent.Description>
          At CodraTech, I worked closely with a team to refactor and enhance the
          LACTIViTY Flutter app, focusing on improving its performance,
          stability, and scalability. I played a key role in identifying and
          resolving critical bugs, addressing legacy issues, and implementing
          best practices to optimize the mobile app for both iOS and Android. My
          contributions ensured seamless functionality and improved code
          maintainability, aligning with the team's goals to future-proof the
          application.
        </TimelineEvent.Description>
      </TimelineEvent>
    </Timeline>
  );
};

export default CurrentTimeLineExp;
