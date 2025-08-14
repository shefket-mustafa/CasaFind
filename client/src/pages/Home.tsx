import { FaCheck } from "react-icons/fa6";
import { Link } from "react-router";
import { motion } from "motion/react";

export default function Home() {
  return (
    <>
      {/* Hero Section 1*/}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative h-screen w-full"
      >
        <div
          className=" absolute inset-0 z-0
            bg-[url(https://robbreport.com/wp-content/uploads/2023/02/41Popcorn_HiRes_23080901-1.jpg?w=800)]
            md:h-screen w-full bg-cover 
            "
        ></div>

        <div className="absolute inset-0 bg-black/30 bg-gradient-to-b from-black to-transparent"></div>

        <div className="relative pt-40 z-10 flex flex-col justify-center items-center text-white gap-10">
          <p className="text-4xl px-10 md:text-6xl font-bold">FIND YOUR DREAM HOME</p>

          <p className="text-lg px-10 md:text-2xl max-w-xl">
            Explore top-rated listings, connect with trusted agents, and make
            your next move with confidence.
          </p>

          <Link
            to="/contact"
            className="text-lg md:text-2xl font-mono bg-white text-black px-6 py-3 rounded-lg"
          >
            Schedule a meeting
          </Link>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="hidden relative z-15  text-black h-25 font-bold px-10 md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center md:-mt-20 mb-20"
      >
        <div className="flex flex-col items-center px-6 py-4  shadow-2xl  bg-white rounded-4xl ">
          <p className="text-4xl/14 max-w-lg">Save on Taxes and Fees</p>
          <Link to="/catalog" className="text-xl/30 text-gray-500">
            Learn More
          </Link>
        </div>

        <div className="flex flex-col px-6 py-4 shadow-2xl  bg-white rounded-4xl ">
          <p className="text-4xl/14 max-w-xs">Exclusive Listings</p>
          <Link to="/catalog" className="text-xl/30 text-gray-500">
            Learn More
          </Link>
        </div>

        <div className="flex flex-col px-6 py-4 shadow-2xl bg-white rounded-4xl ">
          <p className="text-4xl/14">Sell Faster, Smarter</p>
          <Link to="/catalog" className="text-xl/30 text-gray-500">
            Learn More
          </Link>
        </div>

        <div className="flex flex-col px-6 py-4 shadow-2xl bg-white rounded-4xl ">
          <p className="text-4xl/14">Invest With Confidence</p>
          <Link to="/catalog" className="text-xl/30 text-gray-500">
            Learn More
          </Link>
        </div>
      </motion.div>

      {/* Hero section 2  */}

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="h-screen w-full bg-white px-6 py-16"
      >
        <div className="flex flex-col md:flex-row h-screen items-center gap-15">
          {/* left container */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="bg-[url(https://www.quickenloans.com/learnassets/QuickenLoans.com/Learning%20Center%20Images/Siege-real-estate-propery-taxes-vs-personal.png)]
        bg-contain bg-no-repeat bg-center w-full md:w-1/2 h-1/2 flex items-center justify-center mx-10"
          ></motion.div>

          {/* right container */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 py-10 text-left flex flex-col items center"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Save on Taxes and Fees
            </h2>
            <p className="text-gray-700 text-2xl mb-6">
              Keep more of what you earn — whether you`re buying, selling, or
              investing.
            </p>
            <div className="space-y-3 text-gray-700">
              <div className="flex items-center gap-2">
                <span className="font-bold">
                  <FaCheck />
                </span>{" "}
                No hidden commissions or extra charges
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">
                  <FaCheck />
                </span>{" "}
                Transparent pricing and closing breakdown
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">
                  <FaCheck />
                </span>{" "}
                Expert assistance on tax-advantaged strategies
              </div>
              <div className="flex items-center gap-2">
                <span className="">
                  <FaCheck />
                </span>{" "}
                Access to government-backed savings programs
              </div>
            </div>
            <div className="mt-8 px-6 py-3">
              <Link
                to="/learn-more"
                className="inline-block bg-black text-white px-7 py-2 rounded-lg text-xl hover:bg-gray-800 transition"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Hero Section 3  */}
      <div
      
        className="bg-white h-screen px-16 py-12 flex flex-col md:flex-row items-center gap-10"
      >
        {/* left Content */}
        <motion.div
         initial={{ opacity: 0, x: -100 }}
         whileInView={{ opacity: 1, x: 0 }}
         transition={{ duration: 0.8, ease: "easeOut" }}
         viewport={{ once: true }}
        className="w-full items-center md:w-1/2 text-left">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Access Exclusive Listings
          </h2>
          <p className="text-gray-700 text-2xl mb-6">
            Unlock properties not available on public platforms and get ahead of
            the competition with CasaFind’s curated selection.
          </p>
          <ul className="space-y-3 text-gray-700 list-disc list-inside">
            <li>Early access to premium and pre-market properties</li>
            <li>Verified listings with accurate data and imagery</li>
            <li>Neighborhood insights and market trends</li>
            <li>Direct contact with trusted local agents</li>
          </ul>
          <div className="mt-8 px-6 py-3">
            <Link
              to="/learn-more"
              className="inline-block bg-black text-white px-7 py-2 rounded-lg text-xl hover:bg-gray-800 transition"
            >
              Learn More
            </Link>
          </div>
        </motion.div>

        {/* right Image */}
        <motion.div
         initial={{ opacity: 0, x: 100 }}
         whileInView={{ opacity: 1, x: 0 }}
         transition={{ duration: 0.8, ease: "easeOut" }}
         viewport={{ once: true }}
          className="w-full md:w-1/2 h-full flex items-center
  bg-[url(https://cdn.dribbble.com/userupload/36895327/file/original-5cecb75184d4861601c1d892ccab64c0.png?resize=1504x1503&vertical=center)]
  bg-cover"
        ></motion.div>
      </div>

      {/* Explore the power of casaFind */}
      <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative  h-[250px] w-full">
        <div
          className=" absolute inset-0 z-0 bg-[url('https://cdn-wp.photoup.net/wp-content/uploads/2023/02/15144044/R06A0P6S.jpg')]
    bg-cover bg-center 
    "
        ></div>

        <div className="absolute z-10 inset-0 bg-black/30 bg-gradient-to-b from-black to-transparent"></div>

        <div className="relative z-20 flex flex-col justify-center items-center h-full gap-10">
          <h1 className="text-4xl md:text-6xl text-white font-bold">
            Explore the power of casaFind
          </h1>
          <Link
            className="py-3 px-6 text-lg md:text-xl bg-white text-black rounded-2xl font-bold"
            to="/"
          >
            <span>GET STARTED</span>
          </Link>
        </div>
      </motion.div>

      {/* Hero section 4  */}

      <div
     
        className="h-screen w-full bg-white px-6 py-16"
      >
        <div className="flex flex-col md:flex-row h-screen items-center gap-15">
          {/* left container */}
          <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
            className="bg-[url(https://www.quickenloans.com/learnassets/QuickenLoans.com/Learning%20Center%20Images/Siege-real-estate-propery-taxes-vs-personal.png)]
        bg-contain bg-no-repeat bg-center w-full md:w-1/2 h-1/2 flex items-center justify-center mx-10"
          ></motion.div>

          {/* right container */}
          <motion.div
           initial={{ opacity: 0, x: 100 }}
           whileInView={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           viewport={{ once: true }}
          className="w-full md:w-1/2 text-left py-10 flex flex-col items center">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Sell Faster and Smarter
            </h2>
            <p className="text-gray-700 text-2xl mb-6">
              Maximize your sale potential with CasaFind’s proven tools and
              expert support. From optimized listings to smart marketing, we
              make selling seamless and rewarding.
            </p>
            <div className="space-y-3 text-gray-700">
              <div className="flex items-center gap-2">
                <span className="font-bold">
                  <FaCheck />
                </span>
                Professional staging and high-impact photography
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">
                  <FaCheck />
                </span>{" "}
                AI-powered pricing strategy to attract serious buyers
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">
                  <FaCheck />
                </span>{" "}
                Real-time performance tracking for your listing
              </div>
              <div className="flex items-center gap-2">
                <span className="">
                  <FaCheck />
                </span>{" "}
                Hands-on support from expert local agents
              </div>
            </div>
            <div className="mt-8 px-6 py-3">
              <Link
                to="/learn-more"
                className="inline-block bg-black text-white px-7 py-2 rounded-lg text-xl hover:bg-gray-800 transition"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Hero Section 5  */}
      <div
      
        className="bg-white h-screen px-16 py-12 flex flex-col md:flex-row items-center gap-10 "
      >
        {/* left Content */}
        <motion.div 
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-full items-center md:w-1/2 text-left">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Invest With Confidence
          </h2>
          <p className="text-gray-700 text-2xl mb-6">
            Unlock properties not available on public platforms and get ahead of
            the competition with CasaFind’s curated selection.
          </p>
          <ul className="space-y-3 text-gray-700 list-disc list-inside">
            <li>Early access to premium and pre-market properties</li>
            <li>Verified listings with accurate data and imagery</li>
            <li>Neighborhood insights and market trends</li>
            <li>Direct contact with trusted local agents</li>
          </ul>
          <div className="mt-8 px-2 py-3">
            <Link
              to="/learn-more"
              className="inline-block bg-black text-white px-7 py-2 rounded-lg text-xl hover:bg-gray-800 transition"
            >
              Learn More
            </Link>
          </div>
        </motion.div>

        {/* right Image */}
        <motion.div
         initial={{ opacity: 0, x: 100 }}
         whileInView={{ opacity: 1, x: 0 }}
         transition={{ duration: 0.8, ease: "easeOut" }}
         viewport={{ once: true }}
          className="w-full md:w-1/2 h-full flex items-center
bg-[url('https://media.istockphoto.com/id/1239849888/photo/mortgage-graph-with-ascending-price-arrow.jpg?s=612x612&w=0&k=20&c=CNONZSy4_wpxM0x32x9pBWRX-MTG_CQ356zVCNh2xd0=')]
bg-cover bg-center"
        ></motion.div>
      </div>

      {/* Want to learn more ? */}

      <motion.div
     initial={{ opacity: 0, x: 100 }}
     whileInView={{ opacity: 1, x: 0 }}
     transition={{ duration: 0.8, ease: "easeOut" }}
     viewport={{ once: true }}
        className="relative w-full h-[500px]"
      >
        <div
          className=" absolute inset-0 z-0 bg-[url('https://www.buildmyrebusiness.com/wp-content/uploads/2024/12/Is-Real-Estate-a-Good-Career.jpg')]
    bg-cover bg-center 
    "
        ></div>

        <div className="absolute z-10 inset-0 bg-black/30 bg-gradient-to-b from-black to-transparent"></div>

        <motion.div 
         initial={{ opacity: 0, x: -100 }}
         whileInView={{ opacity: 1, x: 0 }}
         transition={{ duration: 0.8, ease: "easeOut" }}
         viewport={{ once: true }}
        className="relative z-20 flex flex-col px-10 justify-center items-center h-full gap-10">
          <h1 className="text-4xl md:text-6xl text-white font-bold">
            Want to Sell Smarter or Buy with Confidence?
          </h1>
          <h1 className="text-white text-lg max-w-[800px]">
            Start your journey with CasaFind — your trusted partner for success
            in real estate. Discover expert tools, personalized guidance, and
            exclusive listings that put you ahead.
          </h1>
          <Link
            className="py-3 px-6 text-lg md:text-xl bg-white text-black rounded-2xl font-bold"
            to="/"
          >
            <span>GET STARTED</span>
          </Link>
        </motion.div>
      </motion.div>

      {/* Discover why section */}

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className=" hidden  md:flex flex-col justify-center items-center text-2xl  md:text-5xl h-screen w-full gap-20 bg-white"
      >
        <h1 className="border-6 font-bold py-20 p-10">
          Discover why people have chosen casaFind
        </h1>

        <div className=" flex flex-col lg:flex-row w-full px-20 gap-10">
          {/* left image */}
          <motion.div
           initial={{ opacity: 0, x: -100 }}
           whileInView={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           viewport={{ once: true }}
            className="w-1/2 h-96 bg-cover bg-center 
        bg-[url('https://img.freepik.com/free-photo/front-view-man-working-as-real-estate-agent_23-2151064880.jpg?semt=ais_hybrid&w=740')]
        "
          ></motion.div>

          {/* right content */}
          <motion.div
           initial={{ opacity: 0, x: 100 }}
           whileInView={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           viewport={{ once: true }}
          className="flex flex-col gap-7 w-full lg:w-1/2 ">
            <p className="text-2xl font-semibold text-gray-900">
              — Michael Phelps
            </p>

            <p className="text-xl md:text-2xl text-gray-800 ">
              casaFind does four things really, really well. Number one, they
              lower your expenses. Number two, they take 80% of the tasks that
              you would normally do away so that you are focusing on working
              with buyers or sellers, which is what actually pays you in real
              estate. Number three, the opportunity model is huge. You can
              invest and diversify what you are doing outside of the next sale.
              And, number four, you get more time back.”
            </p>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}
