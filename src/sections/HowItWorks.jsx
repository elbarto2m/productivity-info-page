const steps = [
  {
    title: "Do the Work",
    desc: "Focus on your learning or project without timers, pressure, or interruptions."
  },
  {
    title: "Log After",
    desc: "When you’re done, log how long you worked and what you worked on."
  },
  {
    title: "See the Truth",
    desc: "Daily, weekly, monthly, and yearly insights reveal your real patterns."
  }
];

const HowItWorks = () => {
  return (
    <section className="py-24 sm:py-32 lg:py-40 bg-n1">
      <div className="container">
        {/* Section Title */}
        <h2 className="text-2xl sm:h3 md:h2 text-center uppercase text-p4 mb-12 sm:mb-16 md:mb-20 font-[Arial] font-bold">
          How ProgodTivity Works
        </h2>

        <div className="grid md:grid-cols-3 gap-8 sm:gap-10 lg:gap-16">
          {steps.map((s, i) => (
            <div
              key={i}
              className="rounded-2xl border border-n-3/10 p-6 sm:p-8 bg-n-3/5 backdrop-blur-sm font-[Arial] font-bold"
            >
              <div className="flex items-center gap-4 mb-3 sm:mb-4">
                <div className="text-2xl sm:text-3xl text-p1 font-[Arial] font-bold">
                  {i + 1}
                </div>
              </div>

              <h3 className="text-lg sm:h5 md:h4 mb-3 sm:mb-4 text-p4 font-[Arial] font-bold">
                {s.title}
              </h3>

              <p className="text-sm sm:body-1 text-n-3 font-[Arial] font-bold opacity-90 leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
