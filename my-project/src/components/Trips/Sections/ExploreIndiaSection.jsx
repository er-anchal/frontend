import FlipCard from '../Cards/FlipCard';
import SectionHeader from '../Common/SectionHeader';
import { destinations } from '../../../data';

/**
 * Explore India section with flip cards
 */
const ExploreIndiaSection = () => {
  return (
    <section className="container mx-auto mt-24 px-4">
      <SectionHeader title="Explore India" />

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {destinations.map((dest) => (
          <FlipCard key={dest.id} data={dest} />
        ))}
      </div>
    </section>
  );
};

export default ExploreIndiaSection;
