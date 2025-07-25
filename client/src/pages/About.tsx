export default function About() {
    return (
      <div className="w-full bg-white text-gray-800 px-6 py-16">
        {/* Hero Section */}
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-lg md:text-xl text-gray-600">
            We’re committed to helping you find the perfect home — and making the journey enjoyable along the way.
          </p>
        </div>
  
        {/* Mission Section */}
        <div className="max-w-5xl mx-auto mb-20">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed">
            At casaFind, our mission is to redefine real estate by connecting people to the places they belong.
            We believe finding a home should be personal, transparent, and supported by professionals who truly care.
          </p>
        </div>
  
        {/* Vision & Team Section */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
            <p className="text-gray-600 leading-relaxed">
              We envision a future where every home search is stress-free, fully digital, and tailored to your lifestyle.
              We use technology, market insights, and human touch to bring you the most seamless buying or renting experience.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Meet the Team</h2>
            <p className="text-gray-600 leading-relaxed">
              We're a passionate group of real estate agents, designers, and tech experts united by one goal — helping you
              love where you live. With over 10 years of combined experience, we're here to guide you every step of the way.
            </p>
          </div>
        </div>
      </div>
    );
  }
  