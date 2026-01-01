import { Element } from "react-scroll";

const messages = [
  "No timers. No pressure.",
  "Every session counts.",
  "Life happens. Progress continues.",
  "You grow at your own pace."
];

const Motivation = () => {
  return (
    <section className="relative py-32 lg:py-40 bg-gradient-to-b from-n1 via-n1 to-n-2 overflow-hidden">
      <Element name="motivation">
        <div className="container">
          <div className="max-w-640 mx-auto text-center">
            {/* Caption */}
            <div className="small-2 uppercase tracking-widest text-p3 mb-4 opacity-80">
              Gentle & Effective
            </div>

            {/* Heading */}
            <h2 className="h3 lg:h2 uppercase text-p4 mb-10 lg:mb-14">
              Built to Motivate, Not Shame
            </h2>

            {/* Description */}
            <p className="body-1 text-n-3 max-w-512 mx-auto mb-16 lg:mb-20 leading-relaxed">
              ProgodTivity is designed to support consistency without guilt.
              No red days. No punishments. Just honest progress.
            </p>

            {/* Message Cards */}
            <div className="grid sm:grid-cols-2 gap-8 lg:gap-10">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className="
                    group relative rounded-2xl p-8 lg:p-10
                    border border-n-3/10
                    bg-gradient-to-br from-n-3/10 to-n-3/40
                    backdrop-blur-sm
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:border-p1/40
                    hover:shadow-[0_0_40px_-15px_rgba(124,58,237,0.35)]
                  "
                >
                  {/* Accent line */}
                  <span className="absolute left-0 top-6 h-10 w-1 rounded-full bg-p1/70 opacity-0 group-hover:opacity-100 transition-opacity" />

                  <p className="h5 lg:h4 text-p3 leading-snug">
                    {message}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Motivation;
