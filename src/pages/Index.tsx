
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProgramSection from '@/components/ProgramSection';
import NewsSection from '@/components/NewsSection';
import RegistrationSection from '@/components/RegistrationSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white font-poppins">
      <Navbar />
      <main className="pt-16">
        <HeroSection />
        <AboutSection />
        <ProgramSection />
        <NewsSection />
        <RegistrationSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
