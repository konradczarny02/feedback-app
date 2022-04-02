import RoadmapStatus from 'components/atoms/RoadmapStatus/RoadmapStatus';
import { RoadmapWrapper } from 'components/molecules/Roadmap/Roadmap.styles';

const Roadmap = () => {
  return (
    <RoadmapWrapper>
      <h3>Roadmap</h3>
      <a href="#">View</a>
      <RoadmapStatus statusName="Planned" statusNumber={3} />
      <RoadmapStatus statusName="In-Progress" statusNumber={2} />
      <RoadmapStatus statusName="Live" statusNumber={1} />
    </RoadmapWrapper>
  );
};

export default Roadmap;
