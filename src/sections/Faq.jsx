import { useState } from "react";
import { Element } from "react-scroll";
import { faq } from "../constants/index.jsx";
import FaqItem from "../components/FaqItem.jsx";

const Faq = () => {
  const halfLength = Math.floor(faq.length / 2);
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section>
      <Element name="faq" className="relative">
        {/* …header stays the same… */}

        <div className="faq-glow_before relative z-2 border-2 border-s2 bg-s1">
          <div className="container flex gap-10 max-lg:block">
            <div className="relative flex-1 pt-24">
              {faq.slice(0, halfLength).map((item, index) => (
                <FaqItem
                  key={item.id}
                  item={item}
                  index={index}
                  isActive={openIndex === index}
                  onToggle={() => handleToggle(index)}
                />
              ))}
            </div>

            <div className="relative flex-1 lg:pt-24">
              {faq.slice(halfLength).map((item, index) => {
                const actualIndex = halfLength + index;
                return (
                  <FaqItem
                    key={item.id}
                    item={item}
                    index={actualIndex}
                    isActive={openIndex === actualIndex}
                    onToggle={() => handleToggle(actualIndex)}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Faq;
