export const WhyWanderOnCard = ({ data }) => {
  return (
    <div className="relative rounded-xl overflow-hidden aspect-[5/6] group">
      <img src={data.img} alt={data.title} className="w-full h-full object-cover" />
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-start pt-5 px-4 bg-transparent">
        <h5 className="text-xl lg:text-[2.5vmin] font-bold text-[rgb(1,95,116)] mb-3 lg:mb-10 text-center lg:text-left">
          {data.title}
        </h5>
        <p className="text-black text-sm min-[500px]:text-[1.15rem] lg:text-[2vmin] font-normal leading-tight text-center lg:text-left">
          {data.text}
        </p>
      </div>
    </div>
  );
};
