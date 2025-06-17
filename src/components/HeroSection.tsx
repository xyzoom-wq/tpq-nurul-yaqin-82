
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section id="beranda" className="relative bg-gradient-to-br from-soft-blue via-soft-green to-teal-blue min-h-screen flex items-center">
      <div className="absolute inset-0 bg-white/10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6">
              Sekolah Islam
              <span className="block text-islamic-green-100">Nurul Yaqin</span>
            </h1>
            <p className="font-poppins text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Membangun Generasi Qur'ani Sejak Dini
            </p>
            <p className="font-poppins text-lg text-white/80 mb-10 max-w-xl">
              Mendidik anak dengan pendekatan Islami yang holistik, mengintegrasikan ilmu agama dan ilmu umum untuk membentuk karakter yang berakhlak mulia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg"
                className="bg-islamic-green-600 hover:bg-islamic-green-700 text-white font-poppins font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Daftar Sekarang
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-islamic-green-600 font-poppins font-semibold px-8 py-3 rounded-full transition-all duration-300"
              >
                Pelajari Lebih Lanjut
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Anak-anak belajar di Sekolah Islam Nurul Yaqin"
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
            </div>
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-islamic-green-400 rounded-full opacity-70 animate-bounce"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-soft-blue rounded-full opacity-60 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
