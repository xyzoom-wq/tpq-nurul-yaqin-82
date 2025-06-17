
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ProgramSection = () => {
  const programs = [
    {
      title: "Tahfidz Al-Qur'an",
      description: "Program menghafal Al-Qur'an dengan metode yang menyenangkan dan mudah dipahami anak-anak",
      icon: "📖",
      color: "bg-islamic-green-100 border-islamic-green-300"
    },
    {
      title: "Kegiatan Islami",
      description: "Pembelajaran adab, akhlak, dan praktik ibadah sehari-hari dengan pendekatan yang menyenangkan",
      icon: "🕌",
      color: "bg-soft-blue/30 border-blue-300"
    },
    {
      title: "Pembelajaran Tematik",
      description: "Kurikulum terintegrasi yang menggabungkan ilmu agama dan umum dengan metode tematik",
      icon: "🎓",
      color: "bg-soft-green/50 border-green-300"
    },
    {
      title: "Bermain Edukatif",
      description: "Kegiatan bermain sambil belajar yang mengembangkan kreativitas dan kemampuan sosial anak",
      icon: "🎨",
      color: "bg-yellow-100 border-yellow-300"
    }
  ];

  return (
    <section id="program" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-4xl text-gray-800 mb-4">
            Program Unggulan
          </h2>
          <p className="font-poppins text-lg text-gray-600 max-w-3xl mx-auto">
            Program pendidikan holistik yang dirancang khusus untuk mengembangkan potensi anak secara optimal
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <Card 
              key={index} 
              className={`${program.color} hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer`}
            >
              <CardHeader className="text-center pb-4">
                <div className="text-4xl mb-4">{program.icon}</div>
                <CardTitle className="font-poppins font-semibold text-xl text-gray-800">
                  {program.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-poppins text-gray-700 text-center leading-relaxed">
                  {program.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional info */}
        <div className="mt-16 bg-gradient-to-r from-islamic-green-500 to-teal-blue rounded-2xl p-8 text-center">
          <h3 className="font-poppins font-semibold text-2xl text-white mb-4">
            Mengapa Memilih Kami?
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-white">
            <div>
              <div className="text-3xl font-bold mb-2">15+</div>
              <p className="font-poppins">Tahun Pengalaman</p>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">500+</div>
              <p className="font-poppins">Alumni Berprestasi</p>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">20+</div>
              <p className="font-poppins">Tenaga Pengajar Profesional</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramSection;
