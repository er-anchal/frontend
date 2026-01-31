import { Star } from 'lucide-react';

/**
 * Star rating component - shows 5 stars
 */
const StarRating = () => {
  return (
    <div className="flex gap-1 text-[#c9c903] text-xs">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={12} fill="currentColor" />
      ))}
    </div>
  );
};

export default StarRating;
