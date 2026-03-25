import { FaCheck } from "react-icons/fa6";
import { Link } from "react-router";
import { motion } from "motion/react";

const featureCards = [
  {
    title: "Save on Taxes and Fees",
    description:
      "Keep more of what you earn with transparent pricing and smarter strategies.",
  },
  {
    title: "Exclusive Listings",
    description:
      "Get ahead with curated homes and opportunities not shown everywhere else.",
  },
  {
    title: "Sell Faster, Smarter",
    description:
      "Modern tools, better presentation, and expert support for stronger results.",
  },
  {
    title: "Invest With Confidence",
    description:
      "Make decisions backed by insight, trusted data, and local expertise.",
  },
];

const taxFeatures = [
  "No hidden commissions or extra charges",
  "Transparent pricing and closing breakdown",
  "Expert assistance on tax-advantaged strategies",
  "Access to government-backed savings programs",
];

const listingFeatures = [
  "Early access to premium and pre-market properties",
  "Verified listings with accurate data and imagery",
  "Neighborhood insights and market trends",
  "Direct contact with trusted local agents",
];

const sellFeatures = [
  "Professional staging and high-impact photography",
  "AI-powered pricing strategy to attract serious buyers",
  "Real-time performance tracking for your listing",
  "Hands-on support from expert local agents",
];

const investFeatures = [
  "Access to high-potential property opportunities",
  "Market data and neighborhood growth trends",
  "Smarter decision-making with trusted insights",
  "Support tailored for long-term investment goals",
];

export default function Home() {
  return (
    <div className="w-full overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white text-slate-900">
      {/* Hero */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative min-h-screen w-full"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://robbreport.com/wp-content/uploads/2023/02/41Popcorn_HiRes_23080901-1.jpg?w=800)",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/30 to-white/10" />

        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="mb-5 inline-flex rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur-md"
          >
            Modern real estate, built around clarity
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.15 }}
            viewport={{ once: true }}
            className="max-w-5xl text-4xl font-bold leading-tight sm:text-5xl md:text-7xl"
          >
            Find your dream home with confidence
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.22 }}
            viewport={{ once: true }}
            className="mt-6 max-w-2xl text-base leading-8 text-white/90 md:text-xl"
          >
            Explore top-rated listings, connect with trusted agents, and take
            your next step with a platform designed to make the journey feel
            smoother, smarter, and more personal.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.28 }}
            viewport={{ once: true }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <Link
              to="/contact"
              className="rounded-2xl bg-white px-8 py-4 text-lg font-semibold text-slate-900 shadow-lg transition hover:bg-slate-100"
            >
              Schedule a meeting
            </Link>

            <Link
              to="/catalog"
              className="rounded-2xl border border-white/40 bg-white/10 px-8 py-4 text-lg font-semibold text-white backdrop-blur transition hover:bg-white/20"
            >
              Browse listings
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Floating cards */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-20 mx-auto -mt-20 hidden max-w-7xl px-6 md:block"
      >
        <div className="grid grid-cols-4 gap-5">
          {featureCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="rounded-[28px] border border-white/70 bg-white/85 p-6 shadow-[0_18px_55px_rgba(15,23,42,0.10)] backdrop-blur-md"
            >
              <h3 className="text-xl font-bold text-slate-900">{card.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {card.description}
              </p>
              <Link
                to="/catalog"
                className="mt-5 inline-block text-sm font-semibold text-slate-500 transition hover:text-slate-900"
              >
                Learn More
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Intro strip */}
      <section className="px-6 pb-10 pt-20 md:pb-16 md:pt-28">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
            Explore the power of casaFind
          </p>
          <h2 className="mx-auto mt-4 max-w-4xl text-3xl font-bold text-slate-900 md:text-5xl">
            A modern real estate experience designed to feel lighter, faster,
            and more transparent
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            From discovering exclusive listings to selling smarter and planning
            your next investment, casaFind brings together useful tools,
            trustworthy guidance, and a modern interface that helps people move
            with confidence.
          </p>
        </div>
      </section>

      {/* Section 1 */}
      <motion.section
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        viewport={{ once: true }}
        className="px-6 py-10 md:py-16"
      >
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 rounded-[36px] bg-white p-6 shadow-[0_20px_70px_rgba(15,23,42,0.08)] md:grid-cols-2 md:p-10">
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75 }}
            viewport={{ once: true }}
            className="min-h-[320px] rounded-[28px] bg-contain bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "url(https://www.quickenloans.com/learnassets/QuickenLoans.com/Learning%20Center%20Images/Siege-real-estate-propery-taxes-vs-personal.png)",
            }}
          />

          <motion.div
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Save More
            </p>
            <h2 className="text-3xl font-bold text-slate-900 md:text-5xl">
              Save on taxes and fees
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Keep more of what you earn whether you’re buying, selling, or
              investing. casaFind helps simplify the financial side with greater
              transparency and more thoughtful support.
            </p>

            <div className="mt-8 space-y-4">
              {taxFeatures.map((feature) => (
                <div key={feature} className="flex items-start gap-3">
                  <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-xl bg-blue-100">
                    <FaCheck className="text-blue-600" size={14} />
                  </div>
                  <p className="text-base text-slate-700">{feature}</p>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Link
                to="/learn-more"
                className="inline-block rounded-2xl bg-slate-900 px-7 py-3 text-lg font-semibold text-white transition hover:bg-slate-800"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Section 2 */}
      <motion.section
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        viewport={{ once: true }}
        className="px-6 py-10 md:py-16"
      >
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75 }}
            viewport={{ once: true }}
            className="order-2 rounded-[32px] bg-gradient-to-br from-slate-50 to-blue-50 p-8 shadow-[0_18px_60px_rgba(15,23,42,0.06)] md:order-1 md:p-10"
          >
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Exclusive Access
            </p>
            <h2 className="text-3xl font-bold text-slate-900 md:text-5xl">
              Access exclusive listings
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Unlock properties not available on public platforms and move ahead
              of the competition with casaFind’s curated selection and trusted
              local insight.
            </p>

            <div className="mt-8 space-y-4">
              {listingFeatures.map((feature) => (
                <div key={feature} className="flex items-start gap-3">
                  <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-xl bg-white shadow-sm">
                    <FaCheck className="text-blue-600" size={14} />
                  </div>
                  <p className="text-base text-slate-700">{feature}</p>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Link
                to="/learn-more"
                className="inline-block rounded-2xl bg-slate-900 px-7 py-3 text-lg font-semibold text-white transition hover:bg-slate-800"
              >
                Learn More
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75 }}
            viewport={{ once: true }}
            className="order-1 min-h-[420px] rounded-[32px] bg-cover bg-center shadow-[0_18px_60px_rgba(15,23,42,0.08)] md:order-2"
            style={{
              backgroundImage:
                "url(https://cdn.dribbble.com/userupload/36895327/file/original-5cecb75184d4861601c1d892ccab64c0.png?resize=1504x1503&vertical=center)",
            }}
          />
        </div>
      </motion.section>

      {/* Mid CTA */}
      <motion.section
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75 }}
        viewport={{ once: true }}
        className="px-6 py-12 md:py-20"
      >
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[36px]">
          <div
            className="relative min-h-[320px] bg-cover bg-center"
            style={{
              backgroundImage:
                "url(https://cdn-wp.photoup.net/wp-content/uploads/2023/02/15144044/R06A0P6S.jpg)",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/60 via-slate-900/30 to-slate-900/20" />
            <div className="relative z-10 flex min-h-[320px] flex-col items-center justify-center px-6 text-center text-white">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white/80">
                Discover More
              </p>
              <h2 className="mt-4 max-w-4xl text-3xl font-bold md:text-6xl">
                Explore the power of casaFind
              </h2>
              <Link
                className="mt-8 rounded-2xl bg-white px-8 py-4 text-lg font-bold text-slate-900 transition hover:bg-slate-100"
                to="/"
              >
                GET STARTED
              </Link>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Section 3 */}
      <motion.section
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        viewport={{ once: true }}
        className="px-6 py-10 md:py-16"
      >
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 rounded-[36px] bg-gradient-to-br from-white to-slate-50 p-6 shadow-[0_20px_70px_rgba(15,23,42,0.08)] md:grid-cols-2 md:p-10">
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75 }}
            viewport={{ once: true }}
            className="min-h-[320px] rounded-[28px] bg-contain bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "url(https://www.quickenloans.com/learnassets/QuickenLoans.com/Learning%20Center%20Images/Siege-real-estate-propery-taxes-vs-personal.png)",
            }}
          />

          <motion.div
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Selling Support
            </p>
            <h2 className="text-3xl font-bold text-slate-900 md:text-5xl">
              Sell faster and smarter
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Maximize your sale potential with stronger presentation, better
              strategy, and modern support tools that make the whole process
              feel more seamless.
            </p>

            <div className="mt-8 space-y-4">
              {sellFeatures.map((feature) => (
                <div key={feature} className="flex items-start gap-3">
                  <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-xl bg-blue-100">
                    <FaCheck className="text-blue-600" size={14} />
                  </div>
                  <p className="text-base text-slate-700">{feature}</p>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Link
                to="/learn-more"
                className="inline-block rounded-2xl bg-slate-900 px-7 py-3 text-lg font-semibold text-white transition hover:bg-slate-800"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Section 4 */}
      <motion.section
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        viewport={{ once: true }}
        className="px-6 py-10 md:py-16"
      >
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75 }}
            viewport={{ once: true }}
            className="order-2 rounded-[32px] border border-slate-200 bg-white p-8 shadow-[0_18px_60px_rgba(15,23,42,0.06)] md:order-1 md:p-10"
          >
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Investment Insight
            </p>
            <h2 className="text-3xl font-bold text-slate-900 md:text-5xl">
              Invest with confidence
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Make stronger property decisions with curated opportunities,
              clearer market signals, and guidance that helps you think beyond
              the next move.
            </p>

            <div className="mt-8 space-y-4">
              {investFeatures.map((feature) => (
                <div key={feature} className="flex items-start gap-3">
                  <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-xl bg-slate-100">
                    <FaCheck className="text-blue-600" size={14} />
                  </div>
                  <p className="text-base text-slate-700">{feature}</p>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Link
                to="/learn-more"
                className="inline-block rounded-2xl bg-slate-900 px-7 py-3 text-lg font-semibold text-white transition hover:bg-slate-800"
              >
                Learn More
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75 }}
            viewport={{ once: true }}
            className="order-1 min-h-[420px] rounded-[32px] bg-cover bg-center shadow-[0_18px_60px_rgba(15,23,42,0.08)] md:order-2"
            style={{
              backgroundImage:
                "url(https://media.istockphoto.com/id/1239849888/photo/mortgage-graph-with-ascending-price-arrow.jpg?s=612x612&w=0&k=20&c=CNONZSy4_wpxM0x32x9pBWRX-MTG_CQ356zVCNh2xd0=)",
            }}
          />
        </div>
      </motion.section>

      {/* Big CTA */}
      <motion.section
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75 }}
        viewport={{ once: true }}
        className="px-6 py-14 md:py-20"
      >
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[36px]">
          <div
            className="relative min-h-[500px] bg-cover bg-center"
            style={{
              backgroundImage:
                "url(https://www.buildmyrebusiness.com/wp-content/uploads/2024/12/Is-Real-Estate-a-Good-Career.jpg)",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900/65 via-slate-900/35 to-slate-900/20" />

            <div className="relative z-10 flex min-h-[500px] flex-col items-center justify-center px-6 text-center text-white">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/75">
                Ready When You Are
              </p>
              <h2 className="mt-4 max-w-5xl text-3xl font-bold leading-tight md:text-6xl">
                Want to sell smarter or buy with confidence?
              </h2>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-white/90">
                Start your journey with casaFind — your trusted partner for
                modern real estate. Discover expert tools, more thoughtful
                guidance, and exclusive opportunities that help you move with
                confidence.
              </p>
              <Link
                className="mt-10 rounded-2xl bg-white px-8 py-4 text-lg font-bold text-slate-900 transition hover:bg-slate-100"
                to="/"
              >
                GET STARTED
              </Link>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Testimonial */}
      <motion.section
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        viewport={{ once: true }}
        className="hidden px-6 pb-20 pt-8 md:block md:pb-28"
      >
        <div className="mx-auto max-w-7xl rounded-[36px] bg-white p-8 shadow-[0_20px_70px_rgba(15,23,42,0.08)] md:p-12">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
              Testimonials
            </p>
            <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-5xl">
              Discover why people choose casaFind
            </h2>
          </div>

          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -70 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.75 }}
              viewport={{ once: true }}
              className="min-h-[380px] rounded-[28px] bg-cover bg-center"
              style={{
                backgroundImage:
                  "url(https://img.freepik.com/free-photo/front-view-man-working-as-real-estate-agent_23-2151064880.jpg?semt=ais_hybrid&w=740)",
              }}
            />

            <motion.div
              initial={{ opacity: 0, x: 70 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.75 }}
              viewport={{ once: true }}
              className="flex flex-col"
            >
              <p className="text-lg font-semibold text-slate-900">
                — Michael Phelps
              </p>

              <p className="mt-6 text-xl leading-9 text-slate-700 md:text-2xl">
                casaFind does four things really well. First, they help lower
                your expenses. Second, they remove a huge amount of the tasks
                that usually slow you down so you can focus on what matters
                most. Third, the opportunity model is strong — you can invest
                and diversify beyond the next sale. And fourth, you get time
                back.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
