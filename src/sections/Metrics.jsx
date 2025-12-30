import { Element } from "react-scroll";

const metrics = [
  "Daily & weekly totals",
  "Average session duration",
  "Monthly & annual progress",
  "Activity-specific insights",
  "Focus quality breakdown (optional)",
];

const Metrics = () => {
  return (
    <section className="relative py-32 lg:py-40 bg-n1 overflow-hidden">
      <Element name="metrics">
        <div className="container">
          <div className="max-w-512 mx-auto text-center lg:text-left">
            <div className="caption small-2 uppercase text-p3 mb-4">
              Powerful Insights
            </div>
            <h2 className="h3 lg:h2 uppercase text-p4 mb-12 lg:mb-16">
              Metrics That Actually Matter
            </h2>

            <ul className="space-y-6">
              {metrics.map((metric, index) => (
                <li
                  key={index}
                  className="flex items-center gap-6 group"
                >
                  {/* Accent dot with hover effect */}
                  <div className="flex-shrink-0 w-4 h-4 rounded-full bg-p1 transition-all duration-300 group-hover:scale-125 group-hover:shadow-lg group-hover:shadow-p1/30" />

                  {/* Text */}
                  <span className="body-1 text-n-3 group-hover:text-p3 transition-colors duration-300">
                    {metric}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Metrics;