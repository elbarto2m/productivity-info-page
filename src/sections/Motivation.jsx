import { Element } from "react-scroll";

const messages = [
  "No timers. No pressure.",
  "Every session counts.",
  "Life happens. Progress continues.",
  "You grow at your own pace."
];

const Motivation = () => {
  return (
    <section className="relative py-32 lg:py-40 bg-n1 overflow-hidden">
      <Element name="motivation">
        <div className="container">
          <div className="max-w-640 mx-auto text-center">
            {/* Caption + Main Heading */}
            <div className="caption small-2 uppercase text-p3 mb-4">
              Gentle & Effective
            </div>
            <h2 className="h3 lg:h2 uppercase text-p4 mb-10 lg:mb-14">
              Built to Motivate, Not Shame
            </h2>

            {/* Description */}
            <p className="body-1 text-n-3 max-w-512 mx-auto mb-16 lg:mb-20">
              ProgodTivity is designed to support consistency without guilt.
              No red days. No punishments. Just honest progress.
            </p>

            {/* Message Cards */}
            <div className="grid sm:grid-cols-2 gap-8 lg:gap-10">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-n-3/10 bg-n-3/5 backdrop-blur-sm p-8 lg:p-10 
                             transition-all duration-300 hover:border-p1/30 hover:bg-n-3/10"
                >
                  <p className="h5 lg:h4 text-p3">{message}</p>
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