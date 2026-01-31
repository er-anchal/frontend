/**
 * Flip card component for destination cards
 * @param {Object} data - Card data with front and back images
 */
const FlipCard = ({ data }) => {
  return (
    <div className="flip-card-perspective w-full aspect-[5/7] group bg-transparent">
      <div className="flip-card-inner">
        {/* Front side */}
        <div className="flip-card-front">
          <img 
            src={data.front} 
            alt={data.alt} 
            className="w-full h-full object-cover" 
          />
        </div>
        
        {/* Back side */}
        <div className="flip-card-back">
          <img 
            src={data.back} 
            alt={data.alt} 
            className="w-full h-full object-cover" 
          />
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
