
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const RegistrationSection = () => {
  const steps = [
    {
      number: "1",
      title: "Syarat Pendaftaran",
      description: "Siapkan dokumen yang diperlukan untuk proses pendaftaran",
      items: [
        "Fotokopi Akte Kelahiran",
        "Fotokopi Kartu Keluarga",
        "Pas foto anak 3x4 (3 lembar)",
        "Surat keterangan sehat dari dokter",
        "Formulir pendaftaran yang telah diisi"
      ]
    },
    {
      number: "2", 
      title: "Prosedur Pendaftaran",
      description: "Ikuti langkah-langkah berikut untuk mendaftarkan anak Anda",
      items: [
        "Mengisi formulir pendaftaran online atau offline",
        "Melengkapi berkas persyaratan",
        "Membayar uang pendaftaran",
        "Mengikuti tes masuk dan wawancara",
        "Menunggu pengumuman hasil seleksi"
      ]
    },
    {
      number: "3",
      title: "Jadwal Penting",
      description: "Perhatikan tanggal-tanggal penting dalam proses pendaftaran",
      items: [
        "Pembukaan pendaftaran: 1 Januari 2025",
        "Penutupan pendaftaran: 28 Februari 2025", 
        "Tes masuk: 1-7 Maret 2025",
        "Pengumuman hasil: 15 Maret 2025",
        "Daftar ulang: 16-31 Maret 2025"
      ]
    }
  ];

  return (
    <section id="pendaftaran" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-4xl text-gray-800 mb-4">
            Pendaftaran Siswa Baru
          </h2>
          <p className="font-poppins text-lg text-gray-600 max-w-3xl mx-auto">
            Bergabunglah dengan keluarga besar Sekolah Islam Nurul Yaqin. Ikuti panduan pendaftaran berikut ini.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <Card key={index} className="relative border-2 border-gray-200 hover:border-islamic-green-300 hover:shadow-xl transition-all duration-300">
              <div className={`absolute -top-4 left-6 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${
                index === 0 ? 'bg-islamic-green-500' : 
                index === 1 ? 'bg-soft-blue' : 'bg-teal-blue'
              }`}>
                {step.number}
              </div>
              <CardHeader className="pt-8">
                <CardTitle className="font-poppins font-semibold text-xl text-gray-800">
                  {step.title}
                </CardTitle>
                <p className="font-poppins text-gray-600 text-sm">
                  {step.description}
                </p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {step.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start font-poppins text-sm text-gray-700">
                      <span className="w-2 h-2 bg-islamic-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-islamic-green-500 to-teal-blue rounded-2xl p-8 text-center text-white">
          <h3 className="font-poppins font-semibold text-2xl mb-4">
            Siap Mendaftarkan Anak Anda?
          </h3>
          <p className="font-poppins text-lg mb-6 opacity-90">
            Jangan lewatkan kesempatan untuk memberikan pendidikan terbaik bagi buah hati Anda
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-white text-islamic-green-600 hover:bg-gray-100 font-poppins font-semibold px-8 py-3 rounded-full"
            >
              Daftar Online
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-islamic-green-600 font-poppins font-semibold px-8 py-3 rounded-full"
            >
              Download Formulir
            </Button>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-12 text-center">
          <p className="font-poppins text-gray-600 mb-4">
            Butuh bantuan atau informasi lebih lanjut?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center">
              <span className="font-poppins text-sm text-gray-600">📞 Telp: (021) 123-4567</span>
            </div>
            <div className="flex items-center">
              <span className="font-poppins text-sm text-gray-600">📧 Email: info@nurulyaqin.sch.id</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationSection;
