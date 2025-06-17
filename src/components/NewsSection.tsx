
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const NewsSection = () => {
  const news = [
    {
      title: "Peringatan Maulid Nabi Muhammad SAW 1445 H",
      date: "15 Oktober 2024",
      excerpt: "Sekolah Islam Nurul Yaqin mengadakan peringatan Maulid Nabi dengan berbagai kegiatan edukatif dan menyenangkan...",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      category: "Kegiatan"
    },
    {
      title: "Prestasi Siswa dalam Lomba Tahfidz Tingkat Kota",
      date: "8 Oktober 2024",
      excerpt: "Alhamdulillah, siswa-siswi Nurul Yaqin meraih juara dalam lomba tahfidz tingkat kota dengan hafalan yang luar biasa...",
      image: "https://images.unsplash.com/photo-1469041797191-50ace28483c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      category: "Prestasi"
    },
    {
      title: "Workshop Parenting Islami untuk Orang Tua",
      date: "1 Oktober 2024",
      excerpt: "Sekolah mengadakan workshop parenting Islami untuk membantu orang tua dalam mendidik anak di rumah...",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      category: "Workshop"
    }
  ];

  return (
    <section id="berita" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-4xl text-gray-800 mb-4">
            Berita & Kegiatan
          </h2>
          <p className="font-poppins text-lg text-gray-600 max-w-3xl mx-auto">
            Ikuti perkembangan terbaru dan berbagai kegiatan menarik di Sekolah Islam Nurul Yaqin
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <Card key={index} className="bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer overflow-hidden">
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-islamic-green-500 text-white px-3 py-1 rounded-full text-sm font-poppins font-medium">
                    {item.category}
                  </span>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="font-poppins font-semibold text-lg text-gray-800 line-clamp-2">
                  {item.title}
                </CardTitle>
                <p className="font-poppins text-sm text-gray-500">{item.date}</p>
              </CardHeader>
              <CardContent>
                <p className="font-poppins text-gray-700 text-sm leading-relaxed line-clamp-3 mb-4">
                  {item.excerpt}
                </p>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="font-poppins text-islamic-green-600 border-islamic-green-600 hover:bg-islamic-green-600 hover:text-white"
                >
                  Baca Selengkapnya
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg"
            className="bg-islamic-green-600 hover:bg-islamic-green-700 text-white font-poppins font-semibold px-8 py-3 rounded-full"
          >
            Lihat Semua Berita
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
