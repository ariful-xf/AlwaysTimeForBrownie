"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <>
      <header className="flex items-center justify-between px-4 md:px-6 py-3 fixed w-full top-0 z-50 bg-[#FFF8F4]/90 backdrop-blur-md border-b border-[#2D1810]/5">
        <button
          onClick={() => setIsOpen(true)}
          className="hidden md:flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-[#2D1810] hover:opacity-70 transition-opacity"
        >
          <Menu className="w-5 h-5" />
          <span className="hidden sm:inline">Menu</span>
        </button>
        <Link href="/" className="flex items-center justify-center">
          <Image
            src="/logo.png"
            alt="Atelier Logo"
            width={60}
            height={40}
            className="object-contain"
            priority
          />
        </Link>
        <div className="flex items-center gap-4">
          <Link
            href="#menu"
            className="bg-[#5A2E1F] text-white px-4 md:px-5 py-2.5 rounded-full text-xs md:text-sm font-medium hover:bg-[#7A0D1B] transition-colors whitespace-nowrap"
          >
            Order Now
          </Link>
          <button
            onClick={() => setIsOpen(true)}
            className="flex md:hidden items-center gap-2 text-sm font-medium uppercase tracking-widest text-[#2D1810] hover:opacity-70 transition-opacity"
          >
            <Menu className="w-5 h-5" />
            <span className="hidden sm:inline">Menu</span>
          </button>
        </div>
      </header>

      {/* Full screen Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-[#FFF8F4] flex flex-col"
          >
            <div className="flex items-center justify-between px-6 py-5 border-b border-[#2D1810]/10">
              <button
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-[#2D1810] hover:opacity-70 transition-opacity"
              >
                <X className="w-6 h-6" />
                Close
              </button>
            </div>
            <nav className="flex flex-col items-center justify-center flex-grow space-y-8">
              <Link
                onClick={() => setIsOpen(false)}
                href="#hero"
                className="font-serif italic text-4xl md:text-5xl text-[#2D1810] hover:text-[#E53E8D] transition-colors"
              >
                Home
              </Link>
              <Link
                onClick={() => setIsOpen(false)}
                href="#about"
                className="font-serif italic text-4xl md:text-5xl text-[#2D1810] hover:text-[#E53E8D] transition-colors"
              >
                Our Story
              </Link>
              <Link
                onClick={() => setIsOpen(false)}
                href="#menu"
                className="font-serif italic text-4xl md:text-5xl text-[#2D1810] hover:text-[#E53E8D] transition-colors"
              >
                Menu
              </Link>
              <Link
                onClick={() => setIsOpen(false)}
                href="#contact"
                className="font-serif italic text-4xl md:text-5xl text-[#2D1810] hover:text-[#E53E8D] transition-colors"
              >
                Contact
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
