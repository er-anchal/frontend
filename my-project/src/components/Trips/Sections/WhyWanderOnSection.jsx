import WhyWanderOnCard from '../Cards/WhyWanderOnCard';
import SectionHeader from '../Common/SectionHeader';
import { featuresData } from '../../../data';

/**
 * Why WanderOn features section
 */
const WhyWanderOnSection = () => {
  return (
    <section className="container mx-auto mt-12 px-4">
      <SectionHeader 
        subtitle="Why WanderOn?"
        title="WanderOn's Secret Sauce"
      />

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {featuresData.map((usp) => (
          <WhyWanderOnCard key={usp.id} data={usp} />
        ))}
      </div>
    </section>
  );
};

export default WhyWanderOnSection;
