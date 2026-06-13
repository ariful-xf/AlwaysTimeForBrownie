import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import FAQ from "@/components/FAQ";
import {
  Clock,
  Leaf,
  Wheat,
  Heart,
  MapPin,
  Phone,
  Instagram,
  Facebook,
  ChevronDown,
  MoveRight,
  Star,
} from "lucide-react";
import heroImg from "@/assets/crosseint.webp";
import cakes from "@/assets/cakes.webp";
import crosseintMore from "@/assets/crosseint-more.jpg";
import catalog from "@/assets/catalog.jpg";
import flour from "@/assets/flour-hand.jpg";
import flourHand from "@/assets/flour-hand-making.jpg";
import kitchen from "@/assets/kitchen.jpg";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />

      <main className="flex-grow">
        {/* 2. Hero Section */}
        <section id="hero" className="px-4 md:px-6 mb-24 pt-4 md:pt-6">
          <div className="relative w-full h-[85vh] min-h-[600px] rounded-[40px] md:rounded-[80px] overflow-hidden mt-20">
            <Image
              src={heroImg.src}
              alt="Freshly baked croissants"
              fill
              className="object-cover object-center"
              referrerPolicy="no-referrer"
              priority
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/70"></div>

            <div className="absolute text-center md:text-start inset-0 flex flex-col justify-center px-8 md:px-16 lg:px-24">
              {/* <span className="font-serif italic text-[#fff] text-md md:text-xl mb-4">
                Freshly baked every sunrise
              </span> */}
              <h1 className="font-serif text-white text-4xl md:text-5xl lg:text-7xl max-w-3xl leading-[1.1] mb-6">
                Crafted with warmth, butter & love.
              </h1>
              <p className="text-[#FFF8F4] text-md max-w-xl mb-10 opacity-90">
                Artisan breads, buttery pastries, and handcrafted cakes baked
                fresh every morning using slow fermentation and premium
                ingredients.
              </p>
              <div className="flex items-center justify-center md:justify-start flex-wrap gap-4">
                <Link
                  href="#menu"
                  className="bg-[#7A0D1B] w-full md:w-fit text-center text-white px-8 py-3 rounded-full font-medium hover:bg-[#901727] transition-colors"
                >
                  Explore Menu
                </Link>
                <Link
                  href="#contact"
                  className="bg-transparent border border-white w-full md:w-fit text-center text-white px-8 py-3 rounded-full font-medium hover:bg-white/10 transition-colors"
                >
                  Visit Our Bakery
                </Link>
              </div>
            </div>

            {/* Circular Badge */}
            <div className="hidden md:flex absolute top-12 right-12 w-32 h-32 bg-white/90 backdrop-blur-sm rounded-full flex-col items-center justify-center text-center p-4">
              <span className="text-[#2D1810] font-bold text-xs uppercase tracking-widest mb-1">
                EST. 1998
              </span>
              <div className="w-12 h-[1px] bg-[#2D1810]/20 my-1"></div>
              <span className="text-[#2D1810] text-[10px] uppercase tracking-wider text-center">
                Handmade
                <br />
                Daily
              </span>
            </div>
          </div>
        </section>

        {/* 3. Best Sellers */}
        <section className="max-w-7xl mx-auto px-6 mb-32 text-center">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#7A0D1B] mb-4 block">
            Featured Favorites
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-[#2D1810] mb-6">
            Our Best Sellers
          </h2>
          <p className="text-[#5A2E1F] max-w-lg mx-auto mb-16">
            The pastries our guests return for every morning.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {/* Item 1 */}
            <div className="group cursor-pointer">
              <div className="relative h-64 w-full mb-6 overflow-hidden rounded-2xl">
                <Image
                  src={heroImg.src}
                  alt="Butter Croissant"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="font-serif text-2xl text-[#2D1810] mb-2">
                Butter Croissant
              </h3>
              <p className="text-[#5A2E1F] text-sm mb-4 leading-relaxed line-clamp-2">
                Flaky layers of European butter, lovingly laminated for 48
                hours.
              </p>
              <div className="flex items-center justify-between">
                <span className="font-medium text-lg">$5.50</span>
                <Link
                  href="#menu"
                  className="text-[#E53E8D] text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all"
                >
                  View Details <MoveRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            {/* Item 2 */}
            <div className="group cursor-pointer">
              <div className="relative h-64 w-full mb-6 overflow-hidden rounded-2xl">
                <Image
                  src={cakes.src}
                  alt="Cinnamon Roll Deluxe"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="font-serif text-2xl text-[#2D1810] mb-2">
                Cinnamon Roll Deluxe
              </h3>
              <p className="text-[#5A2E1F] text-sm mb-4 leading-relaxed line-clamp-2">
                Soft pillowy dough swirled with cinnamon sugar and cream cheese
                frosting.
              </p>
              <div className="flex items-center justify-between">
                <span className="font-medium text-lg">$6.75</span>
                <Link
                  href="#menu"
                  className="text-[#E53E8D] text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all"
                >
                  View Details <MoveRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            {/* Item 3 */}
            <div className="group cursor-pointer">
              <div className="relative h-64 w-full mb-6 overflow-hidden rounded-2xl">
                <Image
                  src={crosseintMore.src}
                  alt="Artisan Sourdough"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="font-serif text-2xl text-[#2D1810] mb-2">
                Artisan Sourdough
              </h3>
              <p className="text-[#5A2E1F] text-sm mb-4 leading-relaxed line-clamp-2">
                72-hour fermented sourdough with a golden crust and chewy
                interior.
              </p>
              <div className="flex items-center justify-between">
                <span className="font-medium text-lg">$8.00</span>
                <Link
                  href="#menu"
                  className="text-[#E53E8D] text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all"
                >
                  View Details <MoveRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          <Link
            href="#menu"
            className="mt-16 text-[#2D1810] font-medium flex items-center justify-center gap-2 mx-auto hover:text-[#E53E8D] transition-colors"
          >
            View Full Menu <MoveRight className="w-4 h-4" />
          </Link>
        </section>

        {/* 4. About & Baking Happiness */}
        <section
          id="about"
          className="bg-[#F7A8C8]/20 py-24 px-6 mb-32 relative overflow-hidden"
        >
          {/* Abstract shape decoration */}
          <div className="absolute top-10 right-10 text-white/50 w-64 h-64 pointer-events-none">
            <Wheat className="w-full h-full" strokeWidth={0.5} />
          </div>

          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-10">
            <div className="flex-1 lg:pr-12">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#7A0D1B] mb-4 block">
                About Ovenly
              </span>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#2D1810] mb-8 leading-tight">
                Baking happiness <br />
                every single <br />
                morning.
              </h2>

              <div className="hidden lg:block relative h-[400px] w-3/4 rounded-2xl overflow-hidden mt-12">
                <Image
                  src={flour.src}
                  alt="Baker dusting flour"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            <div className="flex-1 space-y-8">
              <p className="text-[#5A2E1F] text-lg leading-relaxed">
                Every morning before sunrise, our bakers begin the sacred ritual
                of creating bread and pastries the way they were meant to be
                made—slowly, carefully, with intention.
              </p>
              <p className="text-[#5A2E1F] text-lg leading-relaxed">
                We use only the finest organic flours, European butter, and
                time-honored techniques passed down through generations. Each
                loaf is shaped by hand, each croissant folded with patience.
              </p>
              <p className="text-[#2D1810] font-medium text-lg">
                This is slow baking. This is bread with soul. This is our gift
                to you.
              </p>

              <div className="relative h-[400px] w-full rounded-2xl overflow-hidden mt-12 lg:ml-12 lg:mt-24 shadow-lg shadow-black/5">
                <Image
                  src={flourHand.src}
                  alt="Baker kneading dough"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 5. Stats */}
        <section className="max-w-5xl mx-auto px-6 mb-32 border-b border-[#2D1810]/10 pb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-[#2D1810]/10">
            <div>
              <div className="font-serif text-4xl md:text-5xl text-[#2D1810] mb-2">
                10+
              </div>
              <div className="text-xs uppercase tracking-widest text-[#7A0D1B]">
                Years Experience
              </div>
            </div>
            <div>
              <div className="font-serif text-4xl md:text-5xl text-[#2D1810] mb-2">
                5K+
              </div>
              <div className="text-xs uppercase tracking-widest text-[#7A0D1B]">
                Pastries Monthly
              </div>
            </div>
            <div>
              <div className="font-serif text-4xl md:text-5xl text-[#2D1810] mb-2">
                100%
              </div>
              <div className="text-xs uppercase tracking-widest text-[#7A0D1B]">
                Handmade
              </div>
            </div>
            <div>
              <div className="font-serif text-4xl md:text-5xl text-[#2D1810] mb-2">
                1K+
              </div>
              <div className="text-xs uppercase tracking-widest text-[#7A0D1B]">
                Happy Customers
              </div>
            </div>
          </div>
        </section>

        {/* 6. Why People Return */}
        <section className="max-w-7xl mx-auto px-6 mb-32 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-[#2D1810] mb-16 italic">
            Why people return every morning
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#FFF8F4] p-8 md:p-10 rounded-[32px] shadow-sm shadow-[#2D1810]/5 border border-[#2D1810]/5 flex flex-col items-center">
              <div className="w-12 h-12 bg-[#F7A8C8]/30 rounded-full flex items-center justify-center text-[#E53E8D] mb-6">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl text-[#2D1810] mb-4">
                Fresh Daily
              </h3>
              <p className="text-[#5A2E1F] text-sm leading-relaxed">
                Every pastry is baked before sunrise, ensuring you experience
                the warmth of fresh-from-the-oven goodness.
              </p>
            </div>

            <div className="bg-[#FFF8F4] p-8 md:p-10 rounded-[32px] shadow-sm shadow-[#2D1810]/5 border border-[#2D1810]/5 flex flex-col items-center">
              <div className="w-12 h-12 bg-[#F7A8C8]/30 rounded-full flex items-center justify-center text-[#E53E8D] mb-6">
                <Leaf className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl text-[#2D1810] mb-4">
                Organic Ingredients
              </h3>
              <p className="text-[#5A2E1F] text-sm leading-relaxed">
                We source only the finest organic flours, European butter, and
                seasonal ingredients from local farms.
              </p>
            </div>

            <div className="bg-[#FFF8F4] p-8 md:p-10 rounded-[32px] shadow-sm shadow-[#2D1810]/5 border border-[#2D1810]/5 flex flex-col items-center">
              <div className="w-12 h-12 bg-[#F7A8C8]/30 rounded-full flex items-center justify-center text-[#7A0D1B] mb-6">
                <Wheat className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl text-[#2D1810] mb-4">
                Slow Fermented
              </h3>
              <p className="text-[#5A2E1F] text-sm leading-relaxed">
                Our breads are fermented for 48-72 hours, developing deep
                flavors and perfect texture naturally.
              </p>
            </div>

            <div className="bg-[#FFF8F4] p-8 md:p-10 rounded-[32px] shadow-sm shadow-[#2D1810]/5 border border-[#2D1810]/5 flex flex-col items-center">
              <div className="w-12 h-12 bg-[#F7A8C8]/30 rounded-full flex items-center justify-center text-[#E53E8D] mb-6">
                <Heart className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl text-[#2D1810] mb-4">
                Handmade Process
              </h3>
              <p className="text-[#5A2E1F] text-sm leading-relaxed">
                Every loaf is shaped by hand, every croissant folded with
                care—no machines, just craftsmanship.
              </p>
            </div>
          </div>
        </section>

        {/* 7. Menu */}
        <section
          id="menu"
          className="max-w-7xl mx-auto px-6 mb-32 flex flex-col md:flex-row gap-16 items-center"
        >
          <div className="flex-1 w-full relative h-[600px] md:h-[800px] rounded-[40px] overflow-hidden shadow-xl shadow-[#2D1810]/10">
            <Image
              src={catalog.src}
              alt="Bread shelves"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="flex-1 w-full">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#7A0D1B] mb-4 block">
              Signature Menu
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-[#2D1810] mb-12 italic">
              Discover our handcrafted collection
            </h2>

            {/* Menu Sections */}
            <div className="space-y-12 mb-12">
              {/* Category */}
              <div>
                <h3 className="text-[#2D1810] font-serif text-xl border-b border-[#2D1810]/10 pb-3 mb-6">
                  Artisan Bread
                </h3>
                <div className="space-y-6">
                  <div className="flex justify-between items-baseline group cursor-default">
                    <div>
                      <h4 className="font-medium text-[#2D1810]">
                        Country Sourdough
                      </h4>
                      <p className="text-[#7A0D1B] text-sm mt-1">
                        72-hour fermented, organic wheat
                      </p>
                    </div>
                    <div className="text-[#E53E8D] font-medium">$8.50</div>
                  </div>
                  <div className="flex justify-between items-baseline group cursor-default">
                    <div>
                      <h4 className="font-medium text-[#2D1810]">
                        Seeded Multigrain
                      </h4>
                      <p className="text-[#7A0D1B] text-sm mt-1">
                        Sunflower, sesame, flax
                      </p>
                    </div>
                    <div className="text-[#E53E8D] font-medium">$9.00</div>
                  </div>
                </div>
              </div>

              {/* Category */}
              <div>
                <h3 className="text-[#2D1810] font-serif text-xl border-b border-[#2D1810]/10 pb-3 mb-6">
                  Pastries
                </h3>
                <div className="space-y-6">
                  <div className="flex justify-between items-baseline group cursor-default">
                    <div>
                      <h4 className="font-medium text-[#2D1810]">
                        Almond Croissant
                      </h4>
                      <p className="text-[#7A0D1B] text-sm mt-1">
                        Frangipane filling, toasted almonds
                      </p>
                    </div>
                    <div className="text-[#E53E8D] font-medium">$6.50</div>
                  </div>
                  <div className="flex justify-between items-baseline group cursor-default">
                    <div>
                      <h4 className="font-medium text-[#2D1810]">
                        Pain au Chocolat
                      </h4>
                      <p className="text-[#7A0D1B] text-sm mt-1">
                        Valrhona dark chocolate
                      </p>
                    </div>
                    <div className="text-[#E53E8D] font-medium">$5.75</div>
                  </div>
                </div>
              </div>

              {/* Category */}
              <div>
                <h3 className="text-[#2D1810] font-serif text-xl border-b border-[#2D1810]/10 pb-3 mb-6">
                  Celebration Cakes
                </h3>
                <div className="space-y-6">
                  <div className="flex justify-between items-baseline group cursor-default">
                    <div>
                      <h4 className="font-medium text-[#2D1810]">
                        Custom Layer Cakes
                      </h4>
                      <p className="text-[#7A0D1B] text-sm mt-1">
                        Personalized designs, 48hr notice
                      </p>
                    </div>
                    <div className="text-[#E53E8D] font-medium">From $65</div>
                  </div>
                </div>
              </div>
            </div>

            <Link
              href="#contact"
              className="bg-[#E53E8D] text-white px-10 py-4 rounded-full font-medium hover:bg-[#7A0D1B] transition-colors inline-block text-center"
            >
              Order Online
            </Link>
          </div>
        </section>

        {/* 8. Testimonials */}
        <section className="bg-[#F7A8C8]/20 py-24 px-6 mb-32">
          <div className="max-w-6xl mx-auto text-center">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#7A0D1B] mb-4 block">
              Kind Words
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-[#2D1810] mb-16 italic">
              What our guests say
            </h2>

            <p className="font-serif text-2xl md:text-3xl lg:text-4xl leading-snug text-[#2D1810] max-w-4xl mx-auto italic mb-8">
              "The croissants here are simply extraordinary. Every bite
              transports me back to mornings in Paris. The care and quality are
              unmatched."
            </p>
            <div className="flex items-center justify-center gap-1 mb-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-[#E53E8D] text-[#E53E8D]"
                />
              ))}
            </div>
            <div className="text-[#2D1810] font-medium mb-1">
              Sarah Mitchell
            </div>
            <div className="text-[#7A0D1B] text-sm mb-16">Regular Guest</div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="bg-[#FFF8F4] p-8 rounded-[32px] shadow-sm shadow-[#2D1810]/5 border border-[#2D1810]/5">
                <div className="flex items-center gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-[#E53E8D] text-[#E53E8D]"
                    />
                  ))}
                </div>
                <p className="text-[#5A2E1F] text-sm leading-relaxed mb-8">
                  "Best sourdough in the city. The texture is perfect, and you
                  can taste the slow fermentation process. Worth every penny."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#F7A8C8]/50 flex-shrink-0"></div>
                  <div>
                    <div className="text-[#2D1810] font-medium text-sm">
                      Michael Chen
                    </div>
                    <div className="text-[#7A0D1B] text-xs">Food Critic</div>
                  </div>
                </div>
              </div>

              <div className="bg-[#FFF8F4] p-8 rounded-[32px] shadow-sm shadow-[#2D1810]/5 border border-[#2D1810]/5">
                <div className="flex items-center gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-[#E53E8D] text-[#E53E8D]"
                    />
                  ))}
                </div>
                <p className="text-[#5A2E1F] text-sm leading-relaxed mb-8">
                  "Ordered a custom birthday cake and it was absolutely
                  stunning. Beautiful design and even better taste. Highly
                  recommend!"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#F7A8C8]/50 flex-shrink-0"></div>
                  <div>
                    <div className="text-[#2D1810] font-medium text-sm">
                      Emma Rodriguez
                    </div>
                    <div className="text-[#7A0D1B] text-xs">
                      Birthday Celebration
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#FFF8F4] p-8 rounded-[32px] shadow-sm shadow-[#2D1810]/5 border border-[#2D1810]/5">
                <div className="flex items-center gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-[#E53E8D] text-[#E53E8D]"
                    />
                  ))}
                </div>
                <p className="text-[#5A2E1F] text-sm leading-relaxed mb-8">
                  "This bakery has become my Sunday morning ritual. The
                  atmosphere is warm, staff are friendly, and the pastries are
                  divine."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#F7A8C8]/50 flex-shrink-0"></div>
                  <div>
                    <div className="text-[#2D1810] font-medium text-sm">
                      James O'Brien
                    </div>
                    <div className="text-[#7A0D1B] text-xs">Weekly Visitor</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 9. FAQ */}
        <section id="faq" className="max-w-3xl mx-auto px-6 mb-32">
          <h2 className="font-serif text-3xl md:text-4xl text-[#2D1810] mb-4 text-center italic">
            Frequently Asked Questions
          </h2>
          <p className="text-[#7A0D1B] text-center mb-12">
            Simple answers, freshly prepared.
          </p>

          <FAQ />
        </section>

        {/* 10. CTA Box */}
        <section className="max-w-6xl mx-auto px-6 mb-32">
          <div className="bg-[#2D1810] rounded-[40px] p-12 md:p-24 text-center relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-10 right-10 opacity-10">
              <svg
                width="60"
                height="60"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white"
              >
                <path d="m15.5 15.5 6-6" />
                <path d="m18 18 3-3" />
                <path d="m8.5 8.5 6-6" />
                <path d="m5.5 11.5 6-6" />
                <path d="m15.5 15.5-2.5-2.5" />
                <path d="m12.5 12.5-3 3" />
                <path d="M7.64 16.36 4 20l-1.36-1.36-1.28-1.28a1 1 0 0 1 0-1.42l6.83-6.83a1 1 0 0 1 1.42 0l1.28 1.28 1.36 1.36 2.5 2.5a1 1 0 0 1 0 1.42l-6.83 6.83a1 1 0 0 1-1.42 0l-1.28-1.28L4 20" />
              </svg>
            </div>
            <div className="absolute bottom-10 left-10 opacity-10 text-white transform rotate-45">
              <Wheat className="w-24 h-24" />
            </div>

            <span className="font-serif italic text-[#E53E8D] text-xl mb-4 block relative z-10">
              Fresh from the oven
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-8 max-w-2xl mx-auto leading-tight relative z-10">
              Bring warmth to your next celebration.
            </h2>
            <p className="text-white/80 max-w-lg mx-auto mb-12 relative z-10">
              Custom cakes, brunch boxes, and artisan pastries for birthdays,
              weddings, and cozy mornings.
            </p>
            <div className="flex flex-wrap justify-center gap-4 relative z-10">
              <Link
                href="#menu"
                className="bg-[#E53E8D] text-white px-8 py-3 rounded-full font-medium hover:bg-[#7A0D1B] transition-colors text-center"
              >
                Order Now
              </Link>
              <Link
                href="#contact"
                className="bg-transparent border border-white/30 text-white px-8 py-3 rounded-full font-medium hover:bg-white border-hover transition-all hover:text-[#2D1810] hover:border-white text-center"
              >
                Book a Custom Cake
              </Link>
            </div>
          </div>
        </section>

        {/* 11. Visit Us */}
        <section
          id="contact"
          className="max-w-7xl mx-auto px-6 mb-32 flex flex-col lg:flex-row gap-16 items-center"
        >
          <div className="flex-1 w-full relative h-[500px] md:h-[600px] rounded-[40px] overflow-hidden shadow-xl shadow-[#2D1810]/10">
            <Image
              src={kitchen.src}
              alt="Bakery interior"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="flex-1 w-full">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#7A0D1B] mb-4 block">
              Visit Us
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-[#2D1810] mb-12 italic">
              Come say hello
            </h2>

            <ul className="space-y-8 mb-10">
              <li className="flex gap-4">
                <div className="w-10 h-10 bg-[#F7A8C8]/30 rounded-full flex items-center justify-center text-[#E53E8D] flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium text-[#2D1810] mb-1">Address</h4>
                  <p className="text-[#5A2E1F] text-sm">
                    342 Artisan Lane
                    <br />
                    Portland, OR 97209
                  </p>
                </div>
              </li>

              <li className="flex gap-4">
                <div className="w-10 h-10 bg-[#F7A8C8]/30 rounded-full flex items-center justify-center text-[#E53E8D] flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium text-[#2D1810] mb-1">
                    Opening Hours
                  </h4>
                  <p className="text-[#5A2E1F] text-sm">
                    Monday - Friday: 7:00 AM - 6:00 PM
                    <br />
                    Saturday - Sunday: 8:00 AM - 5:00 PM
                  </p>
                </div>
              </li>

              <li className="flex gap-4">
                <div className="w-10 h-10 bg-[#F7A8C8]/30 rounded-full flex items-center justify-center text-[#E53E8D] flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium text-[#2D1810] mb-1">Contact</h4>
                  <p className="text-[#5A2E1F] text-sm">(503) 555-0198</p>
                </div>
              </li>

              <li className="flex gap-4">
                <div className="w-10 h-10 bg-[#F7A8C8]/30 rounded-full flex items-center justify-center text-[#E53E8D] flex-shrink-0">
                  <Instagram className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium text-[#2D1810] mb-1">Follow Us</h4>
                  <p className="text-[#5A2E1F] text-sm">@alwaystimeforbrownie</p>
                </div>
              </li>
            </ul>

            <div className="bg-[#FFF8F4] border border-[#2D1810]/10 rounded-2xl p-5 mb-8">
              <div className="flex items-center gap-2 text-sm text-[#2D1810] font-medium mb-1">
                <Heart className="w-4 h-4 text-[#E53E8D]" /> Dog-friendly patio
              </div>
              <div className="flex items-center gap-2 text-sm text-[#2D1810] font-medium">
                <Clock className="w-4 h-4 text-[#E53E8D]" /> Fresh coffee served
                daily
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=342+Artisan+Lane+Portland+OR+97209"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#E53E8D] text-white px-8 py-3 rounded-full font-medium hover:bg-[#7A0D1B] transition-colors w-full sm:w-auto text-center inline-block"
            >
              Get Directions
            </a>
          </div>
        </section>
      </main>

      {/* 12. Footer */}
      <footer className="border-t border-[#2D1810]/10 pt-16 pb-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <div className="flex flex-col items-center text-center mb-16">
            <Image
              src="/logo.png"
              alt="Atelier Logo"
              width={200}
              height={60}
              className="h-16 w-auto object-contain mb-6"
            />
            <p className="text-[#7A0D1B] font-serif italic">
              Made slowly, served warmly
            </p>
          </div>

          <div className="flex w-full mb-16 px-4 md:px-0">
            <div
              className="h-6 w-full rounded-sm bg-gradient-to-r from-transparent via-[#E53E8D] to-transparent opacity-80"
              style={{ clipPath: "polygon(5% 0, 95% 0, 100% 100%, 0% 100%)" }}
            ></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 w-full max-w-5xl mb-16">
            <div>
              <h4 className="font-medium text-[#2D1810] mb-4">Bakery</h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="#about"
                    className="text-[#7A0D1B] text-sm hover:text-[#E53E8D] transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#about"
                    className="text-[#7A0D1B] text-sm hover:text-[#E53E8D] transition-colors"
                  >
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link
                    href="#about"
                    className="text-[#7A0D1B] text-sm hover:text-[#E53E8D] transition-colors"
                  >
                    Ingredients
                  </Link>
                </li>
                <li>
                  <Link
                    href="#about"
                    className="text-[#7A0D1B] text-sm hover:text-[#E53E8D] transition-colors"
                  >
                    Sustainability
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-[#2D1810] mb-4">Menu</h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="#menu"
                    className="text-[#7A0D1B] text-sm hover:text-[#E53E8D] transition-colors"
                  >
                    Bread
                  </Link>
                </li>
                <li>
                  <Link
                    href="#menu"
                    className="text-[#7A0D1B] text-sm hover:text-[#E53E8D] transition-colors"
                  >
                    Pastries
                  </Link>
                </li>
                <li>
                  <Link
                    href="#menu"
                    className="text-[#7A0D1B] text-sm hover:text-[#E53E8D] transition-colors"
                  >
                    Cakes
                  </Link>
                </li>
                <li>
                  <Link
                    href="#menu"
                    className="text-[#7A0D1B] text-sm hover:text-[#E53E8D] transition-colors"
                  >
                    Seasonal
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-[#2D1810] mb-4">Support</h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="#contact"
                    className="text-[#7A0D1B] text-sm hover:text-[#E53E8D] transition-colors"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="#faq"
                    className="text-[#7A0D1B] text-sm hover:text-[#E53E8D] transition-colors"
                  >
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contact"
                    className="text-[#7A0D1B] text-sm hover:text-[#E53E8D] transition-colors"
                  >
                    Catering
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contact"
                    className="text-[#7A0D1B] text-sm hover:text-[#E53E8D] transition-colors"
                  >
                    Gift Cards
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-[#2D1810] mb-4">Socials</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="https://instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#7A0D1B] text-sm hover:text-[#E53E8D] transition-colors flex items-center gap-2"
                  >
                    <Instagram className="w-4 h-4" /> Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://facebook.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#7A0D1B] text-sm hover:text-[#E53E8D] transition-colors flex items-center gap-2"
                  >
                    <Facebook className="w-4 h-4" /> Facebook
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full flex flex-col md:flex-row justify-between items-center pt-8 border-t border-[#2D1810]/10">
            <p className="text-[#7A0D1B] text-xs mb-4 md:mb-0">
              © 2026 Always Time For Brownie. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
