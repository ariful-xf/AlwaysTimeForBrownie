"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Do you bake fresh daily?",
    answer: "Yes, absolutely! Every single morning before sunrise, our team hand-crafts and fresh-bakes all of our breads, croissants, and pastries. We believe the warmth and aroma of fresh baking are essential to the true artisan experience."
  },
  {
    question: "Can I order custom cakes?",
    answer: "Yes, we specialize in creating bespoke, beautiful custom cakes for birthdays, weddings, and special events. We request at least 48 hours' notice for standard orders and up to 2 weeks for custom wedding or complex celebration cakes."
  },
  {
    question: "Do you offer delivery?",
    answer: "We offer local courier delivery within a 10-mile radius of our Portland bakery for orders over $30. For large catering orders or custom celebration cakes, we can arrange specialized delivery. Standard delivery fees apply."
  },
  {
    question: "Are there vegan options?",
    answer: "Yes! While we love our European butter, we also offer a selection of vegan-friendly items. Our classic sourdough breads are naturally vegan (made from flour, water, salt, and yeast). We also bake a rotating selection of plant-based sweet pastries and cakes daily."
  },
  {
    question: "How early should I place orders?",
    answer: "For standard daily breads and pastries, you can order via our online platform for same-day pickup. For larger brunch boxes, office catering, or custom cakes, we recommend placing your order 2 to 3 days in advance."
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {faqData.map((item, i) => {
        const isOpen = activeIndex === i;
        return (
          <div
            key={i}
            className="border border-[#2D1810]/10 bg-white rounded-2xl overflow-hidden hover:border-[#2D1810]/30 transition-colors"
          >
            <button
              onClick={() => toggleFAQ(i)}
              className="w-full text-left p-5 flex justify-between items-center cursor-pointer focus:outline-none"
              aria-expanded={isOpen}
            >
              <span className="font-medium text-[#2D1810] pr-4">{item.question}</span>
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
              >
                <ChevronDown className="w-5 h-5 text-[#7A0D1B]" />
              </motion.div>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                >
                  <div className="px-5 pb-5 pt-1 text-[#5A2E1F] text-sm leading-relaxed border-t border-[#2D1810]/5">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
