import { Star } from 'lucide-react';

export const TestimonialCard = ({ data }) => {
  return (
    <div className="flex gap-4 p-4 min-[500px]:p-8 bg-[#f0eeee] rounded-xl shadow-sm">
      <div className="shrink-0 w-[80px] h-[80px] min-[500px]:w-[100px] min-[500px]:h-[100px] rounded-full border border-[rgb(1,95,116)] p-1 overflow-hidden">
        <img src={data.img} alt={data.name} className="w-full h-full object-cover rounded-full" />
      </div>
      <div className="flex-grow">
        <div className="flex justify-between items-center mb-1">
          <p className="mb-0 font-bold text-black text-sm min-[500px]:text-base">{data.name}</p>
          <div className="flex gap-1 text-[#c9c903] text-xs">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={12} fill="currentColor" />
            ))}
          </div>
        </div>
        <p className="text-[rgb(83,82,82)] text-xs min-[500px]:text-sm mb-2">{data.date}</p>
        <div className="relative pl-6">
          <span className="absolute top-[-10px] left-0 text-[rgb(1,95,116)] text-5xl font-bold leading-none">"</span>
          <p className="text-[rgb(83,82,82)] text-xs min-[500px]:text-[0.875rem] text-justify leading-relaxed">
            {data.text}
          </p>
        </div>
        <a 
          href={data.link} 
          target="_blank" 
          rel="noreferrer" 
          className="text-[rgb(1,95,116)] font-bold text-sm flex justify-end mt-2 hover:underline"
        >
          Continue Reading
        </a>
      </div>
    </div>
  );
};
