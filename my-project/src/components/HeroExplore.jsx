export const HeroExplore = () => {
  return (
    <div className="relative w-full h-screen">
      <img 
        src="../../assets/banner/india-wallpaper.webp" 
        alt="Cover" 
        className="w-full h-full object-cover" 
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>

      {/* Hero Text */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center px-4 z-10">
        <h1 className="text-white text-3xl min-[500px]:text-5xl font-bold border-l-4 border-[rgb(252,252,34)] pl-4 mb-4">
          Book India Holiday Packages
        </h1>
        <p className="text-[rgb(252,252,34)] font-bold text-lg min-[500px]:text-xl">
          India Holiday Packages Crafted For Every Dream, Every Destination
        </p>
      </div>
    </div>
  );
};
