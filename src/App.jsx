import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Products from './components/Products';
import Portfolio from './components/Portfolio';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <div className="min-h-screen bg-[#faf8f5] text-slate-900 selection:bg-indigo-600 selection:text-white font-sans antialiased overflow-x-hidden">
      {/* Sticky Header Navbar */}
      <Navbar />

      {/* Page Sections */}
      <main id="main-content">
        <Hero />
        <About />
        <Services />
        <Products />
        <Portfolio />
        <WhyChooseUs />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Back to top floating trigger */}
      <ScrollToTop />
    </div>
  );
}
