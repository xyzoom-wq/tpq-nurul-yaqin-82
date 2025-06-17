
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  return (
    <section id="profil" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-4xl text-gray-800 mb-4">
            Profil Sekolah
          </h2>
          <p className="font-poppins text-lg text-gray-600 max-w-3xl mx-auto">
            Mengenal lebih dekat visi, misi, dan komitmen kami dalam mendidik generasi Qur'ani
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Gedung Sekolah Islam Nurul Yaqin"
              className="w-full h-96 object-cover rounded-2xl shadow-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-islamic-green-600/20 to-transparent rounded-2xl"></div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            {/* Visi */}
            <Card className="border-l-4 border-islamic-green-500 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <h3 className="font-poppins font-semibold text-2xl text-islamic-green-700 mb-4">
                  Visi Kami
                </h3>
                <p className="font-poppins text-gray-700 leading-relaxed">
                  Menjadi lembaga pendidikan Islam terdepan yang menghasilkan generasi Qur'ani yang beriman, bertakwa, berakhlak mulia, cerdas, dan berkarakter kuat.
                </p>
              </CardContent>
            </Card>

            {/* Misi */}
            <Card className="border-l-4 border-soft-blue shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <h3 className="font-poppins font-semibold text-2xl text-teal-blue mb-4">
                  Misi Kami
                </h3>
                <ul className="font-poppins text-gray-700 space-y-2">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-teal-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Menyelenggarakan pendidikan berkualitas berbasis Al-Qur'an dan As-Sunnah
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-teal-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Mengembangkan potensi anak secara holistik melalui pembelajaran yang menyenangkan
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-teal-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Membentuk karakter Islami yang kuat dan berakhlak mulia
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-teal-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Mempersiapkan generasi yang siap menghadapi tantangan masa depan
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
