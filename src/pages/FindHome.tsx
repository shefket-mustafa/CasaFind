export default function FindHome() {
  return (
    <>
      <div className="h-screen w-full bg-white">
        <div className="relative  h-[450px]  ">
          <div
            className=" absolute inset-0 z-0
            bg-[url(https://robbreport.com/wp-content/uploads/2023/02/41Popcorn_HiRes_23080901-1.jpg?w=800)]
            h-[450px] w-full bg-cover 
            "
          ></div>

          <div className="absolute inset-0 h-[450px] bg-black/50 bg-gradient-to-b from-black to-transparent"></div>

          <div className="relative pt-40 z-10 flex flex-col justify-center items-center text-white gap-10">
            <p className="text-6xl font-bold">Exclusive Homes</p>
          </div>

          <div className="absolute bottom-0 left-0 w-1/2 h-[80px] bg-white/50 z-15 clip-x-slant"></div>
          <div className="absolute bottom-0 right-0 w-1/2 h-[80px] bg-white/50 z-15 clip-x-slant-reverse"></div>
        </div>
      </div>
    </>
  );
}
