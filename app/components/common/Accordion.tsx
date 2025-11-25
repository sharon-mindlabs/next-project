"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface AccordionItem {
  q: string;
  a: string;
}

interface AnimatedAccordionProps {
  items: AccordionItem[];
}

export default function AnimatedAccordion({ items }: AnimatedAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="accordion-container">
      <div className="container">
        <h6>Frequently Asked Questions</h6>
        <h2>Need Help? Start with our FAQ </h2>

        {items.map((item, i) => {
          const isActive = openIndex === i;

          return (
            <div
              key={i}
              className={`accordion-item ${isActive ? "active" : ""}`}
              onClick={() => toggle(i)}
            >
              <div className={`accordion-header ${isActive ? "active" : ""}`}>
                <span>{item.q}</span>

                <motion.span
                  animate={{ rotate: isActive ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <i className="icon-drop-down"></i>
                </motion.span>
              </div>

              <AnimatePresence>
                {isActive && (
                  <motion.div
                    className="accordion-content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    <div className="content-inner">{item.a}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}
